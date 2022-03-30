// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeColor = ['brightgreen', 'red', 'yellow', 'blueviolet', 'blue'];
  const randomBadgeColor = badgeColor[Math.floor(Math.random())];
  
  if (license !== 'none') {
    return `![License](https://img.shields.io/badge/license-${license}-${randomBadgeColor})`
  } 
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  # Table of Contents
  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[contribution](#contribution)
  -[test](#test)
  -[licenses](#licenses)
  -[username](#username)
  -[profile](#profile)
  -[email](#email)

  
  ##Description:
  ${data.description}
  
  ##Installation:
  ${data.installation}
  
  ##Usage:
  ${data.usage}
  
  ##Contribution:
  ${data.contribution}
  
  ##Test:
  ${data.test}
  
  ##Licenses:
  ${renderLicenseBadge(data.license)}
  
  ##Email:
  ${data.email}
  
  ##Username:
  ${data.username}

  ##Profile:
  ${data.profile}
  
  `;
}

module.exports = generateMarkdown;
