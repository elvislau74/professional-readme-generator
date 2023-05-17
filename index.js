// Assign packages and module exports needed for this application to constant values
const inquirer = require('inquirer');
const generateReadme = require('./utils/generateMarkdown');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
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
        "Eclipse Public License 1.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v3.0",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide any instructions for testing.',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please provide any contribution guidelines.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Are there any other credits you would like to provide?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your github username (case-sensitive).',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email.',
    },
    {
        type: 'input',
        name: 'livesite',
        message: 'Please provide a link to your livesite.',
    },
    {
        type: 'input',
        name: 'filename',
        message: 'What would you like to name your readme file (Do not include the .md, and no spaces)?',
    },
  ];

// This function writes a README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) =>
        err ? console.error(err) : console.log("Success!")
    );
}

// This function initializes the app
// Uses inquirer to prompt the user with questions 
// Pulls answers to be used to create and print to readme file
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        const license = generateReadme.renderLicenseBadge(answers.license);
        writeToFile(answers.filename, generateReadme.generateMarkdown(answers, license.label, license.badge, license.link));
});

}

// Function call to initialize app
init();
