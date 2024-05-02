const fs = require('fs');
const path = require('path');
const { Circle, Triangle, Square } = require('./shapes');

function generateSVG(text, textColor, shapeType, shapeColor) {
  let shape;
  let shapeSize;
  let fontSize;

  switch (shapeType) {
    case 'circle':
      shapeSize = 80; // Default radius
      shape = new Circle(shapeSize);
      break;
    case 'triangle':
      shapeSize = 80; // Default side length
      shape = new Triangle(shapeSize);
      break;
    case 'square':
      shapeSize = 80; // Default side length
      shape = new Square(shapeSize);
      break;
    default:
      console.error('Invalid shape type');
      return;
  }

  const shapeSVG = shape.generateSVG(); // Generate SVG markup for the shape

  // Calculate font size as 90% of the shape size
  fontSize = Math.floor(shapeSize * 0.7);


  const svgContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <g fill="${shapeColor}">
      ${shapeSVG} <!-- Include the generated SVG markup for the shape -->
      <text x="150" y="100" fill="${textColor}" font-size="${fontSize}px" text-anchor="middle" alignment-baseline="middle">${text}</text> <!-- Position and style the text -->
    </g>
  </svg>
`;
  const filePath = path.join(__dirname, '..', 'examples', 'logo.svg');

  fs.writeFileSync(filePath, svgContent);
  console.log('Generated logo.svg');
}

module.exports = generateSVG;