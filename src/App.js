import React, { useState } from "react";
import "./styles.css";
import Button from "./components/Button";
import * as math from "mathjs";

const arrOperations = ["*", "/", "+", ".", "-"];

export default function App() {
  const [input, setInput] = useState("");
  function insertNum(val) {
    setInput(input + val);
  }
  function insertOperation(val) {
    if (
      input === "" ||
      (arrOperations.includes(input[input.length - 1]) &&
        arrOperations.includes(val))
    ) {
      return;
    } else {
      setInput(input + val);
    }
  }

  function calculate() {
    if (input === "" || arrOperations.includes(input[input.length - 1])) {
      return input;
    } else {
      setInput(math.evaluate(input));
    }
  }

  return (
    <div className="App">
      <h1>Calculator with React</h1>
      <div className="calc-wrapper">
        <Button isInput>{input}</Button>
        <div className="line">
          <Button onClick={insertNum}>7</Button>
          <Button onClick={insertNum}>8</Button>
          <Button onClick={insertNum}>9</Button>
          <Button onClick={insertOperation}>/</Button>
        </div>
        <div className="line">
          <Button onClick={insertNum}>4</Button>
          <Button onClick={insertNum}>5</Button>
          <Button onClick={insertNum}>6</Button>
          <Button onClick={insertOperation}>*</Button>
        </div>
        <div className="line">
          <Button onClick={insertNum}>1</Button>
          <Button onClick={insertNum}>2</Button>
          <Button onClick={insertNum}>3</Button>
          <Button onClick={insertOperation}>+</Button>
        </div>
        <div className="line">
          <Button onClick={insertOperation}>.</Button>
          <Button onClick={insertNum}>0</Button>
          <Button onClick={() => setInput("")}>C</Button>
          <Button onClick={insertOperation}>-</Button>
        </div>
        <div className="line">
          <Button onClick={calculate}>=</Button>
        </div>
      </div>
    </div>
  );
}
