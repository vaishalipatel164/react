// What is Destructuring Props?
// Destructuring Props means taking values directly from the props object instead of writing props. every time.
// Simple Definition: Destructuring props is a shortcut that lets you use prop values directly inside a component.

// Why Use Destructuring?
// Without destructuring, you have to write:
// props.name
// props.age
// props.course

// many times.

// With destructuring, you can write:
// name
// age
// course

// This makes the code:
// ✅ Shorter
// ✅ Cleaner
// ✅ Easier to read

// Example 1: Without Destructuring
// App.jsx
// import Student from "./Student";
// function App() {
//   return (
//     <>
//       <Student
//         name="Rahul"
//         age={20}
//         course="React JS"
//       />
//     </>
//   );
// }
// export default App;

// Student.jsx
function Student(props) {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
    </>
  );
}
export default Student;
// Output
// Name: Rahul
// Age: 20
// Course: React JS

// Notice we keep writing:
// props.name
// props.age
// props.course

// Example 2: With Destructuring
// Student.jsx
function Student({ name, age, course }) {
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </>
  );
}
export default Student;
// Output
// Name: Rahul
// Age: 20
// Course: React JS
// The output is the same, but the code is cleaner.


// Benefits of Destructuring Props
// ✅ Less code
// ✅ Cleaner syntax
// ✅ Easier to read
// ✅ Easier to maintain
// ✅ Commonly used in React projects

// Summary
// Destructuring Props is a JavaScript feature used in React to extract values from the props object.
// It allows you to use prop values directly without writing props. repeatedly.
// Destructuring makes code shorter, cleaner, and easier to understand.
// It can be done:
// In the function parameter
// Inside the component body