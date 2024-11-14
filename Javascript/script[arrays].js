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