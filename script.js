document.querySelector(".cube-container").addEventListener("click", () => {
    if (event.target.classList.contains('cube')) {
        if (event.target.classList.contains('blue')) {
            event.target.classList.add('red');
            event.target.classList.remove('blue');
        }
        else {
            event.target.classList.add('blue');
            event.target.classList.remove('red');
        }
    }
});

const orb = document.querySelector(".orb");

orb.addEventListener("mouseover", colorChange);

orb.addEventListener("mouseout", colorChange);

function colorChange() {
    let color = event.target.style.backgroundColor;
    if (color === 'gold')
        event.target.style.backgroundColor = "blueviolet";
    else
        event.target.style.backgroundColor = "gold";
}

const circle = document.querySelector(".circle div");

circle.addEventListener("mousemove", circleAnimation);
let sign;

function circleAnimation() {
    let size;
    if (event.target.clientWidth === 190)
        sign = '-';
    else if (event.target.clientWidth === 20)
        sign = '+';

    if (sign === '-')
        size = event.target.clientWidth - 5;
    else
        size = event.target.clientWidth + 5;
    
    event.target.style.width = `${size}px`;
    event.target.style.height = `${size}px`;
}

const triangle = document.querySelector(".triangle");
const triangleRotate = triangleAnimation(triangle);
document.addEventListener("wheel", triangleRotate);

function triangleAnimation(triangle) {
    let degree = 0;
    return function () {
        event.preventDefault();
        triangle.style.transform = `rotate(${degree++}deg)`;
    }
}

const button = document.querySelector('button');

button.addEventListener("focus", () => {
    triangle.style.borderBottomColor = "red";
})