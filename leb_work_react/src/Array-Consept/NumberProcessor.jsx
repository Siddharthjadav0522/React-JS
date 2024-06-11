import React from 'react';

const NumberProcessor = () => {
  const a = [1, 2, 3, 4, 5];

  const squares = a.map(num => num ** 2);
  const cubes = a.map(num => num ** 3);

  return (
    <div>
      <h2>Original Array</h2>
      <p>{a.join(', ')}</p>
      
      <h2>Squares</h2>
      <p>{squares.join(', ')}</p>
      
      <h2>Cubes</h2>
      <p>{cubes.join(', ')}</p>
    </div>
  );
};

export default NumberProcessor;
