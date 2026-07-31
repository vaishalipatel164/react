import { useState } from "react";
import "./Recipes.css";
import Person1 from "../assets/ima.jpg";
import Person from "../assets/images.jpg";

function Recipes() {
  return (
    <>
      <h1>Recipes</h1>
      <div className="flex">
        <Card />
        {/* <Card />
        <Card /> */}
      </div>
      <Mapping />
    </>
  );
}
export default Recipes;

export function Card() {
  const vaisha = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwO0wY2zmLQ-AFOwPUfj_GWNfC4AVxIUeIKEocoo0a9g&s=10",
      name: "Tiya",
      disc: "studenst of BCA",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8z7DoIRqklUYo4pEDmlTxKIyZ9myc2Z8MC73goKWOw&s=10",
      name: "Priya",
      disc: "studenst of MCA",
    },
    {
      name: "Amit",
      disc: "studenst of B.Tech",
      image: Person,
    },
    {
      image: Person1,
      name: "Rohan",
      disc: "studenst of BBA",
    },
  ];
  return (
    <>
      {vaisha.map((rama) => (
        <div className="containers">
          <div className="wappers">
            <img src={rama.image} alt={rama.name} />
            <h2 className="heading">{rama.name}</h2>
            <p className="para">{rama.disc}</p>
            <button className="card-btn">Send Me</button>
          </div>
        </div>
      ))}
    </>
  );
}

export function Mapping() {
  const arr = ["Red", "Green", "Blue"];
  return (
    <>
      {arr.map((key) => (
        <h1>hello {key}</h1>
      ))}
    </>
  );
}
