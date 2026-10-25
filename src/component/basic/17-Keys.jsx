// What are Keys in React?
// A key is a special attribute used in React to uniquely identify each item in a list.
// When we display multiple items using map(), React needs a way to know which item is which.

// Simple Definition: A key is a unique identifier that helps React track list items when they are added, removed, or updated.

// Why Do We Need Keys?
// React uses keys to:
// ✅ Identify each item uniquely.
// ✅ Update only the changed item.
// ✅ Improve performance.
// ✅ Avoid unnecessary re-rendering.
// ✅ Prevent UI bugs when items are added, removed, or reordered.



// Example 1: Without Keys (Wrong)
function App() {
  const fruits = ["Apple", "Banana", "Mango"];
  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}
export default App;
// Output
// Apple
// Banana
// Mango
// React shows a warning:
// Each child in a list should have a unique "key" prop.

// Example 2: Using Keys (Correct)
function App() {
  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Mango" }
  ];
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.id}>
          {fruit.name}
        </li>
      ))}
    </ul>
  );
}
export default App;
// Output
// Apple
// Banana
// Mango
// Now React can identify every item correctly.


// What Makes a Good Key?
// A good key should be:
// ✅ Unique
// ✅ Stable (doesn't change)
// ✅ Predictable

// Best examples:
// key={user.id}


// Rules for Keys
// Use unique keys.
// Use stable keys.
// Use IDs whenever possible.
// Don't use Math.random().
// Avoid array indexes for dynamic lists.
// Keys only need to be unique among siblings (items in the same list).


// Benefits of Keys
// ✅ Faster rendering.
// ✅ Better performance.
// ✅ Correct updates.
// ✅ Easier list management.
// ✅ Prevents unexpected UI behavior.


// Summary
// A key is a unique identifier for items in a React list.
// React uses keys to identify which items have changed, been added, or been removed.
// Always use a unique ID as the key whenever possible.
// Avoid using the array index for lists that can change.
// Keys help React update the UI efficiently and correctly.


// One Sentence
// Keys in React are unique identifiers used for list items, helping React efficiently identify, update, add, remove, and reorder elements while improving performance and preventing UI bugs.