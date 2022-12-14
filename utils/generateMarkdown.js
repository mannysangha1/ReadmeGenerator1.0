// TODO: Create a function that returns a license badge based on which license is passed in

const Choices = require("inquirer/lib/objects/choices");
const { listenerCount, chdir } = require("process");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MPL') {
    return `[![License](https://img.shields.io/badge/License%20-Mozilla-yellow)](https://opensource.org/licenses/MPL-2.0)`
  } else if(license === "MIT"){
    return `[![License](https://img.shields.io/badge/License%20-MIT-blue)](https://opensource.org/licenses/MIT)`
  }
  else if (license === "GPL"){
    return `[![License](https://img.shields.io/badge/License%20-GNU-violet)](https://opensource.org/licenses/gpl-license)`
  }
  else {
    console.log(license)
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// use this function for licenses at the bottom
function renderLicenseLink(license) {
  if(license === "GPL") {
    return `[GNU Lesser General Public License](https://www.gnu.org/licenses/lgpl-3.0.en.html)`
  } else if(license === "MIT") {
    return `[MIT][https://opensource.org/licenses/MIT)`
  }
  else if (license === "MPL") {
    return `[${license}](https://opensource.org/licenses/MPL-2.0)`
  }
  else {
    console.log("license")
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `
    ## license

    License is ${license} standard license`
  } else if (license === "MPL") {
    return `
     ## license

    License is ${license} standard license`
  }
  else if(license === "GPL") {
    return ` 
    ## license

    License is ${license} standard license`
  }
  else{
    console.log(license)
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}

  ## Description 

  ${data.description}

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

${renderLicenseBadge(data.licenses)}

${renderLicenseSection(data.licenses)}

${renderLicenseLink(data.licenses)}

 ## Contributing

 ${data.contributing}

## Contact info

 ${data.github} 




 ${data.email}

 ## Tests

 ${data.tests}





`;
}

module.exports = generateMarkdown;
