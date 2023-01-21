class Emp{
    #name = ""; // set as private property using # symbol
    constructor(n){
        this.#name = n;
    }

    getName(){
        console.log(this.#name);
    }

    #getAge(){
        console.log("My name is "+ this.#name);
    }

    executePrivateMeth(){
        this.#getAge();
    }
}

let emp = new Emp("Gaurav");

emp.getName();
// emp.getAge(); --> Not Accessible due to the private method

emp.executePrivateMeth(); // --> in this way we can access it

// console.log(emp.#name); ---> not Accessible due to private member
