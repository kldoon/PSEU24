let x: number = 10;  // explicit declaration
x = 15;
const y = x * 5;
let name1: string, name2: string;
name1 = "Ahmad";
name2 = " Saeed";

const fullName = name1 + name2;  // Implicit declaration

console.log(y)
console.log(fullName)
// string, number, boolean, undefined, null, any

const getAverage = (mark1: number, mark2: number, name: string): string => {
    const avg = (mark1 + mark2) / 2;
    if (avg >= 60) {
        return name + " has passed with mark: " + avg;
    } else {
        return name + " has failed with mark: " + avg;
    }
}

const msg = getAverage(90, 78, "Saeed");
console.log(msg);

let v: string | number;

v = "Hello";
v = 20;

const student: { name: string, gpa: number, isGraduted: boolean } = { name: "Ahmad", gpa: 90, isGraduted: false };

console.log(student);

interface IStudent {
    name: string;
    gpa: number;
    isGraduted: boolean;
    major?: string;  //Optional
    hasPassed?: (gpa: number) => boolean;
}

const isPassed = (gpa: number) => gpa >= 60;

const std1: IStudent = {
    name: "",
    gpa: 90,
    isGraduted: false,
    hasPassed: isPassed
}

console.log(std1);

// const students: IStudent[] = [];
const students: Array<IStudent> = [];

students.push({
    name: "Saeed",
    gpa: 80,
    isGraduted: true
});

students.push(std1);
students.push(student);