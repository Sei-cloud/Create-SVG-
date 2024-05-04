const path = require('path');
const { Circle, Triangle, Square } = require('./shapes');

class Svg {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
  }

  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  setShapeElement(shape) {
    this.shapeElement = shape;
  }
}

function generateSVG(text, textColor, shapeType, shapeColor) {
  const svg = new Svg();
  const shape = getShapeInstance(shapeType);

  svg.setTextElement(text, textColor); 
  shape.setColor(shapeColor); 

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