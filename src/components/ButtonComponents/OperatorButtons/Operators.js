import React, { useState } from "react";

//import any components needed
import data from "../../../data";
import OperatorButton from "./OperatorButton";
const operators = data.operators;

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsState, setoperatorsState] = useState(operators);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

      {operators.map(operatorItem => {
        return <OperatorButton operator={operatorItem} />;
      })}
    </div>
  );
};

export default Operators;
