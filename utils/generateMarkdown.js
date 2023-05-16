// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseList = [
    {
      name: 'none',
      label: '',
      badge: '',
      link: '',
    },
    {
      name: 'Apache License 2.0',
      label: 'License',
      badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
      link: 'https://opensource.org/licenses/Apache-2.0',
    },
    {
      name: 'GNU General Public License v3.0',
      label: 'License: GPL v3',
      badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
      link: 'https://www.gnu.org/licenses/gpl-3.0',
    },
    {
      name: 'MIT License',
      label: 'License: MIT',
      badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
      link: 'https://opensource.org/licenses/MIT',
    },
    {
      name: 'BSD 2-Clause "Simplified" License',
      label: 'License',
      badge: 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
      link: 'https://opensource.org/licenses/BSD-2-Clause',
    },
    {
      name: 'BSD 3-Clause "Simplified" License',
      label: 'License',
      badge: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
      link: 'https://opensource.org/licenses/BSD-3-Clause)',
    },
    {
      name: 'Boost Software License 1.0',
      label: 'License',
      badge: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
      link: 'https://www.boost.org/LICENSE_1_0.txt',
    },
    {
      name: 'Creative Commons Zero v1.0 Universal',
      label: 'License: CC0-1.0',
      badge: 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)',
      link: 'http://creativecommons.org/publicdomain/zero/1.0/',
    },
    {
      name: 'Eclipse Public License 1.0',
      label: 'License',
      badge: 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
      link: 'https://opensource.org/licenses/EPL-1.0',
    },
    {
      name: 'GNU Affero General Public License v3.0',
      label: 'License: GPL v3',
      badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
      link: 'https://www.gnu.org/licenses/gpl-3.0',
    },
    {
      name: 'GNU General Public License v2.0',
      label: 'License: GPL v2',
      badge: 'https://img.shields.io/badge/License-GPL_v2-blue.svg',
      link: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
    },
    {
      name: 'GNU Lesser General Public License v3.0',
      label: 'License: LGPL v3',
      badge: 'https://img.shields.io/badge/License-LGPL_v3-blue.svg',
      link: 'https://www.gnu.org/licenses/lgpl-3.0',
    },
    {
      name: 'Mozilla Public License 2.0',
      label: 'License: MPL 2.0',
      badge: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
      link: 'https://opensource.org/licenses/MPL-2.0',
    },
    {
      name: 'The Unlicense',
      label: 'License: Unlicense',
      badge: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
      link: 'http://unlicense.org/',
    },
  ]
  for(list of licenseList){
    if(license === list.name){
      return list;
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, licenseLabel, licenseBadge, licenseLink) {
  return `# ${data.title}\n
  [![${licenseLabel}](${licenseBadge})](${licenseLink})
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
  [${data.license}](${licenseLink})\n\n
  ## Questions?\n
  For any questions, please click on my email provided below and visit my Github:\n
  - [Email me here](mailto:${data.email})\n
  - [Click here for my Github](https://github.com/${data.github}/)
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge
};
