// TODO: Include packages needed for this application

const { constants } = require("buffer");
const fs = require("fs");
const inquirer = require("inquirer");
const util = require ("util");
const {RSA_PKCS1_0AEP_PADDING } = require ("constants");

const generateMarkdown = require("./utils/generateMarkdown.js");
const { log } = require("console");

const writeFileAsync = until.promisfy(fs.writeFile);



// TODO: Create an array of questions for user input
const questions = [
    {
        type: "",
        name: "",
        message: "",
    },
    {
        type: "",
        name: "",
        message: "",
    },
    {
        type: "",
        name: "",
        message: "",
    },
    {
        type: "",
        name: "",
        message: "",
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
function init() {
    try{
        let answers = await inquirer.prompt(questions);
        
    }
}

// Function call to initialize app
init();
