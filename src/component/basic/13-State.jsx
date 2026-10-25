// What is State?
// State is a special variable in React that stores data that can change over time.

// For example:
// Counter value
// User name
// Login status
// Shopping cart items
// Form input values

// Simple Definition: State is data that can change, and when it changes, React automatically updates the screen.

// Why Do We Need State?
// Without state:
// ❌ The UI does not update when data changes.
// ❌ React cannot show the latest value.
// With state:
// ✅ The UI updates automatically.
// ✅ The latest data is always displayed.



// What is the useState Hook?
// useState is a React Hook that allows a functional component to store and update state.
// Simple Definition: useState is a Hook that lets a React component remember values and update the UI whenever those values change.

// What is a Hook?
// A Hook is a special function provided by React.
// Hooks let functional components use React features like:

// State
// Lifecycle features
// Context

// Some common Hooks are:
// useState
// useEffect
// useContext
// useRef


// Importing useState
// Before using it, import it from React.
// import { useState } from "react";

// Syntax of useState
// const [state, setState] = useState(initialValue);

// Explanation
// | Part           | Meaning                      |
// | -------------- | ---------------------------- |
// | `state`        | Current value                |
// | `setState`     | Function to update the value |
// | `useState()`   | Creates state                |
// | `initialValue` | Starting value               |

// Example : Counter
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick={increase}>
        Increase
      </button>
    </>
  );
}
export default App;
// Output (Initially)
// Count: 0
// [Increase]
// After clicking the button once:
// Count: 1
// After clicking again:
// Count: 2

// How It Works
// useState(0)
//       │
//       ▼
// count = 0
//       │
// User clicks button
//       │
//       ▼
// setCount(count + 1)
//       │
//       ▼
// count becomes 1
//       │
//       ▼
// React updates the screen

// Rules of useState
// ✅ Import it before using it.
// ✅ Call it at the top level of a component.
// ✅ Use the setter function (setState) to update the value.
// ❌ Do not change the state variable directly.


// useState Flow
// Create State
//       │
//       ▼
// useState(initialValue)
//       │
//       ▼
// Current State
//       │
// User Action
// (Button Click)
//       │
//       ▼
// setState(newValue)
//       │
//       ▼
// React Re-renders Component
//       │
//       ▼
// Updated UI

// Benefits of useState
// ✅ Stores changing data.
// ✅ Automatically updates the UI.
// ✅ Makes applications interactive.
// ✅ Easy to use in functional components.
// ✅ Reduces manual DOM updates.

// Summary
// State is data that can change over time.
// useState is a React Hook used to create and manage state in functional components.
// When state changes, React automatically re-renders the component and updates the UI.
// Always update state using the setter function (for example, setCount), not by changing the variable directly.