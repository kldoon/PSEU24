const n1Ele = document.getElementById("n1");
const n2Ele = document.getElementById("n2");
const resEle = document.getElementById("result");

const readValues = () => {
    const n1 = Number(n1Ele.value);
    const n2 = Number(n2Ele.value);
    return [n1, n2];
}

const sum = () => {
    const [n1, n2] = readValues();
    const result = n1 + n2;
    resEle.innerText = "= " + result;
    resEle.style.backgroundColor = 'green';
    // resEle.classList.add('bordered');
    resEle.classList.toggle('bordered');
    resEle.addEventListener("mouseover", print);
}

const sub = () => {
    const [n1, n2] = readValues();
    const result = n1 - n2;
    resEle.innerText = "= " + result;
    resEle.style.backgroundColor = 'yellow';
    resEle.removeEventListener("mouseover", print);
}

const mult = () => {
    const [n1, n2] = readValues();
    const result = n1 * n2;
    resEle.innerText = "= " + result;
    resEle.style.backgroundColor = 'purple';
}

const div = () => {
    const [n1, n2] = readValues();
    const result = n1 / n2;
    resEle.innerText = "= " + result;
    resEle.style.backgroundColor = 'grey';
}

const print = () => {
    console.log("Hello " + Date.now());
}

// const calc = (e) => {
//     e.preventDefault();

//     const n1 = Number(e.target["n1"].value)
//     const n2 = Number(e.target["n2"].value)
//     const op = e.submitter.id;
//     let res;
//     switch (op) {
//         case "+":
//             res = n1 + n2
//             break;
//         case "-":
//             res = n1 - n2
//             break;
//         case "*":
//             res = n1 * n2
//             break;
//         case "/":
//             res = n1 / n2
//             break;
//     }

//     console.log("Results form Calc:" + res);
// }
