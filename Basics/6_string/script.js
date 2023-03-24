let name = "Emre";
let surname = "Güler";
let age = 22;

//backtick

let message = `My name is ${name} surname is ${surname}. I am ${age} years old`;
console.log(message);

//ternany operators
let retirement = (65 - age > 0) ? "you have " + (65 - age) + " years to retire" : "You have allready retired";
message = `My name is ${name} surname is ${surname}. I am ${age} years old. ${retirement}`;
console.log(message);
