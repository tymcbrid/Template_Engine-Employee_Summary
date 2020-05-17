const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


const employees = [];

const newEmployee = [
    {
        type: "list",
        name: "addPrompt",
        message: "Would you like to add another employee?",
        choices: ["Yes", "No"]
    }
]
const employeeType = [
    {
        type: "list",
        name: "selectType",
        message: "Please select select the role of the new employee",
        choices: ["Manager", "Engineer", "Intern", "Nevermind"]
    }
]
const newManager = [
    {
        type: "input",
        name: "managerName",
        message: "Please enter the manager's name",
     },
     {
        type: "input",
        name: "managerID",
        message: "Please enter the manager's employee ID number"
     },
     {
        type: "input",
        name: "managerEmail",
        message: "Please enter the manager's email address"
     },
     {
        type: "input",
        name: "managerPhone",
        message: "Please enter the manager's office phone number"
     }
]
const newEngineer = [
    {
        type: "input",
        name: "engineerName",
        message: "Please enter the new engineer's name",
     },
     {
        type: "input",
        name: "engineerID",
        message: "Please enter the new engineer's employee ID number"
     },
     {
        type: "input",
        name: "engineerEmail",
        message: "Please enter the new engineer's email"
     },
     {
        type: "input",
        name: "engineerGitHubID",
        message: "Please enter the new engineer's GitHub username"
     }
]
const newIntern = [
    {
        type: "input",
        name: "internName",
        message: "Please enter the new intern's name",
     },
     {
        type: "input",
        name: "internID",
        message: "Please enter the new intern's employee ID number"
     },
     {
        type: "input",
        name: "internEmail",
        message: "Please enter the new intern's email"
     },
     {
        type: "input",
        name: "interngithubID",
        message: "Please enter the new intern's GitHub username"
     },
     {
        type: "input",
        name: "internSchool",
        message: "Please enter the new intern's school"
     }
]

function addManager() {
    inquirer
        .prompt(newManager).then(data => {
        let manager = new Manager(data.managerName, data.managerID, this.email = data.managerEmail, data.managerPhone)
        employees.push(manager);
        addAnother();
    })
}

function addEngineer() {
    inquirer
        .prompt(newEngineer).then(data => {
        let engineer = new Engineer(data.engineerName, data.engineerID, this.email = data.engineerEmail, data.engineerPhone)
        employees.push(engineer);
        addAnother();
    })
}

function addIntern() {
    inquirer
        .prompt(newIntern).then(data => {
        let intern = new Intern(data.internName, data.internID, this.email = data.internEmail, data.internPhone)
        employees.push(intern);
        addAnother();
    })
}

function addEmployee() {
    inquirer
        .prompt(employeeType).then(data => {
       if(data.selectType == "Manager") {
        addManager();
       }
       else if (data.selectType == "Engineer"){
        addEngineer();
       }
       else if (data.selectType == "Intern"){
        addIntern();
      }   
      else if (data.selectType == "Nevermind"){
        // ????
      }  
    //    else {
    //        throw err;
    //    }
    })
}

function addAnother() {
    inquirer
        .prompt(newEmployee).then(data => {
       if(data.addPrompt == "Yes") {
        addEmployee();
       }
       else{
       console.log("no more new employee");
       }
    })
}


addManager();


