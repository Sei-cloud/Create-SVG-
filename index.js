// index.js

const inquirer = require('inquirer');
const generateSVG = require('./lib/generator');

inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter text (up to three characters):',
    validate: function(input) {
      return input.length <= 3 ? true : 'Please enter up to three characters.';
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hexadecimal):'
  },
  {
    type: 'list',
    name: 'shapeType',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hexadecimal):'
  }
]).then(answers => {
  generateSVG(answers.text, answers.textColor, answers.shapeType, answers.shapeColor);
});
