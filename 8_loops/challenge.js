let numbers = [1, 5, 7, 15, 3, 25];

// 1- find square of every element in numbers
// for (let i in numbers){
//     console.log(numbers[i] * numbers[i]);
// }

// 2- which elements in the array of numbers are multiple of 5?
// for (let num of numbers){
//     if (num % 5 == 0){
//         console.log(num);
//     }
// }

// 3- find the sum of even numbers in  the sequence of numbers
// sum = 0;
// for (let num of numbers) {
//     if (num % 2 == 0) {
//         sum += num;
//     }
// }
// console.log(sum);

let products = ["iPhone 12", "Samsung S22", "iPhone 13", "Samsung S23"];

// 4- print the elements uppercase in product array
// for(let item in products)
// {
//     console.log(products[item].toUpperCase());
// }

// 5- How many products contain the word Samsung in the products array
// result = true;
// for (let item in products) {
//     if (result = products[item].includes("Samsung")){
//         console.log(products[item]);
//     }
// }

let students = [
    { student_name: "Yigit", surname: "Bilgi", grade: [60, 70, 60] },
    { student_name: "Ada", surname: "Bilgi", grade: [80, 70, 80] },
    { student_name: "Cinar", surname: "Turan", grade: [70, 70, 60] },
];

// 6- print avg grade of each student in students object
// for (let i in students){
//     let avg = ((students[i].grade[0] + students[i].grade[1] + students[i].grade[2]) / 3).toFixed(2);
//     console.log(`${students[i].student_name}: ${avg}`);
// }

// 7- What is the grade point average of all students?
let avg_for_all  = 0;
for (let i in students){
    let avg = ((students[i].grade[0] + students[i].grade[1] + students[i].grade[2]) / 3);
    avg_for_all += (avg / 3);
}
console.log(`Total avg: ${avg_for_all.toFixed(2)}`);
