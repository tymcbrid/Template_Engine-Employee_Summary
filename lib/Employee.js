const inquirer = require("inquirer");

class Employee {
    constructor(){
        this.name = 0;
        this.id = 0;
        this.email = 0;
    }
    getName(){
        return this.name;
    }
    getID(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}


module.exports = Employee;



