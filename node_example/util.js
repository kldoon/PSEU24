const DEFAULT_WIDTH = 20;
const MESSAGE = "Welcome to NodeJS";

const drawLine = (width = DEFAULT_WIDTH) => {
    let str = "";
    for (let i = 0; i < width; i++) {
        str += "_*";
    }
    console.log(str);
}

// export const drawHeader = (msg) => {

const drawHeader = (msg) => {
    drawLine(DEFAULT_WIDTH);
    console.log(`***     ${msg}     ***`);
    drawLine(DEFAULT_WIDTH);
}

export default {
    drawLine,
    drawHeader,
    DEFAULT_WIDTH,
    MESSAGE
}

// export default MESSAGE;