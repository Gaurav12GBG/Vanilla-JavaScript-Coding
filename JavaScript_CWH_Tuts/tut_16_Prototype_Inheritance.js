console.log("Welcome to tut16.js");

// Before ES6

let proto = {
    slogan : function(){
        return "This company is the best"
    },
    changeName : function(newName){
        this.name = newName;
    }
}

//Here I have created obj1
let obj1 = Object.create(proto);
obj1.name = "Gaurav";
obj1.role = "Software Developer";

// This also creates obj1
obj1 = Object.create(proto, {
    name : {value: "Gaurav", writable : true},
    role : {value : "Software Developer"}
});

console.log(obj1);
// console.log(obj1.slogan());

//Employee Constructor

function Employee(name, salary, experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

//Slogan
Employee.prototype.slogan = function(){
    return `This company is the best. Regards ${this.name}`;
}

let emp = new Employee("Gaurav", 30000, "2 Year");
console.log(emp.slogan());


//Programmer

function Programmer(name, salary, experience, language){
    Employee.call(this, name, salary, experience);
    this.language = language;
}

//Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

//Manually set the constructor
Programmer.prototype.constructor = Programmer;

let pgr = new Programmer("Dinesh", 25000, "Fresher", "Javascript");
console.log(pgr);
console.log(pgr.slogan());