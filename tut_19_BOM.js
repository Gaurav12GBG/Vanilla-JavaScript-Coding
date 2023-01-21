
/* 
BOM : Browser Object Model

It is used to intereact with the browser.
The window object represent a window in a browser.

All global javascript function, object and variable with the var keyword automatically become members of the window object.
Global variable are properties of the window objetc.
Global function are method of the window object.

window is a default object of the browser.
*/

var x = "hello...";
console.log(window.x);

function xyz(){
    alert("Hi");
}

window.xyz();

window.alert("window");