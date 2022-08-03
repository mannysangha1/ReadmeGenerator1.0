// TODO: Include packages needed for this application

const { constants } = require("buffer");
const fs = require("fs");
const inquirer = require("inquirer");
const util = require ("util");
const {RSA_PKCS1_0AEP_PADDING } = require ("constants");

const generateMarkdown = require("./utils/generateMarkdown.js");

const writeFileAsync = until.promisfy(fs.writeFile);



// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
