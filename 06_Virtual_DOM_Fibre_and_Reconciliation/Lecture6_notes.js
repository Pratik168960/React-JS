/*

        LECTURE 6: VIRTUAL DOM & REACT FIBER ARCHITECTURE


THE GOAL:
- Understand how React updates the browser UI efficiently using the Virtual DOM and React Fiber


VIRTUAL DOM & createRoot:
- The `createRoot` method creates a complete DOM-like structure behind the scenes
- React compares this Virtual DOM with the actual browser DOM and only updates the specific 
elements that changed, avoiding full page reloads


REACT FIBER ARCHITECTURE:
- Fiber is the core algorithm currently powering React's UI updates
- It optimizes UI updates by allowing React to pause, abort, or reuse rendering work as new updates come in
- It can assign different priorities to different updates, such as prioritizing animations over background data


RECONCILIATION & HYDRATION:
- Reconciliation: The diffing algorithm React uses to compare two Virtual DOM trees to 
determine exactly what needs to change
- Hydration: The process where React injects JavaScript into a static web layout to make 
elements clickable and functional
- Keys: Fiber's diffing algorithm requires stable, predictable, and unique keys when rendering 
lists to perform efficiently

*/