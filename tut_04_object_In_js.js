
let person = {
    firstname : "Gaurav",
    lastname : "Gangurde"
};

person.age = 25;
person.firstname = "Vaishnavi";
console.log(person);
console.log(person.firstname);
console.log(person.age);

delete person.lastname;
console.log(person);

for(let key in person){
    console.log(key +": "+ person[key]);
}