var c = document.getElementById("board");
var ctx = c.getContext("2d");

const radius = 40;
let cX = 40, cY = 40, speedX = 5, speedY = 5;

const drawCircle = () => {
    ctx.beginPath();
    ctx.arc(cX, cY, radius, 0, Math.PI * 2);
    ctx.stroke();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const draw = () => {
    ctx.clearRect(0, 0, c.width, c.height);
    if (cX + speedX + radius <= c.width) {
        cX += speedX;
    }
    if (cY + speedY + radius <= c.height) {
        cY += speedY;
    }

    // if ((cX + speedX + radius <= c.width && cY + speedY + radius <= c.height) && (cX + speedX - radius >= 0 && cY + speedY - radius >= 0)) {
    if (cX + speedX + radius > c.width) {
        speedX *= -1 + getRandomInt(5);
    }

    if (cX + speedX - radius < 0) {
        speedX *= -1 + getRandomInt(5);
    }

    if (cY + speedY - radius > c.height) {
        speedY *= -1 + getRandomInt(5);
    }

    if (cY + speedY - radius < 0) {
        speedY *= -1 + getRandomInt(5);
    }

    drawCircle();
    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
