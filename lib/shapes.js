class Shape {
    constructor() {
        this.color = '';
        this.text = '';
        this.textColor = '';
    }

    setColor(color) {
        this.color = color;
    }

    setText(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }

    renderTextElement() {
        return `<text x="50%" y="50%" font-size="24" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

class Circle extends Shape {
    render() {
        return `<svg height="200" width="200">
                    <circle cx="100" cy="100" r="100" fill="${this.color}" />
                    ${this.renderTextElement()}
                </svg>`;
    }
}

class Square extends Shape {
    render() {
        return `<svg height="200" width="200">
                    <rect x="0" y="0" width="200" height="200" fill="${this.color}" />
                    ${this.renderTextElement()}
                </svg>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<svg height="200" width="200">
                    <polygon points="100,0 200,200 0,200" fill="${this.color}" />
                    ${this.renderTextElement()}
                </svg>`;
    }
}

module.exports = { Circle, Square, Triangle };
