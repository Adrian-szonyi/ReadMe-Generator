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
      name: 'License',
      message: 'Which license would you like to use?',
      choices: ['MIT', 'Mozilla Public License 2.0', 'telekinesis'],
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
      {
        type: 'input',
        name: 'Github',
        message: 'Link to your Github Profile',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your personal email address?',
      },
  ]);
};


const generateReadMe = (answers) =>


`
# ${answers.Title}

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Tests](#Tests)
- [Contributing](#Contributing)
- [License](#License)
- [Usage](#Usage)
- [Questions](#Questions)

## Description

${answers.Description}

## Installation

${answers.Installation}

## Tests

${answers.Tests}

## Contributing

${answers.Contributing}

## License


${answers.License['Mozilla Public License 2.0'] ? '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)': ''}
${answers.License["'MIT'"] ? '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)': ''}
${answers.License["'MIT'"] ?? 'The MIT License (MIT) Copyright (c) 2015 Chris Kibble Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'}
${answers.License["'MIT'"] ? 'MIT' : 'NOT MIT'}

${answers.License}

## Usage

${answers.Usage}

## Questions

My Github Profile link: [_here_](${answers.Github})
if you have any additional questions you can reach me using the details below:
Email: ${answers.email}
`;


const init = () => {
  promptUser()
    .then((answers) => fs.writeFile('Readme.md', generateReadMe(answers), (err) => {
        console.log(answers)
        if (err) throw err;
     
  console.log('The file has been saved!');
    })
    // .catch((err) => console.error(err));
    
    )};

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
init();