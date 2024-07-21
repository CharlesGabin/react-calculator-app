import { useState, useRef, useEffect } from "react";
import React from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const inputRef = useRef("");
  const resultRef = useRef("");
  const [result, setResult] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (result === 0) {
      const timeout = setTimeout(() => {
        setResult(Number(number));
        setNumber("");
        setTyping(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [result, typing]);

  function handleChange(e) {
    setNumber(e.target.value);
    e.preventDefault();
    setTyping(true);
  }

  function plus(e) {
    e.preventDefault();
    // check();
    // setResult((result) => result + Number(inputRef.current.value));
    resultRef.current.value = result + Number(number);
    console.log(resultRef.current.value);
    setResult(resultRef.current.value);
    resetInput(e);
  }

  function minus(e) {
    // Add the code for the minus function
    e.preventDefault();
    setTyping(false);
    // setResult((result) => result - Number(inputRef.current.value));
    resultRef.current.value = result - Number(number);
    console.log(resultRef.current.value);
    setResult(resultRef.current.value);
    resetInput(e);
  }

  function times(e) {
    // Add the code for the plus functions
    e.preventDefault();
    // setResult((result) => result * Number(inputRef.current.value));
    resultRef.current.value = result * Number(number);
    console.log(resultRef.current.value);
    setResult(resultRef.current.value);
    resetInput(e);
  }

  function divide(e) {
    // Add the code for the divide function
    e.preventDefault();
    // setResult((result) => result / Number(inputRef.current.value));
    resultRef.current.value = result / Number(number);
    console.log(resultRef.current.value);
    setResult(resultRef.current.value);
    resetInput(e);
  }

  function resetInput(e) {
    // Add the code for the resetInput function
    e.preventDefault();
    setNumber("");
    inputRef.current.focus();
  }

  function resetResult(e) {
    // Add the code for the resetResult function
    e.preventDefault();
    setResult(0);
    inputRef.current.focus();
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          value={number}
          ref={inputRef}
          type="number"
          placeholder="Type a number"
          onChange={handleChange}
        />
        <button onClick={plus}>+</button>
        {/* Add the subtract button */}
        <button onClick={minus}>-</button>
        {/* Add the multiply button */}
        <button onClick={times}>x</button>
        {/* Add the divide button */}
        <button onClick={divide}>/</button>
        {/* Add the resetInput button */}
        <button onClick={resetInput}>Reset</button>
        {/* Add the resetResult button */}
        <button onClick={resetResult}>AC</button>
      </form>
    </div>
  );
}

export default App;
