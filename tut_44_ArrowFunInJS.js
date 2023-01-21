function sum(a, b){
    return a + b;
}

//This is a arrow function
let sumA  = (a, b) =>{
    a = 2*a;
    return a + b;
}

// if in arrow fun there is only one line and whichreturns anything

let sumA = (a, b) => a + b;

console.log(sum(2, 3));  //5
console.log(sumA(2, 3)); //5


function double(n){
    return 2*n;
}

let doubleA = (n) => 2*n;
let doubleA1 = n => 2*n; // valid for one parameter

console.log(double(2));
console.log(doubleA(2));
console.log(doubleA1(2));

// Without parameter

function random(){
    return Math.random();
}

let randomA = () => {
    return Math.random();
}

console.log(randomA());


//Anonymous Functions

document.addEventListener('click', function(){
    console.log("clicked...");
});

// same one using arrow

document.addEventListener('click', () => {
    console.log("Clicked in Arrow fun");
})