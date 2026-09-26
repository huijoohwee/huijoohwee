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
`,goal:[4,0],obstacles:[{id:"wall",position:[6,0],size:[.5,4]}],concept:"functions",hints:["distance() reads metres to the nearest obstacle ahead.","Only drive when there is room. Call your function until at_goal() is True.","Inside advance(), use if distance() > 0.5: followed by drive(1, 30)."]},{id:"drone",revision:"1",title:"4 · Drone flight and landing",vehicle:"drone",objective:"Take off above the crate, hover for 30 ticks, fly to (4, 0), then land. Use altitude() in a function. Kinematic training model; each second is 60 ticks.",starter:`def fly_leg():
    return altitude()

takeoff(0.5)
fly_leg()
land()
print(at_goal())
`,solution:`def fly_leg():
    if altitude() >= 1:
        fly(1, 0, 0, 120)

takeoff(2)
hover(60)
for leg in range(2):
    fly_leg()
land()
print(at_goal())
`,goal:[4,0],obstacles:[{id:"crate",position:[2,0],size:[.8,1.2]}],concept:"functions",hints:["The crate is one metre tall. Take off before flying forward.","fly(forward, right, up, ticks) uses body-relative speeds. Hover without moving, then land at the goal.","Take off to 2 m, hover for 60 ticks, fly forward at 1 m/s for 240 ticks, then land."]}];function r(e){const n=s.find(t=>t.id===e);if(!n)throw new Error(`Unknown local lesson: ${e}`);return n}function l(e,n,t,a){const i=[{id:"goal",label:e.vehicle==="drone"?"Fly above 1 m, hover, and land at the goal":"Reach the marked goal",passed:n.atGoal&&(e.vehicle!=="drone"||n.landed===!0&&(n.maxAltitude??0)>=1&&(n.hoverTicks??0)>=30)},{id:"collision",label:"Avoid collisions",passed:n.collisions===0},{id:"concept",label:`Use ${e.concept}${e.id==="sense"||e.vehicle==="drone"?" and a sensor condition":""}`,passed:t[e.concept]>0&&(!(e.id==="sense"||e.vehicle==="drone")||t.sensors>0&&t.branches>0)},{id:"complete",label:"Finish within the execution limits",passed:a}];return{passed:i.every(o=>o.passed),score:i.filter(o=>o.passed).length/i.length,criteria:i}}function d(e){const n=r(e);return JSON.stringify({lessonId:e,revision:n.revision,goal:n.goal,obstacles:n.obstacles,seed:0,tickSeconds:1/60,bounds:8,radius:.2,...n.vehicle==="drone"?{vehicle:"drone",model:"bounded-kinematic-v1",altitudeBounds:[0,4],traceColumns:["tick","x","z","heading","altitude"]}:{}})}export{s as LEARNING_LESSONS,l as gradeLearningLesson,r as learningLesson,d as learningSceneDescriptor};
