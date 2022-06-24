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
const numbers = document.getElementsByClassName('numbers');

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const times = document.getElementById('times');
const divisor = document.getElementById('divide');
const equal = document.getElementById('equal');


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

function populateDisplay(a) {
    console.log(a);
    screen.innerHTML = a;
}

zero.addEventListener("click", () => {
    let currentNum = 0;
    populateDisplay('0');
    return currentNum;
});
one.addEventListener("click", () => {
    let currentNum = 1;
    populateDisplay('1');
    return currentNum;
});
two.addEventListener("click", () => {
    let currentNum = 2;
    populateDisplay('2');
    return currentNum;
});
three.addEventListener("click", () => {
    let currentNum = 3;
    populateDisplay('3');
    return currentNum;
});
four.addEventListener("click", () => {
    let currentNum = 4;
    populateDisplay('4');
    return currentNum;
});
five.addEventListener("click", () => {
    let currentNum = 5;
    populateDisplay('5');
    return currentNum;
});
six.addEventListener("click", () => {
    let currentNum = 6;
    populateDisplay('6');
    return currentNum;
});
seven.addEventListener("click", () => {
    let currentNum = 7;
    populateDisplay('7');
    return currentNum;
});
eight.addEventListener("click", () => {
    let currentNum = 8;
    populateDisplay('8');
    return currentNum;
});
nine.addEventListener("click", () => {
    let currentNum = 9;
    populateDisplay('9');
    return currentNum;
});

plus.addEventListener("click", () => {
    let currentOperator = '+';
    return currentOperator;
})
minus.addEventListener("click", () => {
    let currentOperator = '-';
    return currentOperator;
})
times.addEventListener("click", () => {
    let currentOperator = 'x';
    return currentOperator;
})
divisor.addEventListener("click", () => {
    let currentOperator = '/';
    return currentOperator;
})

equal.addEventListener("click", () => {

})