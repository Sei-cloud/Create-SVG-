const fs = require('fs')
const inquirer = require("inquirer");
const generateSVG = require('./lib/generator')
const { Circle, Square, Triangle } = require("./lib/shapes");

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the text:',
    validate: function (input) {
      return input.length > 0 && input.length <= 3 ? true : 'Please enter 1 to 3 characters.';
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color keyword or a hexadecimal number for the text color:'
  },
  {
    type: 'list',
    name: 'shapeType',
    message: 'Choose a shape:',
    choices: ['circle', 'square', 'triangle']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color keyword or a hexadecimal number for the shape color:'
  }
];

// Prompt the user for input using Inquirer
inquirer.prompt(questions)
  .then(answers => {
    // Generate SVG based on user input
    const svgContent = generateSVG(answers.text, answers.textColor, answers.shapeType, answers.shapeColor);

    // Write SVG content to a file named logo.svg
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
  })
  .catch(error => {
    console.error('Error occurred during input:', error);
  });