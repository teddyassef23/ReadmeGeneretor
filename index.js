// Declaring the dependencies and variables
const fs = require("fs");
var inquirer = require('inquirer');
const generateReadme = require("./generat/generateReadme.js");
const README  = './DS-Stor/readme.md';

//Prompt the user questions to populate the README.md
var quistions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process if any: ",
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project usage for?"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this projects?"
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test included?"
    },
    {
        type: "input",
        name: "questions",
        message: "What do I do if I have an issue? "
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }
];




// }

function Creator() {

    inquirer
        .prompt(quistions)
        .then(async (answers) => {
            console.log(answers);
            var newAnswer = generateReadme.generateMarkdown(answers);
            if (fs.existsSync(README)){
                fs.unlinkSync(README);
            }
                   
    fs.writeFile('./DS-Stor/readme.md', newAnswer, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('success')

    });
        })
        .catch((error) => {
            if (error.isTtyError) {
                
            } else {
              
            }
        });


}

Creator();