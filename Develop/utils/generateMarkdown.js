function generateMarkdown(data) {
  return `
# ${data.title}



![license](https://img.shields.io/badge/license-${data.license}-ORANGE)

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
