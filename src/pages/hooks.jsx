import { useState } from "react";

function Hooks() {
  const [color, setColor] = useState(".....");

  return (
    <>
      <h1 style={{ color: color }}>This is my favourite Color: {color} </h1>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>
    </>
  );
}

export default Hooks;
