const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, githubID, school){
        super(name, id, email);
        this.githubID = githubID;
        this.school = school;
    }
    getGitHub(){
        return this.githubID;
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;
