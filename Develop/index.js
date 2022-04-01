// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const userQuestions = [

        {
            type: 'input',
            name: 'title',
            message: 'What is your project title (Required)?',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project.',
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
            message: 'What are the steps required to get the development environment running?',
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
            message: 'What are the instructions and examples for use?',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log('Please provide instructions and examples for use!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Would you like other developers to contribute?',
            default: 'Find out how at https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Would you like to give test instructions?',
            default: 'No'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use?',
            choices: ['GNU-AGPLv3','MIT-License','Mozilla-Public-License-2.0','Apache-License-2.0','Boost-Software-License-1.0','None']
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
            validate: usernameInput => {
                if(usernameInput) {
                    return true;
                } else {
                    console.log('Please provide your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'profile',
            message: 'What is your GitHub profile link?',
            validate: profileInput => {
                if(profileInput) {
                    return true;
                } else {
                    console.log('Please provide your GitHub profile link!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please provide your email!');
                    return false;
                }
            }
        } 
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(`${fileName}`, `${data}`, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Your README.md has been generated!');
        }
    });
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(userQuestions)
        .then((userAnswers) => {
            return writeToFile("./dist/README.md", generateMarkdown(userAnswers));
        })
        .catch(err => {
            console.log(err);
        })
    }

// Function call to initialize app
init();

