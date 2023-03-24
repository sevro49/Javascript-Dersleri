let thisYear = new Date().getFullYear();

let stu1_name = "Ada Bilgi";
let stu1_birthYear = 2012;
let stu1_note1 = 70;
let stu1_note2 = 70;
let stu1_note3 = 80;
let stu1_age = thisYear - stu1_birthYear;
let stu1_avg = (stu1_note1 + stu1_note2 + stu1_note3) / 3;
let stu1_isPassed = stu1_avg >= 50;

let stu2_name = "Yigit Bilgi";
let stu2_birthYear = 2010;
let stu2_note1 = 40;
let stu2_note2 = 40;
let stu2_note3 = 50;
let stu2_age = thisYear - stu2_birthYear;
let stu2_avg = (stu2_note1 + stu2_note2 + stu2_note3) / 3;
let stu2_isPassed = stu2_avg >= 50;

console.log(
    "Name: " +
        stu1_name +
        "\n" +
        "Birth Year: " +
        stu1_birthYear +
        "\n" +
        "Age: " +
        stu1_age +
        "\n" +
        "Math notes:",
    stu1_note1,
    stu1_note2,
    stu1_note3,
    "\n" +
        "Average: " +
        parseInt(stu1_avg) +
        "\n" +
        "is student passed? " +
        stu1_isPassed +
        "\n"
);

console.log(
    "Name: " +
        stu2_name +
        "\n" +
        "Birth Year: " +
        stu2_birthYear +
        "\n" +
        "Age: " +
        stu2_age +
        "\n" +
        "Math notes:",
    stu2_note1,
    stu2_note2,
    stu2_note3,
    "\n" +
        "Average: " +
        parseInt(stu2_avg) +
        "\n" +
        "is student passed? " +
        stu2_isPassed +
        "\n"
);
