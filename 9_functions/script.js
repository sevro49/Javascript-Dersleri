// function greetings(){
//     console.log("Hello there!");
// }

// function greetings2 (msg){
//     console.log(msg);
// }

// greetings();
// greetings2("Heeeeyyyy");

// without return
function calculateAge1(birthYear){
    console.log(new Date().getFullYear() - birthYear);
}

//return
function calculateAge2(birthYear){
    return new Date().getFullYear() - birthYear;
}


// calculateAge1(2001);
console.log(calculateAge2(2001));
let ageAhmet = calculateAge2(2003);
console.log(ageAhmet);

function howManyYearsToRetirement(birthYear, name){
    let age = calculateAge2(birthYear);
    let remaining_year = 65 - age;


    if(remaining_year > 0){
        console.log(`${name}, you have ${remaining_year} years to retire`)
    } else{
        console.log("You have allready retired")
    }
}

howManyYearsToRetirement(2001,"Emre")