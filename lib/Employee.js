const inquirer = require("inquirer");

class Employee {

    constructor(){
        this.role = 0;
        this.email = 0;
        this.id = 0;
    }

    getInfo(){
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "confirmRole",
                    message: "Please select your role",
                    choices: ["Manager", "Engineer", "Intern"]
                 },
                 {
                    type: "input",
                    name: "emailInput",
                    message: "Please enter your email address"
                 },
                 {
                    type: "input",
                    name: "idInput",
                    message: "Please enter your employee ID number"
                 }
        ])
    }




}

const tyler = new Employee();
tyler.getInfo();