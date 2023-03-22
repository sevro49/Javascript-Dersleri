// 1- Write the function that prints the word sent to it on the screen at the specified time
function printWord(word, counter) {
    for (let i = 0; i < counter; i++) {
        console.log(word);
    }
}
printWord("sevro49", 5);

// 2- Write a function that calculates the area and perimeter of a rectangle.
function rectangleInfo(sideA, sideB) {
    let perimeter = (sideA + sideB) * 2;
    let area = sideA * sideB;
    console.log(
        `The area of the reactangle is: ${area}\nThe perimeter of the rectangle is: ${perimeter}\n`
    );
}
rectangleInfo(4, 10);

// 3- make a coin flip function
function coinFlip() {
    let random = Math.random() * 2;

    if (random >= 1) {
        return "Heads";
    } else {
        return "Tails";
    }
}

console.log(coinFlip());
console.log(coinFlip());

// 4- Write a function that returns the divisors of a number sent to it as an array
function divisorsOfNumber(number) {
    let numbers = [];
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            numbers.push(i);
        }
    }

    console.log(numbers);
}

divisorsOfNumber(12);

// 5- define a function named sum that takes a variable number of parameters
function sum(...args) {
    let sum = 0;

    for(let arg of args){
        sum += arg;
    }
    return sum;
}

console.log(sum(4,5,10,5))