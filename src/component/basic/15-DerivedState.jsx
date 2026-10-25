// What is Derived State?
// Derived State is a value that is calculated from existing state or props instead of being stored as a separate state.
// In other words, you don't save it in state—you calculate it whenever you need it.

// Simple Definition: Derived state is data that is created from existing state or props instead of storing it separately.


// Why Do We Need Derived State?
// Without derived state, you may store duplicate information.
// Example:
// const [price, setPrice] = useState(50);
// const [quantity, setQuantity] = useState(2);
// const [total, setTotal] = useState(100);
// Here, total depends on price and quantity.
// If price changes:
// Price = $60
// Quantity = 2


// Better Way (Derived State)
// Instead of storing total, calculate it.
// const [price, setPrice] = useState(50);
// const [quantity, setQuantity] = useState(2);
// const total = price * quantity;
// Now React always calculates the correct value


// Example : Shopping Cart
import { useState } from "react";
function App() {
  const [price, setPrice] = useState(100);
  const [quantity, setQuantity] = useState(2);
  const total = price * quantity;
  return (
    <>
      <h2>Price: ${price}</h2>
      <h2>Quantity: {quantity}</h2>
      <h2>Total: ${total}</h2>

      <button onClick={() => setQuantity(quantity + 1)}>
        Increase Quantity
      </button>
    </>
  );
}
export default App;
// Output (Initially)
// Price: $100
// Quantity: 2
// Total: $200
// After clicking the button:
// Price: $100
// Quantity: 3
// Total: $300

// How Derived State Works
// State
//  │
//  ├── Price = 100
//  └── Quantity = 2
//         │
//         ▼
// Derived State
// Total = Price × Quantity
//         │
//         ▼
// UI Updates Automatically


// Why Derived State is Better
// Without Derived State
// Price
// Quantity
// Total
// You have three state values.
// If one changes, you must update the others.

// With Derived State
// Price
// Quantity
// React calculates:
// Total
// No extra state is needed.


// Benefits of Derived State
// ✅ Reduces duplicate state.
// ✅ Prevents bugs caused by inconsistent values.
// ✅ Makes code simpler.
// ✅ Easier to maintain.
// ✅ Keeps data synchronized automatically.

// When Should You Use Derived State?
// Use derived state when a value can be calculated from:

// ✅ Existing state
// ✅ Props
// ✅ Arrays
// ✅ Objects
// ✅ User input

// Do not create another state variable if you can calculate the value directly


// State vs Derived State
// | State                        | Derived State                  |
// | ---------------------------- | ------------------------------ |
// | Stored using `useState()`    | Calculated from state or props |
// | Can be updated with a setter | Cannot be updated directly     |
// | Used for changing data       | Used for calculated values     |
// | Example: `price`             | Example: `price * quantity`    |


// Summary
// Derived State is a value calculated from existing state or props.
// It is not stored using useState().
// It helps remove duplicate data and prevents inconsistencies.
// It keeps your React components simpler and easier to maintain.
// If a value can be calculated from other data, prefer derived state over creating another state variable.


// One Sentence
// Derived State in React is a value calculated from existing state or props instead of being stored separately, helping reduce redundancy, remove unnecessary dependencies, and keep your application simple and bug-free.