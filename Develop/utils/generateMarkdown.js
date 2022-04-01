// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //badgeColor array and randomBadgeColor functionality added to license
  const badgeColor = ['brightgreen', 'red', 'yellow', 'blueviolet', 'blue'];
  const randomBadgeColor = badgeColor[Math.floor(Math.random() * 5)];
  
  //if license, badge will be returned
  if (license !== 'None') {
    return `[License](https://img.shields.io/badge/license-${license}-${randomBadgeColor})`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[License](#license)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  # Table of Contents
  * [description](#description)
  * [installation](#dependencies)
  * [usage](#usage)
  * [contribution](#contribution)
  * [test](#test)
  * [licenses](#licenses)
  * [username](#username)
  * [profile](#profile)
  * [email](#email)

  
  ##Description:
  ${data.description}
  
  ##Installation:
  ${data.dependencies}
  
  ##Usage:
  ${data.usage}
  
  ##Contribution:
  ${data.contribution}
  
  ##Test:
  ${data.test}
  
  ##Licenses:
  ${renderLicenseLink(data.license)}
  
  ##Email:
  ${data.email}
  
  ##Username:
  ${data.username}

  ##Profile:
  ${data.profile}
  
  `;
}

module.exports = generateMarkdown;
