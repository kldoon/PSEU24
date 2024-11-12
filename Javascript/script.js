console.log("Hello World [from file]");
// var, let, const

// int x=10;
// x = 10; // ==> var x=10;
let x = 10;
let y;
y = 20;

const z = 15;
// z = 22; // This will raise an error

const result = x + y * 2 / z % x - (x * x);
console.log(result);

// Relational operators   >   >=  <  <=  == === != !== 
// Logical operators   &&  ||   !

if (result >= 0 && x ** 2 <= 20 || !(result > 20)) {
    console.log("Positive");
} else {
    console.log('Negative');
}

if (x => 10) {
    console.log(x);
} else if (y >= 10) {
    console.log(y)
} else if (z >= 10) {
    console.log(z);
} else {
    console.log(result);
}

const result2 = x >= 10 ? 'success' : 'fail';   // Ternary operator
switch (result2) {
    case 'success': {
        console.log('heyyyy');
        break;
    }
    case "fail":
        console.log('boooo');
        break;
    default:
        break;
}
// let result2;
// if (x >= 10) {
//     result2 = 'success';
// } else {
//     result2 = 'fail';
// }

let sum = 0;
for (let i = 0; i < 1000; i++) {
    sum += i;
}
console.log(sum);

let j = 100;
let multi = 1;
while (j > 0) {
    multi *= j;
    j--;
}
console.log(multi);

// do...while

const str1 = "Hello";
const str2 = "World";
console.log(str1 + " " + str2.toUpperCase());
console.log(str1.indexOf('e'));
console.log(str1.charAt(3));
console.log(str1.concat(" my world!"));
console.log(str1.includes("ll"));
console.log(str1.length);
console.log(str1.endsWith('lo'));

document.write('Hello World');