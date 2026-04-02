import re

with open('singapoly.html', 'r') as f:
    content = f.read()

# 1. Replace constants with lets (Lines 475 to 497)
replacement_1 = """
        let sgOutline, jurongIslandOutline, sentosaOutline, ubinOutline, tekongOutline;
        let minLon, maxLon, minLat, maxLat, lonRange, latRange;
        let gridWidth, gridHeight, voxelSize;
"""
content = re.sub(r'const sgOutline = \[.*?const voxelSize = 1\.5;', replacement_1.strip(), content, flags=re.DOTALL)

# 2. Replace groundIMesh variables with lets (Lines 499 to 503)
replacement_2 = """
        // --- Voxel Island Generation using InstancedMesh ---
        let cols, rows, maxInstances, groundIMesh;
"""
content = re.sub(r'// --- Voxel Island Generation using InstancedMesh ---.*?const maxInstances = cols \* rows;', replacement_2.strip(), content, flags=re.DOTALL)

# 3. Replace the actual ground generation and move it (Lines 505 to 550)
content = re.sub(r'const voxelGeo = new THREE\.BoxGeometry\(voxelSize, voxelSize \* 4, voxelSize\);.*?groundGroup\.add\(groundIMesh\);', '', content, flags=re.DOTALL)

# 4. Make groupColors and players `let`
content = re.sub(r'const players = \[', 'let players = [', content)
content = re.sub(r'const groupColors = \{', 'let groupColors = {', content)

# 5. Rewrite the fetch block
fetch_old = r"fetch\('monopoly\.json'\).*?document\.getElementById\('loading'\)\.innerText = \"Error loading data\";\n\s*\}\);"

fetch_new = """
        // Load Scene Configuration and GeoJSON
        Promise.all([
            fetch('scene.json').then(res => res.json()),
            fetch('singapoly.json').then(res => res.json())
        ]).then(([sceneData, data]) => {
            // Apply Scene Data
            sgOutline = sceneData.polygons.sgOutline;
            jurongIslandOutline = sceneData.polygons.jurongIslandOutline;
            sentosaOutline = sceneData.polygons.sentosaOutline;
            ubinOutline = sceneData.polygons.ubinOutline;
            tekongOutline = sceneData.polygons.tekongOutline;
            
            minLon = sceneData.bounds.minLon; maxLon = sceneData.bounds.maxLon;
            minLat = sceneData.bounds.minLat; maxLat = sceneData.bounds.maxLat;
            lonRange = maxLon - minLon;
            latRange = maxLat - minLat;
            
            gridWidth = sceneData.grid.width;
            gridHeight = sceneData.grid.height;
            voxelSize = sceneData.grid.voxelSize;
            
            if (sceneData.colors && sceneData.colors.groups) groupColors = sceneData.colors.groups;
            if (sceneData.players) players = sceneData.players;
            
            // Generate Ground
            cols = Math.floor(gridWidth / voxelSize);
            rows = Math.floor(gridHeight / voxelSize);
            maxInstances = cols * rows;

            const voxelGeo = new THREE.BoxGeometry(voxelSize, voxelSize * 4, voxelSize);
            const voxelMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
            groundIMesh = new THREE.InstancedMesh(voxelGeo, voxelMat, maxInstances);
            groundIMesh.receiveShadow = true;
            groundIMesh.castShadow = true;

            const dummy = new THREE.Object3D();
            const color = new THREE.Color();
            voxelCount = 0;
            voxelOriginalColors.length = 0;

            for(let i=0; i<cols; i++) {
                for(let j=0; j<rows; j++) {
                    const x = (i * voxelSize) - gridWidth/2;
                    const z = (j * voxelSize) - gridHeight/2;
                    
                    const lon = minLon + (x + gridWidth/2)/gridWidth * lonRange;
                    const lat = minLat + (-z + gridHeight/2)/gridHeight * latRange;
                    
                    const isSG = pointInPolygon([lon, lat], sgOutline);
                    const isIslands = pointInPolygon([lon, lat], sentosaOutline) || 
                                      pointInPolygon([lon, lat], ubinOutline) || 
                                      pointInPolygon([lon, lat], tekongOutline) ||
                                      pointInPolygon([lon, lat], jurongIslandOutline);
                    
                    if(isSG || isIslands) {
                        const hOffset = Math.random() * 0.8;
                        dummy.position.set(x, -4.5 + hOffset, z);
                        dummy.updateMatrix();
                        groundIMesh.setMatrixAt(voxelCount, dummy.matrix);
                        
                        const rC = Math.random();
                        if(rC > 0.8) color.setHex(0xbadc58); // light green
                        else if(rC > 0.3) color.setHex(0x88D05C); // main green
                        else color.setHex(0x6ab04c); // dark green
                        
                        // Add some sand beaches near the edges (simple random proxy)
                        if(rC > 0.95) color.setHex(0xf6e58d);

                        voxelOriginalColors.push(color.getHex());
                        groundIMesh.setColorAt(voxelCount, color);
                        voxelCount++;
                    }
                }
            }
            groundIMesh.count = voxelCount;
            groundGroup.add(groundIMesh);

            document.getElementById('loading').style.display = 'none';
            data.features.sort((a, b) => a.properties.index - b.properties.index);

            data.features.forEach(feature => {
                const coords = feature.geometry.coordinates;
                const props = feature.properties;
                
                const nx = (coords[0] - minLon) / lonRange;
                const nz = (coords[1] - minLat) / latRange;
                
                const x = (nx * gridWidth) - (gridWidth / 2);
                const z = -((nz * gridHeight) - (gridHeight / 2));

                const baseHeight = props.price ? props.price / 10 : 12;
                let bWidth = 10, bDepth = 10;
                if (props.type === 'station') { bWidth = 14; bDepth = 14; }
                if (props.type === 'vehicle') { bWidth = 8; bDepth = 8; } 

                const colorHex = groupColors[props.group] || '#dddddd';
                const bldgGroup = createBuilding(bWidth, baseHeight, bDepth, colorHex);
                bldgGroup.position.set(x, 0, z);
                groundGroup.add(bldgGroup);

                const plotGeo = new THREE.BoxGeometry(bWidth + 6, 0.6, bDepth + 6);
                const plotMat = new THREE.MeshLambertMaterial({ color: '#f1f2f6' });
                const plot = new THREE.Mesh(plotGeo, plotMat);
                plot.position.set(x, 0.3, z);
                plot.receiveShadow = true;
                groundGroup.add(plot);

                const hitGeo = new THREE.BoxGeometry(bWidth + 6, baseHeight + 4, bDepth + 6);
                const hitMat = new THREE.MeshBasicMaterial({ visible: false });
                const hitMesh = new THREE.Mesh(hitGeo, hitMat);
                hitMesh.position.set(0, baseHeight / 2, 0);
                hitMesh.userData = { 
                    props: props, baseY: 0, targetY: 0, colorHex: colorHex, parentGroup: bldgGroup 
                };
                bldgGroup.add(hitMesh);
                buildings.push(hitMesh);

                if (props.id === 'zoo') {
                    const animals = new THREE.Group();
                    const elephant = createElephant(); elephant.position.set(-6, 0, -6);
                    const tiger = createTiger(); tiger.position.set(6, 0, -6);
                    const polarBear = createPolarBear(); polarBear.position.set(-6, 0, 6);
                    const otter = createOtter(); otter.position.set(6, 0, 6);
                    animals.add(elephant, tiger, polarBear, otter);
                    animals.userData = { type: 'zoo', children: [elephant, tiger, polarBear, otter] };
                    bldgGroup.add(animals);
                    customAnimations.push(animals);
                }
                if (props.id === 'oceanarium') {
                    const whale = createWhale();
                    whale.position.set(0, 14, 0);
                    whale.userData = { type: 'whale' };
                    bldgGroup.add(whale);
                    customAnimations.push(whale);
                }
                if (props.id === 'changi') {
                    const tower = createControlTower();
                    tower.position.set(-8, 0, -8);
                    tower.userData = { type: 'tower', antenna: tower.userData.antenna };
                    bldgGroup.add(tower);
                    customAnimations.push(tower);
                }
                if (props.id === 'port') {
                    const port = createContainerPort();
                    port.position.set(0, 0, 0);
                    port.userData = { type: 'port', spreader: port.userData.spreader };
                    bldgGroup.add(port);
                    customAnimations.push(port);
                }

                boardSpaces.push({
                    mesh: hitMesh,
                    props: props,
                    owner: undefined,
                    position: new THREE.Vector3(x, baseHeight, z)
                });
            });

            const roadMat = new THREE.MeshLambertMaterial({ color: '#636e72' }); 
            const dashMat = new THREE.MeshLambertMaterial({ color: '#ffffff' });
            
            for(let i=0; i<boardSpaces.length; i++) {
                const p1 = boardSpaces[i].position;
                const p2 = boardSpaces[(i+1)%boardSpaces.length].position;
                const dist = p1.distanceTo(p2);
                
                const roadGeo = new THREE.BoxGeometry(8, 0.4, dist);
                const road = new THREE.Mesh(roadGeo, roadMat);
                road.position.set((p1.x+p2.x)/2, 0.2, (p1.z+p2.z)/2);
                road.lookAt(p2.x, 0.2, p2.z);
                road.receiveShadow = true;
                groundGroup.add(road);

                const numDashes = Math.floor(dist / 6);
                for(let d=1; d<numDashes; d++) {
                    const dash = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.5, 3), dashMat);
                    const lerpFactor = d / numDashes;
                    dash.position.lerpVectors(p1, p2, lerpFactor);
                    dash.position.y = 0.25;
                    dash.lookAt(p2.x, 0.25, p2.z);
                    dash.receiveShadow = true;
                    groundGroup.add(dash);
                }
            }

            const treeMat = new THREE.MeshLambertMaterial({ color: '#2ecc71' }); 
            const trunkMat = new THREE.MeshLambertMaterial({ color: '#d35400' }); 
            for(let i=0; i<80; i++) {
                const tx = (Math.random() - 0.5) * gridWidth;
                const tz = (Math.random() - 0.5) * gridHeight;
                const lon = minLon + (tx + gridWidth/2)/gridWidth * lonRange;
                const lat = minLat + (-tz + gridHeight/2)/gridHeight * latRange;
                if (!pointInPolygon([lon, lat], sgOutline)) continue;

                const tree = new THREE.Group();
                const trunk = new THREE.Mesh(new THREE.BoxGeometry(1.5, 3, 1.5), trunkMat);
                trunk.position.y = 1.5;
                trunk.castShadow = true; trunk.receiveShadow = true;
                
                const leavesGeo = new THREE.BoxGeometry(5, 5, 5);
                const leaves = new THREE.Mesh(leavesGeo, treeMat);
                leaves.position.y = 5.5;
                leaves.castShadow = true; leaves.receiveShadow = true;
                addEdgeOutline(leaves, leavesGeo);
                
                tree.add(trunk); tree.add(leaves);
                
                const s = 0.7 + Math.random() * 0.5;
                tree.scale.set(s, s, s);
                tree.position.set(tx, 0, tz);
                groundGroup.add(tree);
            }

            const cloudMat = new THREE.MeshLambertMaterial({ color: '#ffffff' });
            for(let i=0; i<20; i++) {
                const cloud = new THREE.Group();
                for(let j=0; j<4; j++) {
                    const sGeo = new THREE.BoxGeometry(10+Math.random()*10, 6+Math.random()*4, 10+Math.random()*10);
                    const s = new THREE.Mesh(sGeo, cloudMat);
                    s.position.set((Math.random()-0.5)*10, (Math.random()-0.5)*4, (Math.random()-0.5)*10);
                    s.castShadow = true;
                    addEdgeOutline(s, sGeo);
                    cloud.add(s);
                }
                cloud.position.set((Math.random() - 0.5) * 400, 60 + Math.random() * 40, (Math.random() - 0.5) * 400);
                cloud.userData.speed = 0.05 + Math.random() * 0.05;
                scene.add(cloud);
                clouds.push(cloud);
            }

            const carColors = sceneData.colors.cars || ['#ff7675', '#fdcb6e', '#74b9ff', '#55efc4', '#a29bfe', '#ffeaa7', '#ff9ff3'];
            for(let i=0; i<15; i++) {
                const carGroup = createCar(carColors[i%carColors.length]);
                carGroup.userData = {
                    currentNode: (i * 2) % boardSpaces.length,
                    progress: Math.random(),
                    speed: 0.002 + Math.random() * 0.002, 
                    bounceOffset: Math.random() * Math.PI * 2
                };
                groundGroup.add(carGroup);
                cars.push(carGroup);
            }

            mrt.userData = {
                currentNode: 0,
                progress: 0,
                speed: 0.008
            };

            const pedColors = sceneData.colors.pedestrians || ['#81ecec', '#fab1a0', '#74b9ff', '#a29bfe', '#ffeaa7'];
            for(let i=0; i<30; i++) {
                const pedGroup = createPedestrian(pedColors[i%pedColors.length]);
                Object.assign(pedGroup.userData, {
                    currentNode: Math.floor(Math.random() * boardSpaces.length),
                    progress: Math.random(),
                    speed: 0.001 + Math.random() * 0.001,
                    bounceOffset: Math.random() * Math.PI * 2,
                    sideOffset: (Math.random() > 0.5 ? 1 : -1) * (4 + Math.random() * 2)
                });
                groundGroup.add(pedGroup);
                pedestrians.push(pedGroup);
            }

            players.forEach((p) => {
                const tokenGroup = new THREE.Group();
                const mat = new THREE.MeshLambertMaterial({ color: p.colorHex });
                
                const pBase = new THREE.Mesh(new THREE.BoxGeometry(4, 1.5, 4), mat);
                pBase.position.y = 0.75;
                const pBody = new THREE.Mesh(new THREE.BoxGeometry(2.5, 4, 2.5), mat);
                pBody.position.y = 3.5;
                const pHead = new THREE.Mesh(new THREE.BoxGeometry(3.5, 3.5, 3.5), mat);
                pHead.position.y = 7.25;
                
                tokenGroup.add(pBase); tokenGroup.add(pBody); tokenGroup.add(pHead);
                tokenGroup.traverse(child => { if(child.isMesh) { child.castShadow = true; child.receiveShadow = true; addEdgeOutline(child, child.geometry); }});
                
                p.mesh = tokenGroup;
                groundGroup.add(tokenGroup);
            });

            if (!yGameState.get('players')) {
                pushStateToYjs();
            }
            syncStateFromYjs();
            
            const diceBtn = document.getElementById('dice-btn');
            diceBtn.style.backgroundColor = players[currentPlayerIndex].css;
            diceBtn.disabled = (myPlayerIndex !== currentPlayerIndex);
        })
        .catch(err => {
            console.error("Failed to load JSON:", err);
            document.getElementById('loading').innerText = "Error loading data";
        });
"""
content = re.sub(fetch_old, fetch_new.strip(), content, flags=re.DOTALL)

with open('singapoly.html', 'w') as f:
    f.write(content)
