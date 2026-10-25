// What is Looping in JSX?
// Looping means repeating the same action for each item in a list.
// In React, looping is used to display multiple elements from an array.
// Simple Definition: Looping in JSX means showing a list of items by repeating JSX for each item in an array.

// Why Do We Use Looping?
// Looping helps us:
// Display lists of data.
// Avoid writing the same code repeatedly.
// Show products, students, employees, or menu items.
// Keep code shorter and easier to maintain.

// The map() Method
// In React, the map() method is the most common way to create loops in JSX.
// Syntax
// array.map((item) => (
//   JSX
// ))

// Here:
// array = List of items.
// item = Current item in the list.
// map() returns new JSX for every item.


// Example 1: Display Student Names
function App() {
  const students = ["Rahul", "Amit", "Priya", "Neha"];
  return (
    <div>
      {students.map((student) => (
        <h2>{student}</h2>
      ))}
    </div>
  );
}
export default App;
// Output
// Rahul
// Amit
// Priya
// Neha
// Explanation
// students is an array.
// map() goes through each student.
// React creates one <h2> for each name.


// Objects
// Arrays can contain objects.
function App() {
  const students = [
    { id: 1, name: "Rahul", age: 20 },
    { id: 2, name: "Amit", age: 21 },
    { id: 3, name: "Priya", age: 19 }
  ];

  return (
    <>
      {students.map((student) => (
        <p>
          {student.name} - {student.age}
        </p>
      ))}
    </>
  );
}

export default App;
// Output
// Rahul - 20
// Amit - 21
// Priya - 19


// Add a key
// When using map(), React recommends adding a key.
function App() {

  const students = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Priya" }
  ];

  return (
    <>
      {students.map((student) => (
        <h2 key={student.id}>
          {student.name}
        </h2>
      ))}
    </>
  );
}

export default App;
// Output
// Rahul
// Amit
// Priya

// Why is key Important?
// A key is a unique value that helps React identify each item in a list.
// This allows React to update only the changed items, making the app faster.


// Important Rules
// ✅ Use map() to display lists in JSX.
// ✅ Always add a unique key when rendering a list.
// ✅ map() returns a new JSX element for every item in the array.


// Summary
// Looping means repeating JSX for each item in a list.
// React mainly uses the map() method for looping.
// map() goes through each item in an array and returns JSX.
// Always use a key for each rendered item.
// Looping makes your code shorter, cleaner, and easier to maintain.