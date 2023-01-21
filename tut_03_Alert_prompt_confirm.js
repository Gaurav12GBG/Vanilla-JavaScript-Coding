//Function to interact with the user : alert, prompt and confirm.

/* 
1. alert() --> Show a message.

2. prompt() --> show a message, input text. It returns the text on ok or, if cancle button or Esc is clicked, null.

3. confirm() -->  show a message, confirm with "ok" or "cancle". It returns true for ok and false for cancle/Esc.
*/

//All these pause script execution and dont allow the visitor to intereact with the rest of the page until the window has been dismissed.


// alert("Hi, Welcome man")

/* let age = prompt("Enter your age");

if (age != null){
    document.write("Hi, Your age is "+ age);
}
else{
    document.write("Age field is blank");
} */

let response = confirm("Do u want to delete it")

if(response){
    document.write("Deleted")
}
else{
    document.write("Not Deleted")
}

