import React, { useState } from 'react';
import Tours from './Tours';
import Data from "./Data";

function Home() {
    const [tours, setTours] = useState(Data);

    function removeHandler (id) {
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
    }

    if(tours.length === 0) {
        return (
            <div className='refresh'>
                <h2 >No Tours Left</h2>
                <button className='btn-white' onClick={() => setTours(Data)}>Refresh</button>
            </div>
        )
    }
  return (
    <>
    <div className='app'>
        <Tours tours={tours} removeHandler={removeHandler} />
    </div>
    </>
  );
}

export default Home;