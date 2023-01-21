
// let person = {
//     firstname : "Gaurav",
//     lastname : "Gangurde"
// };

person.sayHello = function(){
    console.log("Hello");
}

function greet(){
    console.log("Hello !!!!");
}

person.sayHello = greet;

person.sayHello();