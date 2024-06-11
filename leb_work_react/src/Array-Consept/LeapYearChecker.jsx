import React, { useState } from 'react';

const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

const LeapYearChecker = () => {
  const [year, setYear] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setYear(e.target.value);
  };

  const handleCheckLeapYear = () => {
    if (year !== '') {
      const leapYearMessage = isLeapYear(parseInt(year))
        ? `${year} is a leap year`
        : `${year} is not a leap year`;
      setResult(leapYearMessage);
    }
  };

  return (
    <div>
      <h2>Check Leap Year</h2>
      <input
        type="number"
        value={year}
        onChange={handleInputChange}
        placeholder="Enter a year"
      />
      <button onClick={handleCheckLeapYear}>Check</button>
      <p>{result}</p>
    </div>
  );
};

export default LeapYearChecker;
