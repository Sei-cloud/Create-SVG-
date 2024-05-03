const path = require('path');
const { Circle, Triangle, Square } = require('./shapes');

class Svg {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }

  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }

  setTextElement(text, color) {
    this.textElement = `<text x="100" y="100" font-size="50" text-anchor="middle" alignment-baseline="middle" fill="${color}">${text}</text>`;
  }

  setShapeElement(shape) {
    this.shapeElement = shape;
  }
}

function generateSVG(text, textColor, shapeType, shapeColor) {
  const svg = new Svg();
  const shape = getShapeInstance(shapeType);

  svg.setTextElement(text, textColor); // Set text content and color
  shape.setColor(shapeColor); // Set shape color

  svg.setShapeElement(shape.render());

  return svg.render();
}

// Function to get the instance of the selected shape
function getShapeInstance(shapeType) {
  switch (shapeType.toLowerCase()) {
    case 'circle':
      return new Circle();
    case 'square':
      return new Square();
    case 'triangle':
      return new Triangle();
    default:
      console.error('Invalid shape type');
      return null;
  }
}

// Export the generateSVG function
module.exports = generateSVG;