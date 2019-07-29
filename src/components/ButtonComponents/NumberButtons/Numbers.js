import React, { useState } from "react";
import NumberButton from "./NumberButton";

//import any components needed
import data from "../../../data";
const numbers = data.numbers;

//Import your array data to from the provided data file

const Numbers = () => {
  const [numberState, setNumberState] = useState(numbers);
  // STEP 2 - add the imported data to state

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      {numbers.map(numberItem => {
        return <NumberButton number={numberItem} />;
      })}
    </div>
  );
};

export default Numbers;
