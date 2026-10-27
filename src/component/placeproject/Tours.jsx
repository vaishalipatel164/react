import React from 'react';
import Card from './Card';

function Tours({ tours, removeHandler }) {
  return (
    <div className='container'>
      <div>
        <h2 className='title'>Plan With Me</h2>
      </div>

      <div className='cards'>
        {tours.map((tour) => {
          return (
            <Card
            key={tour.id}
              {...tour}
              removeHandler={removeHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tours;