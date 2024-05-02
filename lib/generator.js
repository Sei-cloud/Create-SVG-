const fs = require('fs');
const path = require('path');
const { Circle, Triangle, Square } = require('./shapes');

function generateSVG(text, textColor, shapeType, shapeColor) {
  let shape;

  switch (shapeType) {
    case 'circle':
      shape = new Circle(40); // Default radius
      break;
    case 'triangle':
      shape = new Triangle(80); // Default side length
      break;
    case 'square':
      shape = new Square(80); // Default side length
      break;
    default:
      console.error('Invalid shape type');
      return;
  }

  const shapeSVG = shape.generateSVG(); // Generate SVG markup for the shape

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <g fill="${shapeColor}">
        ${shapeSVG} <!-- Include the generated SVG markup for the shape -->
        <text x="50%" y="50%" fill="${textColor}" text-anchor="middle">${text}</text> <!-- Position and style the text -->
      </g>
    </svg>
  `;

  const filePath = path.join(__dirname, '..', 'examples', 'logo.svg');

  fs.writeFileSync(filePath, svgContent);
  console.log('Generated logo.svg');
}

module.exports = generateSVG;