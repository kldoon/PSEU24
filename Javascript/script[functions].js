// const sum = function (n1, n2) {
function sum(n1, n2) {
    const sum = n1 + n2;
    return sum;
}

const result = sum(10, 20); //call

console.log(result);
console.log(result + "");
// document.write(result);

const divide = (n1, n2) => {
    if (n2 !== 0) return n1 / n2;
    return 'NAN';
}

const divideV2 = (n1, n2) => n2 !== 0 ? n1 / n2 : 'NAN';

const square = (num) => {
    return num * num;
}
const squareV2 = num => {
    return num * num;
}
const squareV3 = num => (num * num);
const squareV4 = num => num * num;

const printStarts = () => { console.log("*******") };
const result2 = divide(10, 20);

const func = () => ({ foo: 1 });
