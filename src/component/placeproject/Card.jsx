import React, { useState } from "react";

function Card({id, image, info, price, name, removeHandler}) {
  const [readmore, setRedmore] = useState(false);
  const description = readmore ? info:`${info.substring(0, 100)}...`;

  function readmoreHandler() {
    setRedmore(!readmore);
  }
  return (
    <>
      <div className="card">
        <img src={image} className="image" />

        <div className="tour-info">

          <div className="tour-details">
            <h4 className="tour-price">₹ {price}</h4>
            <h4 className="tour-name">{name}</h4>
          </div>

          <div className="description">
            {description}
            <span onClick={readmoreHandler} className="read-more">
              {readmore ? `Show Less` : `Read More`}
            </span>
          </div>
        </div>

        <button onClick={() => removeHandler(id)} className="btn-red">Not Interested</button>
      </div>
    </>
  );
}

export default Card;
