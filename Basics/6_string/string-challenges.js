let url = "https://github.com/sevro49";
let myName = "Emre Güler";

// 1- how many characters are in the url
let result = url.length;

// 2- How many words does the name consist of?
result = myName.split(" ").length;

// 3-Does the url start with https?
result = url.startsWith("https")

// 4- Merge url and myName

myName = myName.toLowerCase();
myName = myName.replaceAll(" ","-");
myName = myName.replaceAll("ü","u");
result = `${url}/${myName}`;





console.log(result);