const s=[{id:"travel",revision:"1",title:"1 · Variables in motion",objective:"Move four metres along the blue axis to the green goal. A second is 60 ticks.",starter:`speed = 2
ticks = 30
drive(speed, ticks)
print(at_goal())
`,solution:`speed = 2
ticks = 120
drive(speed, ticks)
print(at_goal())
`,goal:[4,0],obstacles:[],concept:"assignments",hints:["Distance is speed multiplied by time.","At 2 metres per second, four metres takes two seconds.","Try ticks = 120, keeping speed = 2."]},{id:"route",revision:"1",title:"2 · Repeat a route",objective:"Reach the goal at (2, 2), going around the obstacle. Positive turns face the red axis.",starter:`for leg in range(1):
    drive(2, 60)
    turn(90)
print(at_goal())
`,solution:`for leg in range(2):
    drive(2, 60)
    turn(90)
print(at_goal())
`,goal:[2,2],obstacles:[{id:"crate",position:[1,1],size:[.65,.65]}],concept:"loops",hints:["The first leg reaches (2, 0). The next turn points toward the goal.","Repeat the same move-and-turn procedure twice.","Use range(2) for two legs."]},{id:"sense",revision:"1",title:"3 · Sense, decide, act",objective:"Write advance() using the forward distance sensor. Reach the goal without touching the wall.",starter:`def advance():
    return at_goal()

for attempt in range(8):
    advance()
print(at_goal())
`,solution:`def advance():
    if distance() > 0.5:
        drive(1, 30)
    return at_goal()

while not at_goal():
    advance()
print(at_goal())
`,goal:[4,0],obstacles:[{id:"wall",position:[6,0],size:[.5,4]}],concept:"functions",hints:["distance() reads metres to the nearest obstacle ahead.","Only drive when there is room. Call your function until at_goal() is True.","Inside advance(), use if distance() > 0.5: followed by drive(1, 30)."]},{id:"drone",revision:"2",title:"4 · Drone flight and landing",vehicle:"drone",objective:"Inspect the warehouse aisle: take off to 2 m, hover, pass above the pallet load, and land at (4, 0). Stay between the tall racks inside the 16 × 16 m inspection cell. Pre-programmed kinematic simulation; 60 ticks per second, altitude 0–4 m.",starter:`def fly_leg():
    return altitude()

takeoff(0.5)
fly_leg()
land()
print(at_goal())
`,solution:`# Warehouse inspection cell: X/Z -8..8 m, altitude 0..4 m.
# Fixed aisle route; simulated flight only.
def fly_leg():
    if altitude() >= 1:
        fly(1, 0, 0, 120)

takeoff(2)
hover(60)
for leg in range(2):
    fly_leg()
land()
print(at_goal())
`,goal:[4,0],obstacles:[{id:"crate",name:"Pallet load",position:[2,0],size:[.8,1.2],height:1},{id:"rack-north",name:"North pallet rack",position:[2,-2.4],size:[12,1.2],height:4.5},{id:"rack-south",name:"South pallet rack",position:[2,2.4],size:[12,1.2],height:4.5}],concept:"functions",hints:["The pallet load is one metre tall; the racks are 4.5 m tall. Take off above the load and stay in the 3.6 m clear aisle.","fly(forward, right, up, ticks) uses body-relative speeds. Keep right and up speeds at zero for this fixed aisle route; this exercise does not model the entire warehouse.","Take off to 2 m, hover for 60 ticks, fly forward at 1 m/s for 240 ticks, then land at (4, 0). The full simulation takes nine seconds."]}];function l(e){const t=s.find(n=>n.id===e);if(!t)throw new Error(`Unknown local lesson: ${e}`);return t}function r(e,t,n,o){const i=[{id:"goal",label:e.vehicle==="drone"?"Fly above 1 m, hover, and land at the goal":"Reach the marked goal",passed:t.atGoal&&(e.vehicle!=="drone"||t.landed===!0&&(t.maxAltitude??0)>=1&&(t.hoverTicks??0)>=30)},{id:"collision",label:"Avoid collisions",passed:t.collisions===0},{id:"concept",label:`Use ${e.concept}${e.id==="sense"||e.vehicle==="drone"?" and a sensor condition":""}`,passed:n[e.concept]>0&&(!(e.id==="sense"||e.vehicle==="drone")||n.sensors>0&&n.branches>0)},{id:"complete",label:"Finish within the execution limits",passed:o}];return{passed:i.every(a=>a.passed),score:i.filter(a=>a.passed).length/i.length,criteria:i}}function d(e){const t=l(e);return JSON.stringify({lessonId:e,revision:t.revision,goal:t.goal,obstacles:t.obstacles,seed:0,tickSeconds:1/60,bounds:8,radius:.2,...t.vehicle==="drone"?{vehicle:"drone",model:"bounded-kinematic-v1",altitudeBounds:[0,4],traceColumns:["tick","x","z","heading","altitude"]}:{}})}export{s as LEARNING_LESSONS,r as gradeLearningLesson,l as learningLesson,d as learningSceneDescriptor};
