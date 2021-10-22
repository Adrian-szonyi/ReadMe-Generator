
const inquirer = require("inquirer");
const fs = require("fs");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "Title",
      message: "What is your project called?",
    },
    {
      type: "input",
      name: "Description",
      message: "Describe your project",
    },
    {
      type: "input",
      name: "Installation",
      message: "Describe the installation method",
    },
    {
      type: "input",
      name: "Usage",
      message: "Describe how to use the project",
    },
    {
      type: "list",
      name: "License",
      message: "Which license would you like to use?",
      choices: ["MIT", "WTFPL", "ISC", "The Hippocratic License 3.0"],
    },
    {
      type: "input",
      name: "Contributing",
      message: "Who contributed to this project?",
    },
    {
      type: "input",
      name: "Tests",
      message: "What tests can users run?",
    },
    {
      type: "input",
      name: "Github",
      message: "What is your Github username?",
    },

    {
      type: "input",
      name: "email",
      message: "What is your personal email address?",
    },
  ]);
};

const generateReadMe = (answers) =>
  `
# ${answers.Title}

${
  answers.License === "WTFPL"
    ? "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
    : ""
}
${
  answers.License === "MIT"
    ? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    : ""
}
${
  answers.License === "ISC"
    ? "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    : ""
}
${
  answers.License === "The Hippocratic License 3.0"
    ? "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)"
    : ""
}


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

${
  answers.License === "MIT"
    ? "The MIT License (MIT) Copyright (c) 2015 Chris Kibble Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
    : ""
}
${
  answers.License === "ISC"
    ? 'Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies. THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.'
    : ""
}
${
  answers.License === "The Hippocratic License 3.0"
    ? "An Ethical License for Open Source Projects For too long, we as software developers have divorced ourselves from the consequences of the code that we write. We have told ourselves that development is a pure and abstract pursuit, and have spent our careers writing programs with the goals of clarity, conciseness, readability, performance, and elegance. But we are starting to realize that the software that we create has a real and lasting impact on the world in which we live. Politics and software are so tangled that they cannot be reasonably separated. Consider the GPS software that tells you how to get to a restaurant; it’s also used to direct military drones to their targets. The facial recognition software that unlocks your phone? It’s being used to record, track, and target the activities of political dissenters. All of these technologies are inherently political. There is no neutral political position in technology. You can’t build systems that can be weaponized against marginalized people and take no responsibility for them. One of the delightful things about code is discovering its utility in novel situations. But if those novel situations involve harming other people, we can and should feel responsible. So what can we do about it? Open source licenses have long been the primary tool for promoting the use of our software under our own rules and conditions. In the past these licenses were used to allow the free distribution, modification, and use of our software. But there is nothing stopping us from taking this further. Introducing the Hippocratic License: an Ethical Source license that specifically prohibits the use of software to violate universal standards of human rights, and embodying the Ethical Source Principles. Hippocratic License 3.0 You can view and download the Hippocratic License 3.0 (HL-FULL) here: Markdown Text HTML PDF The core license provides protections for universally recognized human rights, including specific provisions for Indigenous rights. We are also developing optional modules that focus on specific areas of concern, such as environmental justice or labor rights. These modules, powered by an interactive license builder, will empower adopters to customize the Hippocratic License to reflect the needs and challenges of their particular communities. The HL3 license builder with optional modules will be available for use in mid-October. Development of the Hippocratic License 3.0 was led by Sameeul Haque, an IP and human rights attorney with OES partner Corporate Accountability Lab (CAL), in consultation with a special-purpose working group that included other ethical source license creators as well as open source maintainers. Hippocratic License 2.1 You can view and download the 2.1 version of the Hippocratic License here: Markdown HTML version Using the Hippocratic License Simply make a copy of the text of the license and enter the copyright date and name of the copyright holder. Put this license file (e.g. LICENSE.md) in the root directory of your project repository and include it with the distribution of your software."
    : ""
}
${
  answers.License === "WTFPL"
    ? "DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE Version 2, December 2004 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> Everyone is permitted to copy and distribute verbatim or modified copies of this license document, and changing it is allowed as long as the name is changed. DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 0. You just DO WHAT THE FUCK YOU WANT TO."
    : ""
}

## Usage

${answers.Usage}

## Questions

My Github Profile link: [_here_](https://github.com/${answers.Github})
if you have any additional questions you can reach me using the details below:

Email: ${answers.email}
`;

const init = () => {
  promptUser().then(
    (answers) =>
      fs.writeFile(
        `Readme-${Date.now()}.md`,
        generateReadMe(answers),
        (err) => {
          console.log(answers);
          if (err) throw err;

          console.log("The file has been saved!");
        }
      )
  );
};

init();
