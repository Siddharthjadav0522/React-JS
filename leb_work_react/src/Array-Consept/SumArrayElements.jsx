import React from 'react';

const SumArrayElements = () => {
  const a = [10, 20, 30, 40, 50];
  const sum = a.reduce((i, j) => i + j ,0);

  return (
    <div>
      <h2>Sum of Array Elements</h2>
      <h3>a = {a.join(",")}</h3>
      <p>The sum of the array elements is: {sum}</p>
    </div>
  );
};

export default SumArrayElements;
