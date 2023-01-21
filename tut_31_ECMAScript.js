/* 
What is ES6?

ES6 comings with the big changes till next level. So it is most important...

Features ADDED in ES6:
1. Two new keyword added : let, const
2. Default parameters
3. Rest parameters
4. Spread Operator
5. Template Literals
6. Array Distructuring
7. Object Distructuring
8. Modules
9. OOPS
10. Arrow Function



*/

var count = 1;  // it behaves or considered or becomes the global object properties

console.log(window.count);

let  count = 1; // Not accept global properties

const count = 1;  // thios value can not be change


var count = 10;
var count;    // Does not show the error

let count = 10;
let count; // Show the error warning count has been already declared!


const count = 1;
count = 2;// shows an error because const does not change

console.log(count);