const screen = document.querySelector('.screen');
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return b - a;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b
}

function operate(a, b, operator) {
    switch(operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;

    }
}

function buttonZero() {
    let currentNum = 0;
    populateDisplay('0');
    return currentNum;
}
function buttonOne() {
    let currentNum = 1;
    populateDisplay('1');
    return currentNum;
}
function buttonTwo() {
    let currentNum = 2;
    populateDisplay('2');
    return currentNum;
}
function buttonThree() {
    let currentNum = 3;
    populateDisplay('3');
    return currentNum;
}
function buttonFour() {
    let currentNum = 4;
    populateDisplay('4');
    return currentNum;
}
function buttonFive() {
    let currentNum = 5;
    populateDisplay('5');
    return currentNum;
}
function buttonSix() {
    let currentNum = 6;
    populateDisplay('6');
    return currentNum;
}
function buttonSeven() {
    let currentNum = 7;
    populateDisplay('7');
    return currentNum;
}
function buttonEight() {
    let currentNum = 8;
    populateDisplay('8');
    return currentNum;
}
function buttonNine() {
    let currentNum = 9;
    populateDisplay('9');
    return currentNum;
}

function populateDisplay(a) {
    console.log(a);
    screen.innerHTML = a;
}

zero.addEventListener("click", buttonZero);
one.addEventListener("click", buttonOne);
two.addEventListener("click", buttonTwo);
three.addEventListener("click", buttonThree);
four.addEventListener("click", buttonFour);
five.addEventListener("click", buttonFive);
six.addEventListener("click", buttonSix);
seven.addEventListener("click", buttonSeven);
eight.addEventListener("click", buttonEight);
nine.addEventListener("click", buttonNine);
