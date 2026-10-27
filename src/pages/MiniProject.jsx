import React, { useState } from "react";

function MiniProject() {
  const [count, setCount] = useState(0);
  function decreasHandler() {
    setCount(count - 1);
  }
  function increaseHandler() {
    setCount(count + 1);
  }
  function resetHnadler() {
    setCount(0);
  }
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-[#344151] flex-col gap-12">
        <div className="text-[#0398d4] font-medium text-xl">
          Increment And Decrement
        </div>
        <div className="bg-white flex justify-center gap-12 py-3 rounded text-[25px] text-[#344151]">
          <button
            onClick={decreasHandler}
            className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
          >
            -
          </button>
          <div className="font-bold text-center gap-12 text-3xl">{count}</div>
          <button
            onClick={increaseHandler}
            className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"
          >
            +
          </button>
        </div>
        <button onClick={resetHnadler} className="bg-[#0398d4] text-white w-20 rounded-sm text-lg">Reset</button>
      </div>
    </>
  );
}

export default MiniProject;
