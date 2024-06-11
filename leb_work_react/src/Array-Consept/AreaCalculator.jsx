import React from 'react';

const CircleArea = (radius) => Math.PI * radius * radius;
const RectangleArea = (length, width) => length * width;
const TriangleArea = (base, height) => 0.5 * base * height;

const AreaCalculator = () => {
  const radius = 5;
  const circleArea = CircleArea(radius);

  const length = 10;
  const width = 5;
  const rectangleArea = RectangleArea(length, width);

  const base = 8;
  const height = 4;
  const triangleArea = TriangleArea(base, height);

  return (
    <div>
      <h2>Area of Circle: {circleArea}</h2>
      <h2>Area of Rectangle: {rectangleArea}</h2>
      <h2>Area of Triangle: {triangleArea}</h2>
    </div>
  );
}

export default AreaCalculator;