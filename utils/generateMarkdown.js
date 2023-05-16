// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\n
  ## Description\n
  ${data.description}\n\n
  ## Table of Contents\n
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [Contributing](#contributing)\n
  - [Tests](#tests)\n
  - [Credits](#credits)\n
  - [License](#license)\n
  - [Questions](#questions)\n\n
  ## Installation\n
  ${data.installation}\n\n
  ## Usage\n
  ${data.usage}\n
  [Click here for the Live Site](${data.livesite})\n\n
  ## Contributing\n
  ${data.contributions}\n\n
  ## Tests\n
  ${data.tests}\n\n
  ## Credits\n
  ${data.credits}\n\n
  ## License\n
  ${data.license}\n\n
  ## Questions?\n
  For any questions, please click on my email provided below and visit my Github:\n
  - [Email me here](mailto:${data.email})\n
  - [Click here for my Github](https://github.com/${data.github}/)
`;
}

module.exports = {generateMarkdown};
