const INITIAL = [
    {
        name: "Ahmad",
        age: 20,
        isGraduated: false,
        city: "Dura",
    },
    {
        name: "Hiba",
        age: 18,
        isGraduated: false,
        city: "Hebron",
    },
    {
        name: "Saeed",
        age: 25,
        isGraduated: true,
        city: "Nablus",
    }
];

let students = [];

const arr = localStorage.getItem("students");
if (arr) {
    students = JSON.parse(arr);
    if (students.length === 0) {
        students = INITIAL;
    }
} else {
    students = INITIAL;
}

const printReport = (studentObject) => {
    const msg2 = `The student is ${studentObject.name} and he is ${studentObject.age} years old,
he is from ${studentObject.city} and he is${studentObject.isGraduated ? '' : ' not'} graduated<br/>`;
    document.write(msg2);
}

alert("Welcome to the nothing app!");
let userName = localStorage.getItem("user");

if (!userName) {
    userName = window.prompt("Please enter your name") || "No Name";  // Login user
}

localStorage.setItem("user", userName);
document.write(`Hello ${userName}<br/>`);
document.write(`<br/>List of students:<br/>`);
students.forEach(std => {
    printReport(std);
})

const answer = confirm("Do you want to delete the last student?");
if (answer) {
    students.pop();
}
localStorage.setItem("students", JSON.stringify(students));

// console.log(JSON.stringify(students, null, 2));
// console.log(JSON.stringify(students, null, 2));



// JSON
/*
    const a={
        "name":"Ahmad"
    }
*/
// JavaScript Object
/*
const a={
    name:"Ahmad"
}
*/