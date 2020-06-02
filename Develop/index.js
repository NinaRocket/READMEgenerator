const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);


const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: "contents",
        message: "Please input the table of contents for your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What installations are needed for your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is your project used for?"
    },
    {
        type: "input",
        name: "license",
        message: "Please provide any licenses."
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Provide an example of how to run tests for your project."
    },

];

function promptUser() {
    return inquirer.prompt(questions);
}

function writeToFile(fileName, data) {
}


async function init() {

    try {
        const answers = await promptUser();
        const markdown = generateMarkdown(answers);

        await writeFileAsync("README.md", markdown);

        console.log("Successfully wrote to README.md");

    } catch (err) {
        console.log(err);
    }

};

init();
