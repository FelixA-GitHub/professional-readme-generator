// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //badgeColor array and randomBadgeColor functionality added to license
  const badgeColor = ['brightgreen', 
                      'red',
                      'yellow', 
                      'blueviolet', 
                      'blue', 
                      'orange',
                      'lightgrey'
                      ];
  const randomBadgeColor = badgeColor[Math.floor(Math.random() * 7)];
  
  //if license, badge will be returned
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/license-${license}-${randomBadgeColor})`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let stringsAndNumbers = license.split(/(\d+)/).filter(el => el != "").join("-");
  if (license !== 'None') {
    return `
  ## License:
            
    Copyright © ${license}

    Licensed under the ${license} (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
      https://choosealicense.com/licenses/${stringsAndNumbers.toLowerCase()}/
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
  `;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  # Table of Contents
  * [Description](#description)
  * [Installation](#dependencies)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  ${renderLicenseLink(data.license)}
  * [Questions](#questions)

  
  ## Description:
  
  ${data.description}
  
  ## Installation:

  \`\`\
  ${data.dependencies}
  \`\`\

  
  ## Usage:

  Input this into its Integrated Terminal:
  
  \`\`\
  ${data.usage}
  \`\`\

  
  ## Contribution:

  Find out how to contribute at:
  
  ${data.contribution}
  
  ## Test:
  
  \`\`\
  ${data.test}
  \`\`\
  
  ${renderLicenseSection(data.license)}

  ## Questions:

  Listed is my GitHub Username and Profile:
  
  ${data.username}

  ${data.profile}
  
  If you have additional questions, you can reach me at:
  
  ${data.email}
    
  `;
}

module.exports = generateMarkdown;
