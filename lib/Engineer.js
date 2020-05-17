const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, githubID){
        super(name, id, email);
        this.githubID = githubID;
    }
    getGithub(){
        return this.githubID;
    }
    getRole(){
        return "Engineer";
    }
}


module.exports = Engineer;
