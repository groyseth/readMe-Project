// TODO: Include packages needed for this application
// npm install inquirer
var inquirer = require('inquirer');
inquirer
  .prompt([
    "hey"
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
// TODO: Create an array of questions for user input
const questions = [];//look at notes

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();