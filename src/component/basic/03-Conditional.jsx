// What is Conditional Rendering?
// Conditional rendering means showing different content based on a condition.
// In simple words:
// React checks a condition. If the condition is true, it shows one thing. If it is false, it shows something else.
// It works just like making decisions in real life.
// Real-Life Example
// Imagine you are logging into a website.
// If you are logged in, the website shows "Welcome!".
// If you are not logged in, it shows "Please Login".
// React does the same thing using conditions.

// Why Use Conditional Rendering?
// You use conditional rendering to:
//  Show or hide elements.
//  Display different messages.
//  Show a loading screen.
//  Show login/logout buttons.
//  Display data only when it is available.
//  Method 1: Using the Ternary Operator (? :)

// The ternary operator is the most common way to render content conditionally.
// Syntax
// condition ? "True Value" : "False Value"
// Example
function App() {

  const isLoggedIn = true;

  return (
    <h1>
      {isLoggedIn ? "Welcome User!" : "Please Login"}
    </h1>
  );
}

export default App;
// Output
// Welcome User!

// If you change:
// const isLoggedIn = false;
// Output
// Please Login

// Method 2: Using && (Logical AND)
// Use && when you want to show something only if the condition is true.
// Syntax
// condition && <Element />
// Example
function App() {
  const isAdmin = true;
  return (
    <>
      <h1>Dashboard</h1>

      {isAdmin && <button>Delete User</button>}
    </>
  );
}
export default App;
// Output
// Dashboard

// [Delete User]
// If:
// const isAdmin = false;
// Output
// Dashboard
// The Delete User button is not shown.

// Method 3: Using if...else
// You can use an if...else statement before the return.
// Example
function App() {
  const age = 20;
  let message;
  if (age >= 18) {
    message = "You are an Adult";
  } else {
    message = "You are a Child";
  }
  return <h1>{message}</h1>;
}

export default App;
// Output
// You are an Adult

// Example 4: Show Pass or Fail
function App() {

  const marks = 80;

  return (
    <h1>
      {marks >= 40 ? "Pass" : "Fail"}
    </h1>
  );
}

export default App;
// Output
// Pass

// Example 5: Login Button
function App() {
  const loggedIn = false;
  return (
    <>
      {loggedIn ? (
        <button>Logout</button>
      ) : (
        <button>Login</button>
      )}
    </>
  );
}

export default App;
// Output
// [Login]

// If:
// const loggedIn = true;
// Output
// [Logout]


// Example 6: Shopping Cart
function App() {
  const cartItems = 3;
  return (
    <>
      <h1>Shopping Cart</h1>

      {cartItems > 0
        ? <p>You have {cartItems} items.</p>
        : <p>Your cart is empty.</p>}
    </>
  );
}

export default App;
// Output
// Shopping Cart

// You have 3 items.
// Example 7: Loading Screen
function App() {
  const loading = true;
  return (
    <>
      {loading
        ? <h2>Loading...</h2>
        : <h2>Data Loaded</h2>}
    </>
  );
}

export default App;
// Output
// Loading...
// Real-Life Example

// Suppose a student checks exam results.

// Marks 40 or more → Pass
// Marks Less than 40 → Fail

// React code:
// const marks = 55;
// <h2>{marks >= 40 ? "Pass" : "Fail"}</h2>
// Output
// Pass

// Which Method Should You Use?
// Method	When to Use
// Ternary (? :)	Show one of two options.
// &&	Show something only when the condition is true.
// if...else	Use when the logic is longer or more complex.

// Important Notes
// ✅ Use the ternary operator for two possible outputs.
// ✅ Use && when you only need to show an element if a condition is true.
// ❌ You cannot write an if statement directly inside JSX.

// Wrong:
return (
  <div>
    {
      if (true) {
        <h1>Hello</h1>;
      }
    }
  </div>
);
// Correct:

if (true) {
  return <h1>Hello</h1>;
}

return <h1>Bye</h1>;

// Or use a ternary:
<h1>{true ? "Hello" : "Bye"}</h1>

// Summary
// Conditional rendering means displaying different UI based on a condition.
// React can show or hide elements depending on whether a condition is true or false.
// The three common ways are:
// Ternary operator (? :)
// Logical AND (&&)
// if...else statements