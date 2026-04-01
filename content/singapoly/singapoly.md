# Singapoly: Singapore Geospatial Monopoly

## Overview
Singapoly is an interactive, browser-based 3D Monopoly-style board game built using Three.js. It features a procedurally generated voxel world modeled after the geospatial boundaries of Singapore, infused with the vibrant, bouncy "InfiniTown" aesthetic.

---

## 1. User Flow (UX / Interaction)

The User Flow describes the journey a player takes from launching the game to completing a turn.

### **Phase 1: Initialization & Onboarding**
1. **Launch:** The user opens `monopoly.html` in a web browser.
2. **Loading Screen:** A "Generating Voxels..." screen is displayed while the game fetches the GeoJSON map data and calculates the 3D grid.
3. **Observation:** The loading screen fades, revealing the fully rendered 3D voxel map of Singapore. The user can immediately use their mouse to orbit, pan, and zoom around the island.
4. **Hover Interaction:** As the user moves their mouse over properties, the buildings "bounce" upward to indicate they are interactive.

### **Phase 2: Gameplay Loop (Taking a Turn)**
1. **Identify Turn:** The user checks the HUD (Heads Up Display) in the top-left corner. The current active player is highlighted in yellow.
2. **Roll Dice:** The user clicks the large, color-coded "Roll Dice 🎲" button in the bottom-right corner.
3. **Animation:** The dice result is displayed, the UI is temporarily locked, and the player's 3D token sequentially "hops" along the board spaces corresponding to the dice roll.
4. **Property Landing:** Once the token lands, the game checks the state of the property.
5. **Action Decision (The UI Overlay):**
    - **If Unowned:** The Property Details card slides in from the bottom left. The user can click **Buy** (deducts cash) or **Pass**.
    - **If Owned by Current Player:** The user clicks **End Turn**.
    - **If Owned by Another Player:** Rent is automatically deducted from the current player and transferred to the owner. A notification banner drops from the top right. The user clicks **End Turn**.
6. **Turn Transition:** The UI overlay hides, the "Roll Dice" button changes color to match the next player, and the loop repeats.

---

## 2. Work Flow (Application Logic & State Management)

The Work Flow outlines how the application manages the game's rules, turn sequence, and logical state under the hood.

1. **Setup & Configuration**
   - Initialize Three.js scene, orthographic camera, and lights.
   - Define global constants: Singapore's GPS bounding box (`minLon`, `maxLon`, `minLat`, `maxLat`), grid size, and polygon geofencing boundaries.
   - Initialize state arrays: `players` (cash, board position), `boardSpaces` (property data, owner ID), and `customAnimations`.

2. **Data Ingestion**
   - Fetch `monopoly.json`.
   - Parse GeoJSON points and normalize their GPS coordinates to fit the 3D Cartesian grid.

3. **Procedural Generation**
   - Execute Point-in-Polygon checks against the Singapore outline to spawn the `InstancedMesh` voxel ground only within land boundaries.
   - Spawn properties, generic buildings, roads, trees, and dynamic entities (cars, pedestrians, aircraft, helicopter).

4. **Turn Execution Logic**
   - **`diceBtn.addEventListener`**: Triggers RNG for 2d6. Locks `isMoving` state.
   - **`moveNext()`**: A recursive function using Tween.js to calculate the arc of the player's token jumping from one `boardSpace` to the next.
   - **`handleLanded(space)`**: Reads the current space's `props` and `owner`. Updates DOM elements (`#ui`, `#prop-name`, etc.) based on ownership status. Handles cash math (`player.cash -= props.price`).
   - **`endTurn()`**: Increments `currentPlayerIndex`, unlocks the dice button, and updates the HUD.

5. **Render Loop (`animate()`)**
   - `requestAnimationFrame` continuously fires.
   - Updates Tween.js animations.
   - Updates `Math.sin()` based procedural animations (bouncing cars, swinging pedestrian limbs, spinning cranes, flying aircraft).
   - Renders the updated scene to the canvas.

---

## 3. Data Flow (Data Architecture & Transformation)

The Data Flow maps how information moves from static files into 3D visual representations and UI elements.

### **1. The Source: `monopoly.json`**
The single source of truth for board layout. It is a standard GeoJSON `FeatureCollection`.
```json
{
  "type": "Feature",
  "geometry": { "type": "Point", "coordinates": [103.8523, 1.2830] },
  "properties": { 
      "id": "raffles", 
      "name": "Raffles Place", 
      "price": 320, 
      "group": "Green", 
      "type": "property", 
      "index": 4 
  }
}
```

### **2. Transformation: GPS to 3D Cartesian**
When the JSON is fetched, the raw GPS coordinates must be converted into Three.js `(x, z)` coordinates.
- **Normalization:**
  `nx = (coords[0] - minLon) / lonRange`
  `nz = (coords[1] - minLat) / latRange`
- **Mapping to Grid:**
  `x = (nx * gridWidth) - (gridWidth / 2)`
  `z = -((nz * gridHeight) - (gridHeight / 2))`

### **3. Instantiation: Data to Mesh**
The parsed properties dictate the visual output:
- `props.group` determines the hex color applied to the roof of the property.
- `props.price` determines the height of the building (more expensive = taller).
- `props.id` acts as a switch statement to trigger custom 3D model generators (e.g., if `id === 'zoo'`, trigger `createElephant()`).

### **4. State Binding: Mesh to Logical Board**
Once a building is generated, its hidden hitbox mesh, its 3D position, and its JSON properties are bound together into a single object inside the `boardSpaces` array.
```javascript
boardSpaces.push({
    mesh: hitMesh,            // Used for Raycaster mouse hover detection
    props: props,             // The original JSON data (price, name)
    owner: undefined,         // Modified during gameplay (Player ID)
    position: Vector3(x,y,z)  // Used by Tween.js to know where players must jump
});
```

### **5. UI Synchronization: Logic to DOM**
When a player interacts with the game (e.g., buying a property), the underlying data (`player.cash`, `space.owner`) is updated in JavaScript memory. Immediately after, functions like `updateHUD()` are called to push these new variable values into the HTML DOM via `document.getElementById().innerText`, ensuring the visual UI perfectly reflects the underlying data state.