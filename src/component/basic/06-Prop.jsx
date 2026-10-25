// What are Props?
// Props stands for Properties.
// Props are used to pass data from a parent component to a child component.
// Simple Definition: Props are used to send information from one React component to another.

// Why Do We Use Props?
// We use props to:
// ✅ Pass data from parent to child.
// ✅ Reuse the same component with different data.
// ✅ Keep components simple and organized.
// ✅ Avoid writing duplicate code.

// How Props Work
// Parent Component
//        │
//        │ Sends Data (Props)
//        ▼
// Child Component
//        │
//        ▼
// Displays the Data

// Example : Passing One Prop
// Child Component (Student.jsx)
function Student(props) {
  return <h2>Name: {props.name}</h2>;
}
export default Student;

// Parent Component (App.jsx)
import Student from "./Student";
function App() {
  return (
    <>
      <Student name="Rahul" />
    </>
  );
}
export default App;
// Output
// Name: Rahul


// Important Points
// Props pass data from parent to child.
// Props are read-only.
// You can pass:
// Strings
// Numbers
// Booleans
// Arrays
// Objects
// Functions
// One component can be reused with different props.


// Summary
// Props means Properties.
// Props are used to send data from a parent component to a child component.
// The child component receives the data and displays it.
// Props make components reusable and help keep your code organized.
// Props should never be modified inside the child component