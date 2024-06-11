import React from 'react';

const MergeArrays = () => {
  const a = [10, 20, 30, 40, 50];
  const arr = [11, 22, 33, 44, 55];

  const mergedArray = [...a, ...arr];

  return (
    <div>
      <h2>Merged Array</h2>
      <p>a = {a.join(",")}</p>
      <p>arr = {arr.join(",")}</p>

      <p>Merge Arry = {mergedArray.join(', ')}</p>
    </div>
  );
};

export default MergeArrays;
