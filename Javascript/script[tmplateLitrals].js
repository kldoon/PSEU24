const userName = "Ahmad";
const age = 20;
const isGraduated = false;
const city = "Dura";

let msg = "";

/* The student is [Ahmad] and he is [20] years old,
he is from [dura] and he is [Not graduated]
*/

msg = "The student is " + userName + " and he is "
    + age.toString() + "  years old,\nHe is from " + city + " and he is ";
if (!isGraduated) {
    msg += "not ";
}
msg += "graduated";

console.log(msg);

const msg2 = `The student is ${userName} and he is ${age} years old,
he is from ${city} and he is${isGraduated ? '' : ' not'} graduated`;

console.log(msg2);
