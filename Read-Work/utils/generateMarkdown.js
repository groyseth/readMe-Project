 var link;

function renderLicenseBadge(license) {
 
switch(license) {
  case "Apache License 2.0":
    link = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    textOf = "Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form. Click badge for more info"
    break;
  case "BSD licenses":
    link = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    textOf = "Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met: 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission. Click badge for more info"
    break;
    case "GNU licenses":
      link = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      textOf = "Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed."
      break;
  case "MIT License":
      link = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      textOf = "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so. Click badge for more info"
      break;
  case "Mozilla Public License 2.0":
      link = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      textOf = "Each individual or legal entity that creates, contributes to the creation of, or owns Covered Software. Click badge for more info"
      break;
  case "None":
      link = ""
    break;     
  
    
}


}




function generateMarkdown(data){

renderLicenseBadge(data.license);

  return `# ${data.projectName}
    
  This appilcation is covered by ${data.license} ${link}
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
A brief discription:

${textOf}

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
