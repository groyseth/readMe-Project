// TODO: Include packages needed for this application
// npm install inquirer
// description, installation instructions, usage information, contribution guidelines, and test instructions
// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// console.log(generateMarkdown);
// Why did you build this project? 
//      What problem does it solve?
//      What did you learn?",
inquirer
  .prompt([
    {
      type: "input",
      message: "whats is the title?",
      name: "projectName"
  }, 
  {
    type: "input",
    message: "You can add a discription.",
    name: "discription"
},
{
    type: "input",
    message: "What are the steps required to install your project?",
    name: "install"
},
{
    type: "input",
    message: "Provide instructions for use.",
    name: "usage"
},
{
    type: "list",
    message: "Choose a license.",
    choices: ["Apache License 2.0", "BSD licenses", "GNU licenses", "MIT License", "Mozilla Public License 2.0", "None"],
    name: "license"
},
{
  type: "input",
  message: "contribution guidelines?",
  name: "contribution"
},
{
  type: "input",
  message: "test instructions?",
  name: "test"
},
{
  type: "input",
  message: "Would you like your email to display?",
  name: "email"
},
{
  type: "input",
  message: "GitHub username?",
  name: "github"
},
{
  type: "input",
  message: "Questions?",
  name: "question"
},
   
  ])
   
  .then((answers) => {
    console.log(answers);
    var htmlStr =  makeToFile(answers);
    console.log(htmlStr);
     fs.writeFile('myReadMe.md', htmlStr, (err)=> {
         if(err){
             console.log(err);
         }
         console.log("successful");
     })
 })


 function makeToFile(data) {
   return generateMarkdown(data)
 }
    // Use user feedback for... whatever!!
  
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });
// // TODO: Create an array of questions for user input
// const questions = [];//look at notes

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
