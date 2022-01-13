 var link;
 // "", "BSD licenses", "GNU licenses", "MIT License"
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 var nameOf = (license)
switch(nameOf) {
  case "Apache License 2.0":
    link = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    
    break;
  case "BSD licenses":
    link = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
   
    break;
    case "GNU licenses":
      link = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
     
      break;
  case "MIT License":
      link = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
     
      break;
  case "Mozilla Public License 2.0":
      link = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"

      break;
  case "None":
      link = ""
    break;     
  
    
}


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data){

renderLicenseBadge(data.license);

  return `# ${data.projectName}
    
  ${link}
## description  

${data.discription}
## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Email](#email)
- [GitHub](#github)
- [Questions](#questions)

## Installation
${data.install}  

## Usage
${data.usage}  

## Credits
Made by Grant Royseth!

## License  
${data.license}  
${link}


## Contribute
${data.contribution}  

## Tests
${data.test}


## Email
${data.email}  

## GitHub
${data.github}

## Questions
${data.question}
`;

}



module.exports = generateMarkdown;
