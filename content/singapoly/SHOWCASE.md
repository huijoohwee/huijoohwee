# Building Singapoly: From Zero to a Bouncy 3D Web Game in 30 Minutes

Building a 3D browser game used to require weeks of learning complex engines and physics systems. But with **Three.js** and modern generative AI tools (like Trae), you can prototype, build, and deploy an immersive, playful 3D experience like **Singapoly**—a Singapore-themed Monopoly clone with a bouncy voxel aesthetic—in just 30 minutes.

Here is a step-by-step breakdown of the best practices we used to go from idea to production.

---

## Step 1: Ideation & Asset Generation (Minutes 0-5)

### The Concept
We wanted a web-based board game that feels alive. We chose a **"bouncy voxel"** aesthetic (inspired by InfiniTown), where cars, pedestrians, and clouds constantly move, and the entire board floats gently. 

### Data as the Foundation
Instead of manually placing properties, we structured our board data using **GeoJSON**. 
- We created a `monopoly.json` file.
- We defined each property with standard Monopoly attributes (`id`, `name`, `price`, `group`) but attached real-world **longitude and latitude** coordinates.

**Best Practice:** *Separate your data from your logic.* By driving the 3D generation via a simple JSON file, you can tweak prices, add new properties, or rearrange the board without touching a single line of Three.js rendering code.

---

## Step 2: Setting up the 3D Scene (Minutes 5-15)

We used a single, lightweight HTML file (`singapoly.html`) with no build steps for the core game. We imported Three.js, OrbitControls, and Tween.js via CDN.

### 1. The Camera and Lighting
We opted for an **Orthographic Camera** to give the game an isometric, "toy box" feel, avoiding the perspective distortion of standard 3D cameras.
For lighting, a strong `DirectionalLight` with soft shadows paired with an `AmbientLight` creates the bright, cheerful environment.

### 2. Procedural Voxel Generation
Instead of loading massive 3D models, we generated the entire island procedurally using `THREE.InstancedMesh`.
- We defined rough polygon outlines of Singapore's borders.
- We iterated through a grid, checking if coordinates fell inside the polygon.
- If true, we placed a voxel block, slightly randomizing its height and color (shades of green and sand).

**Best Practice:** *Use `InstancedMesh` for performance.* Rendering thousands of individual voxel boxes would crash the browser. Instancing allows us to draw thousands of blocks in a single draw call.

### 3. Dynamic Property Generation
We loaded `monopoly.json` using `fetch()`. For every property:
- We converted its lat/lon into 3D world coordinates.
- We procedurally generated "buildings" using simple stacked box geometries.
- We color-coded the roofs based on the Monopoly property group (e.g., Brown, Light Blue, Station).

---

## Step 3: Breathing Life into the World (Minutes 15-22)

A static board is boring. We wanted motion.

### 1. The "Bouncy" Animation Loop
In our `requestAnimationFrame` loop, we tied movements to the `Clock.getElapsedTime()`.
- **The Board:** The entire ground group bobs gently up and down using a `Math.sin()` function.
- **Vehicles & Pedestrians:** We instantiated voxel cars and people that constantly loop around the board spaces using `Vector3.lerpVectors`. We added a vertical sine wave to their position so they "bounce" as they move.
- **Air Traffic:** An airplane flies in a massive circle overhead, and a helicopter patrols random points.

### 2. Custom Landmarks
To make Singapore recognizable, we added specific logic for certain JSON IDs.
- If `id === 'zoo'`, we procedurally built voxel animals (Elephants, Tigers) that bounce to the beat of the clock.
- If `id === 'changi'`, we added a spinning control tower.

**Best Practice:** *Math is your best animator.* You don't need complex skeletal rigs or animation files. Simple trigonometric functions (`Math.sin`, `Math.cos`) applied to position and rotation can create incredibly charming, lively motion.

---

## Step 4: Game Logic & UI (Minutes 22-27)

### 1. State Management
We kept state simple: an array of `players`, tracking their `cash`, `pos` (current board space index), and their 3D `mesh`.

### 2. Rolling the Dice
When a player clicks "Roll Dice":
1. We calculate the new position.
2. We use **Tween.js** to animate the player token hopping from space to space.
3. We chain the Tweens so the token jumps up (Quadratic Out) and lands (Quadratic In) on each individual tile along the path.

### 3. The HTML Overlay
We used standard DOM elements (`div`, `button`) positioned absolutely over the canvas for the HUD and interaction menus. When a player lands, we update the DOM with the property details and show "Buy" or "Pass" buttons.

**Best Practice:** *Don't build UI in WebGL unless you have to.* HTML/CSS is infinitely better for text, buttons, and layouts. Overlaying DOM elements on top of the `<canvas>` is the fastest, most accessible way to build game interfaces.

---

## Step 5: Deployment & Polish (Minutes 27-30)

### 1. Cloudflare Pages Deployment
We deployed the static files directly to Cloudflare Pages.
To make the URL clean (e.g., `airvio.co/singapoly` instead of `airvio.co/singapoly.html`), we utilized Cloudflare's `_redirects` file:

```text
/singapoly                 /singapoly.html 200
/singapoly/                /singapoly.html 200
/singapoly/monopoly.json   /monopoly.json 200
```

### 2. Creating a Promo Video with Remotion
To show off the game, we didn't use a screen recorder. We used **Remotion** to programmatically generate a crisp 60fps MP4 video.
- We embedded the game inside an `<IFrame>` in React.
- We used Remotion's `spring` and `interpolate` functions to overlay perfectly timed, bouncy text.
- We injected a Python script to synthesize an 8-bit, bouncy rendition of "Rasa Sayang" for the background track.

---

## The Result
In 30 minutes, we went from a blank canvas to a deployed, interactive, multiplayer 3D geospatial board game, complete with procedural generation, a custom physics-free animation system, and a programmatic promotional video.

**Tech Stack Summary:**
- **Rendering:** Three.js (CDN)
- **Animation:** Tween.js (CDN) & Math.sin()
- **Data:** GeoJSON
- **UI:** HTML/CSS Overlay
- **Hosting:** Cloudflare Pages
- **Promo Video:** Remotion + Python Wave generation