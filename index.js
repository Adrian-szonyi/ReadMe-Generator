// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [];
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is your project called?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Describe your project',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Describe the installation method',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Describe how to use the project',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use?',
      choices: ['MIT', 'phone', 'telekinesis'],
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'Who contributed to this project?',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'What tests can users run?',
      },
  ]);
};

const generateReadMe = (answers) =>
  `
###${answers.Title}
##${answers.Installation}
##${answers.Tests}
##${answers.Contributing}
##${answers.License}
##${answers.Usage}
`;

// Bonus using writeFileAsync as a promise
// function writeToFile(fileName, data) {}
const init = () => {
  promptUser()
    .then((answers) => fs.writeFile('Readme.md', generateReadMe(answers)))
    .then(() => console.log('Successfully wrote to ReadMe File'))
    // .catch((err) => console.error(err));
};


// TODO: Create a function to write README file

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
init();