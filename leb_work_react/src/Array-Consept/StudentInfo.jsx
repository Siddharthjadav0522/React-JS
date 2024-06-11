import React from 'react';

const StudentInfo = () => {
  const student = {
    name: 'Siddharth Jadav',
    age: 21,
    grade: 'A',
    major: 'Web Devloper'
  };

  return (
    <div>
      <h2>Student Information</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Grade:</strong> {student.grade}</p>
      <p><strong>Major:</strong> {student.major}</p>
    </div>
  );
};

export default StudentInfo;
