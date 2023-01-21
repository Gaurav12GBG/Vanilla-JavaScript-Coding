console.log("This is a tutorial of object prototypes...");

//Object literal

let obj1 = {
    name : "GBG",
    channel : "Code made trickers",
    address : "Chnadwad"
}

function obj(givenName){
    this.name = givenName;
}

obj.prototype.getName = function(){
    return this.name;
}

obj.prototype.setName = function(newName){
    this.name = newName;
}

let obj2 = new obj("Gaurav");
obj2.setName("Mahendra Singh Dhoni");
console.log(obj2.getName());
console.log(obj2);