// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const writeReadme = require('writeReadme');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide any installation instructions for your project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please describe how to use your site.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Are there any contributors or other credits you would like to provide?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What License did you use for your project?',
      choices: [
        "None",
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        `BSD 2-Clause "Simplified" License`,
        `BSD 3-Clause "Simplified" License`,
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide a link to your github.',
    },
    {
        type: 'input',
        name: 'livesite',
        message: 'Please provide a link to your livesite.',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) =>
        err ? console.error(err) : console.log("Success!")
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
