const studentObject = {
    name: "Ahmad",
    age: 20,
    isGraduated: false,
    city: "Dura",
    printReport: () => {
        const msg2 = `The student is ${studentObject.name} and he is ${studentObject.age} years old,
he is from ${studentObject.city} and he is${studentObject.isGraduated ? '' : ' not'} graduated`;
        console.log(msg2);
    }
};

console.log(studentObject);

const studentAge = studentObject.age;  // Access object attributes using dot notation
studentObject.age = 18;
console.log(studentAge);
console.log(studentObject);
console.log(studentObject["isGraduated"]);   // access object attributes using brackets notation

studentObject.printReport();

const students = [
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

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

/*
array of
{
    name
    gpa
}

- show student with max gpa
- show student with min gpa
- show students gpa average
- print all students and if they are above or below gpa average

*/