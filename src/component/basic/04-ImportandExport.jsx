// What are Import and Export?
// In React, Export means making a component, function, or variable available for other files.
// Import means bringing that exported component, function, or variable into another file so you can use it.

// Simple Definition
// Export = Share something from a file.
// Import = Use that shared thing in another file.


// Why Do We Use Import and Export?
// We use import and export to:
// Keep code organized.
// Reuse components in different files.
// Make large projects easier to manage.
// Avoid writing the same code again.


// Project Structure
// src/
// │
// ├── App.jsx
// ├── Header.jsx
// └── Footer.jsx
// Header.jsx contains the Header component.
// Footer.jsx contains the Footer component.
// App.jsx imports and uses both components.

// What is Export?
// Export makes a component available for other files.
// Example: Header.jsx
// function Header() {
//   return <h1>My Website</h1>;
// }
// export default Header;
// Explanation
// function Header() {
// Creates a component named Header.
// export default Header;
// Exports the component so another file can use it.


// What is Import?
// Import brings the exported component into another file.
// Example: App.jsx
import Header from "./Header";
function App() {
  return (
    <>
      <Header />
    </>
  );
}
export default App;
// Output
// My Website


// Default Export
// A file can have only one default export.
// Example:
// function Header() {
//   return <h1>Header</h1>;
// }
// export default Header;



// Named Export
// A file can have multiple named exports.
// Example
Utils.jsx
export const name = "Rahul";

export const age = 20;

export function greet() {
  return "Hello!";
}

// Import them like this:

import { name, age, greet } from "./Utils";
function App() {
  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <p>{greet()}</p>
    </>
  );
}

export default App;
// Output
// Rahul
// 20
// Hello!

// Notice the curly braces {} around the imported names.


// Default Export vs Named Export
// | Default Export                      | Named Export                                            |
// | ----------------------------------- | ------------------------------------------------------- |
// | One per file                        | Many per file                                           |
// | `export default Header;`            | `export const name = "Rahul";`                          |
// | Import without `{}`                 | Import with `{}`                                        |
// | Name can be changed while importing | Name must match the exported name (unless you use `as`) |


// Summary
// Export makes a component, function, or variable available to other files.
// Import brings that exported item into another file.
// Default export
// Only one per file.
// Imported without {}.
// Named export
// Can have many in one file.
// Imported with {}.