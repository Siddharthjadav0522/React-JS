import React from 'react';

const CountElements = () => {
  const a = ["mango", "orange", "mango", "apple", "apple", "pineapple", "apple"];

  // Create an object to hold the counts
  const elementCounts = a.reduce((counts, element) => {
    counts[element] = (counts[element] || 0) + 1;
    return counts;
  }, {});

  return (
    <div>
      <h2>Element Counts</h2>
      <h3>a = {a.join(",")}</h3>
      <ul>
        {Object.keys(elementCounts).map((key) => (
          <li key={key}>
            {key}: {elementCounts[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountElements;
