// TODO: Create a function that returns a license badge based on which license is passed in

const Choices = require("inquirer/lib/objects/choices");
const { listenerCount, chdir } = require("process");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None') {
    return `[![GNU Public License](https://img.shields.io/badge/GNU-general%20public%20license-green)]`
  } else {
    return ``
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://www.gnu.org/licenses/lgpl-3.0.en.html`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
    ## license

    License is ${license} standard license`
  } else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 

  ${data.desciption}

  # Sceenshots

  ## Table of contents

  * [Installation)(#Installations)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [License](#License)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

 ## Credits

 ${data.credits}

 ## License

 ${data.license}

 ## Contributing

 ${data.contributing}

## Contact info

 ${data.gitub}


 ${data.email}

 ## Tests

 ${data.tests}





`;
}

module.exports = generateMarkdown;
