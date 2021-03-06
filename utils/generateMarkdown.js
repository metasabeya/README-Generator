// function to generate markdown for README
function generateMarkdown(data) {
  return `# project title: ${data.title}
  
  
#  Table of contents  
- # [Description](#description)
- # [Usage](#usage)
- # [Contributor](#contributor)
- # [Test](#test)
- # [Credits](#credits)
- # [License](#License)
- # [Badge](#badge)
- # [Email](#email)
- # [Picture](#picture)
- # [Questions](#questions)

## Description:
![license](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")

  ${data.description}
## Installation:
  ${data.installation}
## Contributor:
  ${data.contributor}
## Test:
${data.test}
## Credits:
${data.credits}
## License:

-For more Detail, please click the link. 

[license](https://opensource.org/license/${data.license})

## Badge:

![badmath](https://img.shields.io/github/repo-font/${data.username}/${data.title})

## Picture:
[profile picture](${data.picture})

## Questions:
for questions about the generator you can go to my GitHub page using the next link provided

-[Github Profile](https://github.com/metasabeya)


if you have any questions feel free to contact me via my email address use link below:

[email address](${data.email}).


`;
 }
//function to initialize program






module.exports = generateMarkdown;
