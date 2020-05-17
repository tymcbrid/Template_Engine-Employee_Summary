const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, githubID, school){
        super(name, id, email);
        this.githubID = githubID;
        this.school = school;
    }
    getGithub(){
        return this.githubID;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;
