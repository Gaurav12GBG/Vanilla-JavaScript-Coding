class Employee{
    constructor(n){
        console.log("I am a constructor of the employee class....");
        this.name = n;
    }

    msg(){
        console.log("Hello I am User!");
    }
}

class Manager extends Employee{
    constructor(p, d){
        super(p);
        this.department = d;
    }

    msg(){

        console.log("I am msg method of manager class");
    }
    

    info(){
        super.msg(); // This is a method of parent class(super)
        this.msg(); // This a method of manager class(this)
        console.log(this.name + " is a manager of the department "+ this.department);
    }
}

class Admin extends Manager{
    
}

let mng = new Manager("Gaurav", "WD");

console.log(mng);
mng.info();