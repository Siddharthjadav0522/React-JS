import React from 'react';

const StatelessComponent = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  }

  return (
    <div>
      <h2>Stateless Component</h2>
      <input type="text" onChange={handleChange} placeholder="Enter text" />
    </div>
  );
}

export default StatelessComponent;