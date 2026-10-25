// What is Event Handling?
// Event Handling means running a function when a user performs an action.
// These actions are called events.
// Examples of events:
// Clicking a button
// Typing in a textbox
// Moving the mouse
// Pressing a keyboard key
// Submitting a form

// Simple Definition: Event handling is the process of responding to user actions in a React application.



// Why Do We Use Event Handling?
// We use event handling to:
// ✅ Respond to user actions.
// ✅ Show messages.
// ✅ Update data.
// ✅ Submit forms.
// ✅ Build interactive applications.
// Basic Syntax
// <Element eventName={functionName} />

// Example:
<button onClick={showMessage}>
  Click Me
</button>
// Here:
// onClick → Event
// showMessage → Function

// Example 1: Button Click Event
function App() {
  function showMessage() {
    alert("Button Clicked!");
  }
  return (
    <button onClick={showMessage}>
      Click Me
    </button>
  );
}
export default App;
// Output
// [Click Me]
// When the button is clicked:
// Button Clicked!

// Example 2: Inline Event Function
// Instead of creating a separate function, you can write it directly.
function App() {
  return (
    <button
      onClick={() => alert("Hello React")}
    >
      Click
    </button>
  );
}
export default App;
// Output
// Clicking the button shows:
// Hello React


// What are Synthetic Events?
// React uses Synthetic Events instead of the browser's normal events.
// A Synthetic Event is a wrapper around the browser event that works the same way in all browsers.
// Simple Definition: A Synthetic Event is React's version of a browser event. It provides the same behavior across different browsers.

// Example of a Synthetic Event
function App() {
  function handleClick(event) {
    console.log(event.type);
  }

  return (
    <button onClick={handleClick}>
      Click
    </button>
  );
}
export default App;
// Output
// click
// Here, event is a Synthetic Event object.


// Common React Events
// | Event         | Description                          |
// | ------------- | ------------------------------------ |
// | `onClick`     | When a button is clicked             |
// | `onChange`    | When input value changes             |
// | `onSubmit`    | When a form is submitted             |
// | `onMouseOver` | When the mouse moves over an element |
// | `onMouseOut`  | When the mouse leaves an element     |
// | `onKeyDown`   | When a key is pressed                |
// | `onFocus`     | When an input gets focus             |
// | `onBlur`      | When an input loses focus            |


// React Event Naming Conventions
// React event names use camelCase.

// HTML
<button onclick="showMessage()">
  Click
</button>
// React
<button onClick={showMessage}>
  Click
</button>
// Notice:
// HTML → onclick
// React → onClick


// Function Naming Conventions
// Developers usually start event function names with handle.
// Examples:
// handleClick
// handleSubmit
// handleChange
// handleDelete
// handleLogin

// This is not required, but it is a common React practice because it makes your code easier to understand.

// Example : Form Submit Event
// function App() {
//   function handleSubmit(event) {
//     event.preventDefault();
//     alert("Form Submitted!");
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit">
//         Submit
//       </button>
//     </form>
//   );
// }
// export default App;
// Output
// Clicking Submit shows:
// Form Submitted!
// event.preventDefault() stops the page from refreshing.

// Event Flow
// User clicks button
//         │
//         ▼
// onClick event occurs
//         │
//         ▼
// React calls the function
//         │
//         ▼
// Function executes
//         │
//         ▼
// UI updates (if needed)

// HTML Events vs React Events
// | HTML                 | React              |
// | -------------------- | ------------------ |
// | `onclick`            | `onClick`          |
// | `onchange`           | `onChange`         |
// | Lowercase            | CamelCase          |
// | String of JavaScript | Function reference |

// Summary
// Event Handling lets React respond to user actions.
// React uses Synthetic Events, which provide consistent behavior across browsers.
// Event names use camelCase (for example, onClick, onChange).
// Event handler functions are commonly named with handle, such as handleClick and handleSubmit.
// Pass a function reference to an event, not the result of calling the function.
// You can access the event object to read information like the input value, key pressed, or event type.
