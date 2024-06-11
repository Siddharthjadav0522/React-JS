import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  const reset = () => {
    setCount(0);
  }
  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default Counter;