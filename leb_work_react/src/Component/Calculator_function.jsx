import React, { useState } from 'react'

function Calculator_function() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0)

  const handleform = (e) => {
    e.preventDefault();
  }

  const add = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  }
  const subtract = () => {
    setResult(num1 - num2);
  }
  const multiply = () => {
    setResult(num1 * num2);
  }
  const divide = () => {
    setResult(num1 / num2);
  }

  return (
    <>
      <form onSubmit={handleform}>
        <h2>Function based Component Calculator program</h2>
        <input type="number" placeholder='Enter Number' value={num1} onChange={(e) => { setNum1(e.target.value) }} />
        <input type="number" placeholder='Enter Number' value={num2} onChange={(e) => { setNum2(e.target.value) }} />
        <br /><br />
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <button onClick={multiply}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <h2>Result : {result}</h2>
      </form>
    </>
  )
}

export default Calculator_function
