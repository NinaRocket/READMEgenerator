function generateMarkdown(data) {
  return `
# ${data.title}

// [![npm version](http://img.shields.io/npm/v/REPO.svg?style=flat)](https://npmjs.org/package/REPO "View this project on npm")

// https://img.shields.io/badge/installation-${data.installation}-ORANGE

##Description
${data.description}

##Table of Contents
${data.contents}

##Installation
${data.installation}

##Usage
${data.usage}

##Licenses
${data.license}

##Contributors
${data.contributors}

##Tests
${data.tests}

`;
}

module.exports = generateMarkdown;
