// shapes.js

class Circle {
    constructor(radius) {
      this.radius = radius;
    }
    
    generateSVG() {
      return `<circle cx="50%" cy="50%" r="${this.radius}" />`;
    }
  }
  
  class Triangle {
    constructor(sideLength) {
      this.sideLength = sideLength;
    }
    
    generateSVG() {
      // SVG path for equilateral triangle
      const height = Math.sqrt(3) * this.sideLength / 2;
      return `<polygon points="50%,${50 - height / 2} ${50 - this.sideLength / 2},${50 + height / 2} ${50 + this.sideLength / 2},${50 + height / 2}" />`;
    }
  }
  
  class Square {
    constructor(sideLength) {
      this.sideLength = sideLength;
    }
    
    generateSVG() {
      return `<rect x="${50 - this.sideLength / 2}" y="${50 - this.sideLength / 2}" width="${this.sideLength}" height="${this.sideLength}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  