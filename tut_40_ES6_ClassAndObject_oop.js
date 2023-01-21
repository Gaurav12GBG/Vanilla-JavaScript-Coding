class Person{

    static sProperty = "my name is s property";

    constructor(n, a){
        this.name = n;
        this.age = a;
    }

    newMeth(){
        console.log(this.name);
        console.log(this.age);
    }

    static changeAge(){
        console.log("Your age is changed successfully");
    }
}

let p1 = new Person("Gaurav", 30);
p1.newMeth();
Person.changeAge();   // -----> Static method always call using the class, Using object it is not call

console.log(p1.sProperty); //--> It is not show the value only show undefined if access using object

console.log(Person.sProperty);
console.log(p1);