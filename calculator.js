const display = document.querySelector('.display')
const selected = document.querySelector('.selected');
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
function selectedOperatorCheck() {
    if (selected.innerHTML === "+" || selected.innerHTML === "-" || selected.innerHTML === "x" || selected.innerHTML === "/" ||selected.innerHTML === "%") {
        selected.innerHTML = "";
    }
}

function populateDisplay(a) {
    console.log([currentNum, storedNum]);
    selected.innerHTML = selected.innerHTML + a;

    display.innerHTML += a;
}

function replaceDisplay(a) {
    selected.innerHTML = a;

    display.innerHTML += a;
}

function resolvePrevious() {
    if (currentOperator === "+" || currentOperator === "-" || currentOperator === "x" || currentOperator === "/" || currentOperator === "%") {
        currentNum = parseFloat(selected.innerHTML);
        let total = operate(storedNum, currentNum, currentOperator)
        currentNum = total;
        display.innerHTML = "";
        currentOperator = "";
        replaceDisplay(total);
    }   
}
let currentNum = 0; 
let storedNum = 0;
let currentOperator = "";

zero.addEventListener("click", () => {
    selectedOperatorCheck();
    populateDisplay('0');
    return currentNum;
});
one.addEventListener("click", () => {
    selectedOperatorCheck();
    populateDisplay('1');
    return currentNum;
});
two.addEventListener("click", () => {
    selectedOperatorCheck();
    populateDisplay('2');
    return currentNum;
});
three.addEventListener("click", () => {
    selectedOperatorCheck();
    populateDisplay('3');
    return currentNum;
});
four.addEventListener("click", () => {
    selectedOperatorCheck();
    populateDisplay('4');
    return currentNum;
});
five.addEventListener("click", () => {
    selectedOperatorCheck();
    populateDisplay('5');
    return currentNum;
});
six.addEventListener("click", () => {
    selectedOperatorCheck();
    populateDisplay('6');
    return currentNum;
});
seven.addEventListener("click", () => {
    selectedOperatorCheck();
    populateDisplay('7');
    return currentNum;
});
eight.addEventListener("click", () => {
    selectedOperatorCheck();
    populateDisplay('8');
    return currentNum;
});
nine.addEventListener("click", () => {
    selectedOperatorCheck();
    populateDisplay('9');
    return currentNum;
});
floating.addEventListener("click", () => {
    selectedOperatorCheck();
    populateDisplay('.');
    return currentNum
})

plus.addEventListener("click", () => {
    resolvePrevious();
    currentOperator = '+';
    currentNum = parseFloat(selected.innerHTML);
    storedNum = currentNum;
    replaceDisplay('+');
    return currentOperator;
})
minus.addEventListener("click", () => {
    resolvePrevious();
    currentOperator = '-';
    currentNum = parseFloat(selected.innerHTML);
    storedNum = currentNum;
    replaceDisplay('-');
    return currentOperator;
})
times.addEventListener("click", () => {
    resolvePrevious();
    currentOperator = 'x';
    currentNum = parseFloat(selected.innerHTML);
    storedNum = currentNum;
    replaceDisplay('x');
    return currentOperator;
})
divisor.addEventListener("click", () => {
    resolvePrevious();
    currentOperator = '/';
    currentNum = parseFloat(selected.innerHTML);
    storedNum = currentNum;
    replaceDisplay('/');
    return currentOperator;
})
percentage.addEventListener("click", () => {
    resolvePrevious();
    currentOperator = 'x';
    currentNum = parseFloat(selected.innerHTML) / 100;
    storedNum = currentNum;
    replaceDisplay('%');
    return currentOperator;
})
equal.addEventListener("click", () => {
    currentNum = parseFloat(selected.innerHTML);
    let total = operate(storedNum, currentNum, currentOperator);
    currentNum = total;
    display.innerHTML = "";
    currentOperator = "";
    replaceDisplay(total);

})

clear.addEventListener("click", () => {
    selected.innerHTML = "";
    display.innerHTML = "";
    currentNum = 0;
    storedNum = 0;
    currentOperator = 0;
})
del.addEventListener("click", () => {
    selected.innerHTML = "";
})
