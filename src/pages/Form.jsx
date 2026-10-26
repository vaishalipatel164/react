import React, { useState } from 'react';
import "./Form.css"

function Form() {

    const [newTitle, setNewTitle] = useState('');
    const [newDate, setNewDate] = useState('');

    function titleChangeHandler(event) {
        setNewTitle(event.target.value);
        console.log(event.target.value)
    }
    function dateChangeHandler(event) {
        setNewDate(event.target.value);
        //console.log(event.target.value)
    }

    function submitHandler (event) {
      event.preventDefault();

      const productData = {
        title:newTitle,
        date:newDate,
      };
      console.log(productData);
      setNewTitle('');
      setNewDate('');
    }

  return (
    <>
    <form onSubmit={submitHandler}>
        <div className='new-product_controls'>
            <div className='new-product_control'>
                <label>Title</label>
                <input type="text" value={newTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-product_control'>
                <label>Date</label>
                <input type="date" value={newDate} onChange={dateChangeHandler} min="2026-01-01" max="2026-12-31"></input>
            </div>
            <div className='new-product_button'>
                <button type='submit'>Add Product</button>
            </div>
        </div>
    </form>
    </>
  )
}

export default Form;