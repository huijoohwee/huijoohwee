import re

def patch():
    path = '/Users/huijoohwee/Documents/GitHub/huijoohwee/content/singabldr/singabldr.html'
    with open(path, 'r') as f:
        html = f.read()

    # 1. scheduleSyncState
    old_sync = """        let sharedSyncSchedulerKey = null;

        function scheduleSyncState() {
            if (sharedSyncSchedulerKey) clearTimeout(sharedSyncSchedulerKey);
            sharedSyncSchedulerKey = setTimeout(() => {
                syncStateFromYjs();
                sharedSyncSchedulerKey = null;
            }, 50); // Coalesced debounce across runtime & persistence subscriptions
        }"""
    new_sync = """        let sharedSyncSchedulerKey = null;

        function scheduleSyncState() {
            if (sharedSyncSchedulerKey) cancelAnimationFrame(sharedSyncSchedulerKey);
            sharedSyncSchedulerKey = requestAnimationFrame(() => {
                syncStateFromYjs();
                sharedSyncSchedulerKey = null;
            });
        }"""
    html = html.replace(old_sync, new_sync)

    # 2. Add global sceneData and vehicles array
    old_ground_group = """        // --- Environment Base ---
        const groundGroup = new THREE.Group();
        scene.add(groundGroup);"""
    new_ground_group = """        // --- Environment Base ---
        const groundGroup = new THREE.Group();
        scene.add(groundGroup);
        
        let sceneData = null;
        let globalVehicles = {}; // To store plane, heli, mrt, ship"""
    html = html.replace(old_ground_group, new_ground_group)

    # 3. Fetch loading
    old_fetch = """        .then(data => {
            const sceneData = data.scene;
            
            document.getElementById('game-title').innerText = data.name || "Monopoly";"""
    new_fetch = """        .then(data => {
            sceneData = data.scene;
            
            document.getElementById('game-title').innerText = data.name || "Monopoly";"""
    html = html.replace(old_fetch, new_fetch)

    # 4. Remove plane, heli, mrt, ship from global scope
    # Find lines 953 to 1043 and comment them out, we will put them inside fetch.
    # Wait, we can just replace the whole block and put it in the fetch instead, or just keep them where they are but wrap them in a function `initGlobalVehicles()` called inside fetch.
    
    old_global_vehicles = """        // Global Flying Vehicles
        const plane = new THREE.Group();"""
    new_global_vehicles = """        // Global Flying Vehicles
        let plane, heli, mrt, ship;
        function initGlobalVehicles() {
            if (!sceneData || !sceneData.vehicles) return;
            const vData = Object.fromEntries(sceneData.vehicles.map(v => [v.type, v]));

            plane = new THREE.Group();"""
    html = html.replace(old_global_vehicles, new_global_vehicles)

    old_ship_add = """        ship.traverse(c => {if(c.isMesh) { c.castShadow=true; addEdgeOutline(c, c.geometry); }});
        ship.position.set(-200, -2, 150);
        scene.add(ship);"""
    new_ship_add = """        ship.traverse(c => {if(c.isMesh) { c.castShadow=true; addEdgeOutline(c, c.geometry); }});
        ship.position.set(-200, -2, 150);
        scene.add(ship);
        
        globalVehicles.plane = plane;
        globalVehicles.heli = heli;
        globalVehicles.mrt = mrt;
        globalVehicles.ship = ship;
        }"""
    html = html.replace(old_ship_add, new_ship_add)

    # 5. Call initGlobalVehicles in fetch
    old_push = """            if (!yGameState.get('players')) {
                pushStateToYjs();
            }"""
    new_push = """            initGlobalVehicles();
            
            if (!yGameState.get('players')) {
                pushStateToYjs();
            }"""
    html = html.replace(old_push, new_push)

    # 6. ApplyTheme and ApplyWeather
    old_apply_theme = """        function applyTheme() {
            if (!groundIMesh) return;
            const t = themeSelect.value;
            for(let i=0; i<voxelCount; i++) {
                tmpColor.setHex(voxelOriginalColors[i]);
                
                if(t === 'cny') {
                    tmpColor.lerp(new THREE.Color('#ff4757'), 0.4);
                } else if(t === 'hari_raya') {
                    tmpColor.lerp(new THREE.Color('#2ecc71'), 0.4);
                } else if(t === 'mid_autumn') {
                    tmpColor.lerp(new THREE.Color('#f39c12'), 0.4);
                } else if(t === 'deepavali') {
                    tmpColor.lerp(new THREE.Color('#9b59b6'), 0.4);
                } else if(t === 'christmas') {
                    // Snow top layer approximation
                    if(Math.random() > 0.5) tmpColor.setHex(0xffffff);
                    else tmpColor.lerp(new THREE.Color('#ffffff'), 0.6);
                }
                
                groundIMesh.setColorAt(i, tmpColor);
            }
            groundIMesh.instanceColor.needsUpdate = true;
        }"""
    new_apply_theme = """        function applyTheme() {
            if (!groundIMesh || !sceneData || !sceneData.themes) return;
            const t = themeSelect.value;
            const themeConfig = sceneData.themes[t];
            if (!themeConfig) return;

            for(let i=0; i<voxelCount; i++) {
                tmpColor.setHex(voxelOriginalColors[i]);
                
                if (themeConfig.snow) {
                    if(Math.random() > 0.5) tmpColor.setHex(0xffffff);
                    else tmpColor.lerp(new THREE.Color(themeConfig.color), themeConfig.mix);
                } else if (themeConfig.mix > 0) {
                    tmpColor.lerp(new THREE.Color(themeConfig.color), themeConfig.mix);
                }
                
                groundIMesh.setColorAt(i, tmpColor);
            }
            groundIMesh.instanceColor.needsUpdate = true;
        }"""
    html = html.replace(old_apply_theme, new_apply_theme)

    old_apply_weather = """        function applyWeather() {
            const w = weatherSelect.value;
            if(w === 'sunshine') {
                scene.background.set('#A9E1FF');
                scene.fog.color.set('#A9E1FF');
                scene.fog.density = 0.0018;
                dirLight.intensity = 0.4;
                ambientLight.intensity = 0.7;
            } else if(w === 'cloudy') {
                scene.background.set('#8E9CA3');
                scene.fog.color.set('#8E9CA3');
                scene.fog.density = 0.0025;
                dirLight.intensity = 0.15;
                ambientLight.intensity = 0.5;
            } else if(w === 'stormy') {
                scene.background.set('#2d3436');
                scene.fog.color.set('#2d3436');
                scene.fog.density = 0.0035;
                dirLight.intensity = 0.05;
                ambientLight.intensity = 0.3;
            }
        }"""
    new_apply_weather = """        function applyWeather() {
            if (!sceneData || !sceneData.weathers) return;
            const w = weatherSelect.value;
            const wConfig = sceneData.weathers[w];
            if (!wConfig) return;
            
            scene.background.set(wConfig.bg);
            scene.fog.color.set(wConfig.bg);
            scene.fog.density = wConfig.fogDensity;
            dirLight.intensity = wConfig.dirLight;
            ambientLight.intensity = wConfig.ambient;
        }"""
    html = html.replace(old_apply_weather, new_apply_weather)

    old_lists = """        // Auto-change Theme and Weather every X seconds
        const themesList = ['default', 'cny', 'hari_raya', 'mid_autumn', 'deepavali', 'christmas'];
        const weatherList = ['sunshine', 'cloudy', 'stormy'];"""
    new_lists = """        // Auto-change Theme and Weather every X seconds
        let currentThemeIdx = 0;
        let currentWeatherIdx = 0;
        let autoChangeTimer = null;
        
        const intervalInput = document.getElementById('auto-change-interval');

        function startAutoChange() {
            if (autoChangeTimer) clearInterval(autoChangeTimer);
            const intervalSecs = parseInt(intervalInput.value, 10);
            if (intervalSecs > 0 && sceneData && sceneData.themes && sceneData.weathers) {
                const themesList = Object.keys(sceneData.themes);
                const weatherList = Object.keys(sceneData.weathers);
                
                autoChangeTimer = setInterval(() => {
                    currentThemeIdx = (currentThemeIdx + 1) % themesList.length;
                    currentWeatherIdx = (currentWeatherIdx + 1) % weatherList.length;
                    
                    themeSelect.value = themesList[currentThemeIdx];
                    weatherSelect.value = weatherList[currentWeatherIdx];
                    
                    applyTheme();
                    applyWeather();
                }, intervalSecs * 1000);
            }
        }"""
    html = html.replace(old_lists + """
        let currentThemeIdx = 0;
        let currentWeatherIdx = 0;
        let autoChangeTimer = null;
        
        const intervalInput = document.getElementById('auto-change-interval');

        function startAutoChange() {
            if (autoChangeTimer) clearInterval(autoChangeTimer);
            const intervalSecs = parseInt(intervalInput.value, 10);
            if (intervalSecs > 0) {
                autoChangeTimer = setInterval(() => {
                    currentThemeIdx = (currentThemeIdx + 1) % themesList.length;
                    currentWeatherIdx = (currentWeatherIdx + 1) % weatherList.length;
                    
                    themeSelect.value = themesList[currentThemeIdx];
                    weatherSelect.value = weatherList[currentWeatherIdx];
                    
                    applyTheme();
                    applyWeather();
                }, intervalSecs * 1000);
            }
        }""", new_lists)

    # 7. Add null checks in animate for global vehicles
    old_anim_plane = """            // Airplane Fly (Circular Path with Banking)
            plane.userData.angle = (plane.userData.angle || 0) + 0.004;
            const pRadius = 220;
            plane.position.x = Math.cos(plane.userData.angle) * pRadius;
            plane.position.z = Math.sin(plane.userData.angle) * pRadius;
            plane.position.y = 120 + Math.sin(elapsedTime) * 10;
            // Point tangent to the circle and bank inwards
            plane.rotation.y = -plane.userData.angle + Math.PI; 
            plane.rotation.z = Math.PI / 8;"""
    new_anim_plane = """            // Airplane Fly (Circular Path with Banking)
            if (plane) {
                plane.userData.angle = (plane.userData.angle || 0) + 0.004;
                const pRadius = 220;
                plane.position.x = Math.cos(plane.userData.angle) * pRadius;
                plane.position.z = Math.sin(plane.userData.angle) * pRadius;
                plane.position.y = 120 + Math.sin(elapsedTime) * 10;
                // Point tangent to the circle and bank inwards
                plane.rotation.y = -plane.userData.angle + Math.PI; 
                plane.rotation.z = Math.PI / 8;
            }"""
    html = html.replace(old_anim_plane, new_anim_plane)

    old_anim_heli = """            // Helicopter hover & patrol
            heli.userData.rotor.rotation.y += 0.5;
            if (!heli.userData.targetPos) {
                heli.userData.targetPos = new THREE.Vector3((Math.random() - 0.5) * 300, 60 + Math.random() * 30, (Math.random() - 0.5) * 200);
            }
            const hDir = new THREE.Vector3().subVectors(heli.userData.targetPos, heli.position);
            if (hDir.length() < 5) {
                heli.userData.targetPos = new THREE.Vector3((Math.random() - 0.5) * 300, 60 + Math.random() * 30, (Math.random() - 0.5) * 200);
            } else {
                hDir.normalize();
                heli.position.addScaledVector(hDir, 0.5);
                const targetRot = Math.atan2(hDir.x, hDir.z);
                let rotDiff = targetRot - heli.rotation.y;
                while (rotDiff > Math.PI) rotDiff -= Math.PI * 2;
                while (rotDiff < -Math.PI) rotDiff += Math.PI * 2;
                heli.rotation.y += rotDiff * 0.05;
                heli.rotation.x = -0.1; // tilt slightly forward
            }
            heli.position.y += Math.sin(elapsedTime * 3) * 0.2; // bob slightly"""
    new_anim_heli = """            // Helicopter hover & patrol
            if (heli) {
                heli.userData.rotor.rotation.y += 0.5;
                if (!heli.userData.targetPos) {
                    heli.userData.targetPos = new THREE.Vector3((Math.random() - 0.5) * 300, 60 + Math.random() * 30, (Math.random() - 0.5) * 200);
                }
                const hDir = new THREE.Vector3().subVectors(heli.userData.targetPos, heli.position);
                if (hDir.length() < 5) {
                    heli.userData.targetPos = new THREE.Vector3((Math.random() - 0.5) * 300, 60 + Math.random() * 30, (Math.random() - 0.5) * 200);
                } else {
                    hDir.normalize();
                    heli.position.addScaledVector(hDir, 0.5);
                    const targetRot = Math.atan2(hDir.x, hDir.z);
                    let rotDiff = targetRot - heli.rotation.y;
                    while (rotDiff > Math.PI) rotDiff -= Math.PI * 2;
                    while (rotDiff < -Math.PI) rotDiff += Math.PI * 2;
                    heli.rotation.y += rotDiff * 0.05;
                    heli.rotation.x = -0.1; // tilt slightly forward
                }
                heli.position.y += Math.sin(elapsedTime * 3) * 0.2; // bob slightly
            }"""
    html = html.replace(old_anim_heli, new_anim_heli)

    old_anim_ship = """            // Container Ship patrol
            ship.userData.angle = (ship.userData.angle || 0) + 0.002;
            const sRadius = 300;
            ship.position.x = Math.cos(ship.userData.angle) * sRadius;
            ship.position.z = Math.sin(ship.userData.angle) * sRadius;
            ship.rotation.y = -ship.userData.angle + Math.PI; // Look tangent
            ship.position.y = -3 + Math.sin(elapsedTime * 2) * 0.5; // bob on water"""
    new_anim_ship = """            // Container Ship patrol
            if (ship) {
                ship.userData.angle = (ship.userData.angle || 0) + 0.002;
                const sRadius = 300;
                ship.position.x = Math.cos(ship.userData.angle) * sRadius;
                ship.position.z = Math.sin(ship.userData.angle) * sRadius;
                ship.rotation.y = -ship.userData.angle + Math.PI; // Look tangent
                ship.position.y = -3 + Math.sin(elapsedTime * 2) * 0.5; // bob on water
            }"""
    html = html.replace(old_anim_ship, new_anim_ship)

    old_anim_mrt = """                // MRT Driving (Fast, elevated)
                const m1 = boardSpaces[mrt.userData.currentNode].position;
                const nextMrtNode = (mrt.userData.currentNode + 1) % boardSpaces.length;
                const m2 = boardSpaces[nextMrtNode].position;
                mrt.userData.progress += mrt.userData.speed;
                if(mrt.userData.progress >= 1) {
                    mrt.userData.progress -= 1;
                    mrt.userData.currentNode = nextMrtNode;
                }
                mrt.position.lerpVectors(m1, m2, mrt.userData.progress);
                mrt.position.y = 8 + groundGroup.position.y; // elevated
                const lookMrtTarget = m2.clone();
                lookMrtTarget.y = mrt.position.y;
                mrt.lookAt(lookMrtTarget);"""
    new_anim_mrt = """                // MRT Driving (Fast, elevated)
                if (mrt) {
                    const m1 = boardSpaces[mrt.userData.currentNode].position;
                    const nextMrtNode = (mrt.userData.currentNode + 1) % boardSpaces.length;
                    const m2 = boardSpaces[nextMrtNode].position;
                    mrt.userData.progress += mrt.userData.speed;
                    if(mrt.userData.progress >= 1) {
                        mrt.userData.progress -= 1;
                        mrt.userData.currentNode = nextMrtNode;
                    }
                    mrt.position.lerpVectors(m1, m2, mrt.userData.progress);
                    mrt.position.y = 8 + groundGroup.position.y; // elevated
                    const lookMrtTarget = m2.clone();
                    lookMrtTarget.y = mrt.position.y;
                    mrt.lookAt(lookMrtTarget);
                }"""
    html = html.replace(old_anim_mrt, new_anim_mrt)

    # Use trees and clouds from sceneData
    old_trees = """            for(let i=0; i<80; i++) {"""
    new_trees = """            const treeCount = (sceneData.nature && sceneData.nature.trees) ? sceneData.nature.trees.count : 80;
            for(let i=0; i<treeCount; i++) {"""
    html = html.replace(old_trees, new_trees)

    old_clouds = """            for(let i=0; i<20; i++) {"""
    new_clouds = """            const cloudCount = (sceneData.nature && sceneData.nature.clouds) ? sceneData.nature.clouds.count : 20;
            for(let i=0; i<cloudCount; i++) {"""
    html = html.replace(old_clouds, new_clouds)

    with open(path, 'w') as f:
        f.write(html)

patch()