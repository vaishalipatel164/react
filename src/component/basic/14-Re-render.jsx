// Why Doesn't the State Value Reset to Its Initial Value on Re-render? (Simple English)
// This is one of the most important concepts in React.

// Short Answer
// The state value does not reset because React remembers the state between re-renders.
// When a component re-renders, React does not create a new state. Instead, it uses the existing state value that was already stored.

// Simple Definition: React saves the state value, so it is not reset every time the component re-renders.


// Example : Counter
// import { useState } from "react";
// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h2>{count}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </>
//   );
// }
// export default App;

// Initial Render
// count = 0

// Screen:
// 0

// Click the Button
// setCount(count + 1);

// React changes the state:
// count = 1
// Now React re-renders the component.

// After Re-render
// Many beginners think:
// useState(0)

// will run again and make:
// count = 0
// But that is not what happens.

// React remembers:
// count = 1
// So the screen shows:
// 1

// State Flow
// First Render

// useState(0)
//       │
//       ▼
// State = 0
//       │
// User Click
//       │
//       ▼
// setCount(1)
//       │
//       ▼
// React Stores 1
//       │
//       ▼
// Component Re-renders
//       │
//       ▼
// React Uses Stored Value
//       │
//       ▼
// State = 1



// Important Points
// useState(initialValue) uses the initial value only on the first render.
// On later re-renders, React uses the stored state value.
// Calling the setter function (such as setCount) updates the stored state.
// This is why state does not reset during normal re-renders.


// Summary
// React remembers state between re-renders.
// The initial value passed to useState() is used only on the first render.
// On every later render, React uses the current stored state, not the initial value.
// This behavior allows React applications to keep user data and UI changes without resetting them every time the component updates.


// One Sentence
// The state value does not reset on re-render because React stores the current state internally and reuses it on every re-render, while the initial value in useState() is used only during the first render.