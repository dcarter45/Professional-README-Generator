const inquirer = require('inquirer');
const fs= require('fs')

inquirer.prompt([
    {
        type: 'input',
        messgae: 'What is your Github username',
        name: 'Github Username'
    },
    {
        type: 'input',
        messgae: 'What is your email address',
        name: 'email'
    },
    {
        type: 'input',
        messgae: 'What is your projects name',
        name: 'project name'
    }
    ,
    {
        type: 'input',
        messgae: 'Please write a short description of your project',
        name: 'description'
    },
    {
        type: 'input',
        messgae: 'What kind of licesnse should your project have',
        name: 'license type'
    },
    {
        type: 'input',
        messgae: 'What command should you run to install dependencies',
        name: 'install'
    },
    {
        type: 'input',
        messgae: 'What command should be run to run tests',
        name: ' test'
    },
    {
        type: 'input',
        messgae: 'What does the user need to know about using the repo',
        name: 'usage'
    },
    {
        type: 'input',
        messgae: 'What does the user need to know about contributing to the repo',
        name: 'contributing'
    }
])