import { useState } from "react";
import "./Home.css";
import Hooks from "./hooks";

function Home() {
  // const [subit, setSubmit] = useState(" ");

  function submit() {
    alert("Fast Order");
  }
  function send() {
    alert("Successful");
  }
  return (
    <>
      <div className="wapper">
        <h1>Spicy delicious Chicken wings</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
          iusto beatae? Eum rem corrupti aliquid consequuntur placeat, vero
          fugit alias Vaishali!
        </p>
        <div className="button">
          <button onClick={submit}>30 Minutes</button>
          <button onClick={send}>Chicken</button>
        </div>
      </div>
      <Hooks />
    </>
  );
}

export default Home;
