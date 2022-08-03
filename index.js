// TODO: Include packages needed for this application

const { constants } = require("buffer");
const fs = require("fs");
const inquirer = require("inquirer");
const util = require ("util");
const {RSA_PKCS1_0AEP_PADDING } = require ("constants");

const generateMarkdown = require("./utils/generateMarkdown.js");
const { log } = require("console");

//const writeFileAsync = util.promisfy(fs.writeFile);



// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project",
    },
    {
        type: "input",
        name: "credits",
        message: "Do you have any collaborators you would like to credit?",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your application?",
    },
    {
        type:"input",
        name:"usage",
        message:"What is the usage of your application?",

    },
    {
        type: "input",
        name: "contributing",
        message:"What are the contributing guidelines for your application?",
    },
    {
        type: "input",
        name: "tests",
        message:"What are the test commands for this application?",
    },
    {
        type: "input",
        name: "github",
        message:"Your Github URL for questions:",
    },
    {
        type: "input",
        name: "email",
        message:"What is your email address?",
    },
       {
        type: "input",
        name: "licenses",
        message:"What is the license for your application?",
        choices: [
            "[![License](https://img.shields.io/badge/License%20-MIT-blue)](https://opensource.org/licenses/MIT)",
            "[![License](https://img.shields.io/badge/License%20-Mozilla-yellow)](https://opensource.org/licenses/MPL-2.0)",
            "[![License](https://img.shields.io/badge/License%20-GNU-violet)](https://opensource.org/licenses/gpl-license)",
        ]
    },
 
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile("readme.md", data, (err)=>{
        if(err){
            console.log(err);
        }
    });
    console.log("file written");

}


// TODO: Create a function to initialize app
async function init() {
    try{
        let answers = await inquirer.prompt(questions);
        console.log(answers);
        let markdown = generateMarkdown(answers);
        let writeFile = writeToFile ("readMe.md", markdown);
    
    }
    catch(err){
        throw err 
    }
}

// Function call to initialize app
init();
