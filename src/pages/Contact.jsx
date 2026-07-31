import { React, useState } from "react";
import "./Contact.css";

function Contact() {
  const [forms, setForms] = useState(" ");
  function handleChange(a) {
    setForms(a.target.value);
  }
  return (
    <>
      <form action="">
        <h1>Contact</h1>
        <label for="text">Full Name </label>
        <input
          className="pass"
          type="text"
          id="Enter your name"
          value={forms}
          onChange={handleChange}
        />
      </form>
      <p>Hello {forms} </p>
    </>
  );
}
export default Contact;
