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
    const halfBase = this.sideLength / 2;
    const points = `${50},${50 - height / 2} ${50 - halfBase},${50 + height / 2} ${50 + halfBase},${50 + height / 2}`;
    return `<polygon points="${points}" />`;
  }
}

class Square {
  constructor(sideLength) {
    this.sideLength = sideLength;
  }

  generateSVG() {
    const halfLength = this.sideLength / 2;
    return `<rect x="${50 - halfLength}" y="${50 - halfLength}" width="${this.sideLength}" height="${this.sideLength}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
