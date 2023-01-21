console.log("Classes and Inheritance");

class Employee{
    constructor(givenName, givenExperience, givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
        
    }

    slogan(){
        return `I am ${this.name} and this company is the best.`;
    }

    joiningYear(){
        return 2019 - this.experience;
    }

    static add(a, b){
        return a+ b;
    }
}

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, givenLanguage, givenGitHub){
        super(givenName, givenExperience, givenDivision);
        this.language = givenLanguage;
        this.gitHub = givenGitHub;
    }

    favoriteLanguage(){
        if(this.language == "python"){
            return "python";
        }
        else{
            return "Javascript";
        }
    }

    static Multipy(a, b){
        return a * b;
    }
}

// let emp = new Employee("Gaurav", 2, "Division");
// console.log(emp);
// console.log(emp.slogan());
// console.log(emp.joiningYear());

// console.log(Employee.add(34, 5));

let pgr = new Programmer("Gaurav", 4, "Lays", "Go", "gaurav1233");
console.log(pgr);
console.log(pgr.favoriteLanguage());
console.log(Programmer.Multipy(4, 5));