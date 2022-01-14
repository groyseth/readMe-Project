const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
function init(){
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
}

 function makeToFile(data) {
   return generateMarkdown(data)
 }

 

init();
