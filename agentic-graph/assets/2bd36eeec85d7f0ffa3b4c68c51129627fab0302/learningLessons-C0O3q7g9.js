const a=[{id:"travel",revision:"1",title:"1 · Variables in motion",objective:"Move four metres along the blue axis to the green goal. A second is 60 ticks.",starter:`speed = 2
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
`,goal:[4,0],obstacles:[{id:"wall",position:[6,0],size:[.5,4]}],concept:"functions",hints:["distance() reads metres to the nearest obstacle ahead.","Only drive when there is room. Call your function until at_goal() is True.","Inside advance(), use if distance() > 0.5: followed by drive(1, 30)."]}];function r(e){const n=a.find(t=>t.id===e);if(!n)throw new Error(`Unknown local lesson: ${e}`);return n}function l(e,n,t,o){const i=[{id:"goal",label:"Reach the marked goal",passed:n.atGoal},{id:"collision",label:"Avoid collisions",passed:n.collisions===0},{id:"concept",label:`Use ${e.concept}${e.id==="sense"?" and a sensor condition":""}`,passed:t[e.concept]>0&&(e.id!=="sense"||t.sensors>0&&t.branches>0)},{id:"complete",label:"Finish within the execution limits",passed:o}];return{passed:i.every(s=>s.passed),score:i.filter(s=>s.passed).length/i.length,criteria:i}}function c(e){const n=r(e);return JSON.stringify({lessonId:e,revision:n.revision,goal:n.goal,obstacles:n.obstacles,seed:0,tickSeconds:1/60,bounds:8,radius:.2})}export{a as LEARNING_LESSONS,l as gradeLearningLesson,r as learningLesson,c as learningSceneDescriptor};
