const arr = [];
const arr2 = [1, 2, 3, 4, 5, 6, 'GPA:91', true, { x: 20 }, ['a', 'b']];
// const arr2 = new Array();
arr[0] = 'Ahmad';
arr[1] = 'Hiba';

console.log(arr);
console.log(arr2);

const x = arr2[2];

console.log(x);
// =================

const y = arr2.at(-1);
console.log(y);

const arr3 = arr2.concat(arr);

arr3.push('zzzzz');
arr3.unshift('aaaa');
console.log(arr3.pop());
const tmpAr = arr3.slice(4, 7);
arr3.splice(1, 3);
console.log(arr3.length); // length is an attribute
console.log(arr3.indexOf('Hiba'));
console.log(tmpAr);

console.log(arr3);

const arr4 = new Array(1000).fill('a', 0, 1000);
console.log(arr4);

console.log([1, 2, 11, 12, 21, 0, -1].sort((n1, n2) => n2 - n1));

const robotMidtermExamMarks = [15, 22, 17, 16, 21, 30, 42];
// const robotMidtermExamMarksAfterBonus = [];
// for (let i = 0; i < robotMidtermExamMarks.length; i++) {
//     if (robotMidtermExamMarks[i] + 5 <= 45) {
//         robotMidtermExamMarksAfterBonus[i] = robotMidtermExamMarks[i] + 5;
//     }
// }

// const addBonus = (mark) => {
//     if (mark + 5 <= 45)
//         return mark + 5;
//     else return mark;
// }

// const addBonus = mark => (mark + 5) <= 45 ? mark + 5 : mark;
// const robotMidtermExamMarksAfterBonus = robotMidtermExamMarks.map(addBonus);

// const robotMidtermExamMarksAfterBonus = robotMidtermExamMarks.map(mark => (mark + 5) <= 45 ? mark + 5 : mark);

const robotMidtermExamMarksAfterBonus = robotMidtermExamMarks.map(
    (mark, index) => (mark + 5) <= 45 ? `${index + 1}: ${mark + 5}` : `${index + 1}: ${mark}`
    // (mark, index) => (mark + 5) <= 45 ? (index + 1) + ":" + mark + 5 : (index + 1) + ":" + mark
);

console.log(robotMidtermExamMarks);
console.log(robotMidtermExamMarksAfterBonus);

// input:  ['ahmad', 'hiba', 'jad']
// output: ['0: 5', '1: 4', '2: 3']

const avg = marks => marks.reduce((acc, curr) => (acc + curr), 0) / marks.length;

const lowMarks = robotMidtermExamMarks.filter((mark, _, array) => {
    if (mark < avg(array)) {
        return true;
    } else {
        return false;
    }
});

console.log(lowMarks);


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// array.forEach(element => {
// });