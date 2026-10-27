import { useState } from "react";
import "./Hooks.css"

function Hooks() {
  const [color, setColor] = useState(".....");

  return (
    <>
      <h1 style={{ color: color }}>This is my favourite Color: {color} </h1>
      <div className="hooks">
      <button className="hooks-button" onClick={() => setColor("red")}>Red</button>
      <button className="hooks-button" onClick={() => setColor("green")}>Green</button>
      <button className="hooks-button" onClick={() => setColor("blue")}>Blue</button>
      <button className="hooks-button" onClick={() => setColor("yellow")}>Yellow</button>
      </div>
    </>
  );
}

export default Hooks;
