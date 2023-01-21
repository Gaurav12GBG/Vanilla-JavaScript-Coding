/* 
DRY : Dont Repeat Yourself

Object :
Class :
Inheritance : 

*/
// OOP before ES6 :

let person1 = {
    firstName : "Gaurav",
    'last name' : "Gangurde",  // --> Valid
    age : 22,

    fullName : function(){
        document.write(this.firstName + " " + this["last name"])
    }
}

// let person2 = {
//     firstName : ":Ram",
//     lastName : "Raghav",
//     age : 27


// }

document.write(person1.firstName);

person1.fullName();

// Declare the object

// let book = {};

let book = new Object;

book.name = "Advanced java";

book.sayHi = function(){
    alert("Hi");
}

console.log(book);

// book.sayHi();

// ES5 Class as constructor function :------------------------------------------------------------------->>>>>

function Person(fname, lname, age){
    this.fname = fname;
    this.lname = lname;
    this.age = age;

    this.sayHi = function(){
        console.log("I am method.");
    }

    this.changeAge = function(newage){
        this.age = newage;
    }
}

let p1 = new Person("Gaurav", "Gangurde", 25);
let p2 = new Person("Ram", "Verma", 25);

console.log(p1);
console.log(p2);

p1.sayHi();

p2.changeAge(85);

console.log(p2.age);