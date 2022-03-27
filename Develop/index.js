// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
let path = require('doc-path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const userQuestions = [

        {
            type: 'input',
            name: 'title',
            message: 'What is your project title (Required)?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required).',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project (Required)? Provide a step-by-step description of how to get the development environment running.',
            validate: installationInput => {
                if(installationInput) {
                    return true;
                } else {
                    console.log('Please enter your steps for installation!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the instructions and examples for use (Required)?',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log('Please provide instructions and examples for use!');
                    return false;
                }
            }
        },
        // {
        //     type: 'confirm',
        //     name: 'confirmContribution',
        //     message: 'Would you like to enter some info on how other developers can contribute?',
        //     default: true
        // },
        // {
        //     type: 'input',
        //     name: 'contribution',
        //     message: 'Please provide Contribution Info.',
        //     when: ({ confirmContribution }) => confirmContribution
        // }
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter some info on how other developers can contribute.',
            validate: contributionInput => {
              if (contributionInput) {
                return true;
              } else {
                console.log('Since you have not entered your own contribution info, we will include the Contribution Covenant.');
                // area for inserting link or text from the Contribution Covenant
                return false;
              }
            }
        },
        {
            type: 'confirm',
            name: 'test',
            message: 'Would you like to test your knowledge?',
            default: false,
            if (test){
                //test questions

            }
        }, 
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync('./dist/README.md', fileName, data);
    }



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(userQuestions)
        .then((userAnswers) => {
            return generateMarkdown(userAnswers);
        })
        .then(readMeInfo => {
            return writeToFile(readMeInfo);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(err => {
            console.log(err);
        })
    }

// Function call to initialize app
init();

