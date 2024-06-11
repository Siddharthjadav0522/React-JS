import React from 'react';

const EvenOddElements = () => {
  const arr = [11, 22, 33, 44, 55];

  const evenElements = arr.filter(num => num % 2 === 0);
  const oddElements = arr.filter(num => num % 2 !== 0);

  return (
    <div>
      <h2>Even and Odd Elements</h2>
      <h2>arr = {arr.join(",")}</h2>
      <h3>Even Elements</h3>
      <p>{evenElements.join(', ')}</p>
      <h3>Odd Elements</h3>
      <p>{oddElements.join(', ')}</p>
    </div>
  );
};

export default EvenOddElements;
