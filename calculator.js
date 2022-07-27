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
const floating = document.getElementById('floating');

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const times = document.getElementById('times');
const divisor = document.getElementById('divide');
const equal = document.getElementById('equal');

const del = document.getElementById('del');
const clear = document.getElementById('clr');
const percentage = document.getElementById('percentage');


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
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
        case "x":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;

    }
}
function screenOperatorCheck() {
    if (screen.innerHTML === "+" || screen.innerHTML === "-" || screen.innerHTML === "x" || screen.innerHTML === "/" ||screen.innerHTML === "%") {
        screen.innerHTML = "";
    }
}

function populateDisplay(a) {
    console.log([currentNum, storedNum]);
    screen.innerHTML = screen.innerHTML + a;
}

function replaceDisplay(a) {
    screen.innerHTML = a;
}

let currentNum = 0; 
let storedNum = 0;
let currentOperator = "";

zero.addEventListener("click", () => {
    screenOperatorCheck();
    populateDisplay('0');
    return currentNum;
});
one.addEventListener("click", () => {
    screenOperatorCheck();
    populateDisplay('1');
    return currentNum;
});
two.addEventListener("click", () => {
    screenOperatorCheck();
    populateDisplay('2');
    return currentNum;
});
three.addEventListener("click", () => {
    screenOperatorCheck();
    populateDisplay('3');
    return currentNum;
});
four.addEventListener("click", () => {
    screenOperatorCheck();
    populateDisplay('4');
    return currentNum;
});
five.addEventListener("click", () => {
    screenOperatorCheck();
    populateDisplay('5');
    return currentNum;
});
six.addEventListener("click", () => {
    screenOperatorCheck();
    populateDisplay('6');
    return currentNum;
});
seven.addEventListener("click", () => {
    screenOperatorCheck();
    populateDisplay('7');
    return currentNum;
});
eight.addEventListener("click", () => {
    screenOperatorCheck();
    populateDisplay('8');
    return currentNum;
});
nine.addEventListener("click", () => {
    screenOperatorCheck();
    populateDisplay('9');
    return currentNum;
});
floating.addEventListener("click", () => {
    screenOperatorCheck();
    populateDisplay('.');
    return currentNum
})

plus.addEventListener("click", () => {
    currentOperator = '+';
    currentNum = parseFloat(screen.innerHTML);
    storedNum = currentNum;
    replaceDisplay('+');
    return currentOperator;
})
minus.addEventListener("click", () => {
    currentOperator = '-';
    currentNum = parseFloat(screen.innerHTML);
    storedNum = currentNum;
    replaceDisplay('-');
    return currentOperator;
})
times.addEventListener("click", () => {
    currentOperator = 'x';
    currentNum = parseFloat(screen.innerHTML);
    storedNum = currentNum;
    replaceDisplay('x');
    return currentOperator;
})
divisor.addEventListener("click", () => {
    currentOperator = '/';
    currentNum = parseFloat(screen.innerHTML);
    storedNum = currentNum;
    replaceDisplay('/');
    return currentOperator;
})
percentage.addEventListener("click", () => {
    currentOperator = 'x';
    currentNum = parseFloat(screen.innerHTML) / 100;
    storedNum = currentNum;
    replaceDisplay('%');
    return currentOperator;
})
equal.addEventListener("click", () => {
    currentNum = parseFloat(screen.innerHTML);
    let total = operate(storedNum, currentNum, currentOperator);
    currentNum = total;
    replaceDisplay(total);

})

clear.addEventListener("click", () => {
    screen.innerHTML = "";
    currentNum = 0;
    storedNum = 0;
    currentOperator = 0;
})
del.addEventListener("click", () => {
    screen.innerHTML = "";
})
