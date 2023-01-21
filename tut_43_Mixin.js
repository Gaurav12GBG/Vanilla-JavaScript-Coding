//Mixin

let Methods = {
    sayHi(){
        console.log("HIII....");
    },

    sayBye(){
        console.log("BYYYE....");
    }

};


class NewUser{
    constructor(){
        this.name = "gaurav";
    }
}

Object.assign(NewUser.prototype, Methods);  // This is a mixin concept to add the object methods into the class

let user = new NewUser();

user.sayHi();
user.sayBye();