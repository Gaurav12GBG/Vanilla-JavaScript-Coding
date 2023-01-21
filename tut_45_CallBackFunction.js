function sayHello()
{
    console.log("Hello...");
}

function sayHi(){
    console.log("Hi...");
}
function add(num1, num2, callback){
    console.log(num1 + num2);
    callback();
}

let a = 10;
let b= 20;

add(a, b, sayHello);
add(15, 20, sayHi);

//anonymous
add(21, 90, function(){
    console.log("I am Anonymous fun");
});