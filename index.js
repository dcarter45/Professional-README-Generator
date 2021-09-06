const handlebars = require('handlebars');
const inquirer = require('inquirer');
const fs = require('fs')

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your projects name?:',
        name: 'projectName'
    }
    ,
    {
        type: 'input',
        message: 'Please write a short description of your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What is your Github username?:',
        name: 'githubUsername'
    },
    {
        type: 'input',
        message: 'What is your email address?:',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What kind of license should your project have?:',
        name: 'licenseType'
    },
    {
        type: 'input',
        message: 'What command should you run to install dependencies?:',
        name: 'install'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?:',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?:',
        name: 'contributing'
    }
]).then((answers) => {
    console.log(answers);

    // Compile the source code
    fs.readFile('README.handlebars', 'utf8', (err, templateText) => {
        if (err) {
            throw err;
        }
        console.log(typeof templateText);
        const template = handlebars.compile(templateText);
        let readmeText = template(answers);
        console.log(readmeText);
        fs.writeFile('ReadMe.md', readmeText, (err) =>
        err ? console.error(err) : console.log('Success!')
        );
    })

})