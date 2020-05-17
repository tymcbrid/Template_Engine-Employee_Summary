const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, githubID){
        super(name, id, email);
        this.githubID = githubID;
    }
    getGitHub(){
        return this.githubID;
    }
}


module.exports = Engineer;
