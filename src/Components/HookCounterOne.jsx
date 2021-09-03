import React, { useState, useEffect } from "react";
import "./Styles.css";

const HookCounterOne = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect(() => {
    alert("I am Clicked");
  }, [num]);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setNum(num + 1);
          }}
        >
          Click me
        </button>
        <br></br>
        <button
          onClick={() => {
            setNums(nums + 1);
          }}
        >
          Click me
        </button>
      </div>
    </>
  );
};
export default HookCounterOne;
