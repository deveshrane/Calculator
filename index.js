const numbers = document.querySelectorAll('.numbers');
const disCalc = document.querySelector('#display-calculations');
const disRes = document.querySelector('#display-result');
const operate = document.querySelectorAll('.operator');
const clr = document.getElementById('clear');
const equal = document.querySelector('.equal');
let buttonText = "";
let screenValue = "";
let operator = "";
let num1 = 0;
let num2 = 0;
let res = 0;
input();
function input() {
    for (item of numbers) {
        item.addEventListener('click', (e) => {
            buttonText = e.target.innerText;
            screenValue += buttonText;
            console.log(screenValue);
            screenValue = parseInt(screenValue);
            if (num1 != 0 && num2 == 0) {
                num2 = screenValue;
            }
            for (item of operate) {
                item.addEventListener('click', (e) => {
                    if (num1 == 0) {
                        num1 = screenValue;
                        screenValue = "";
                    }
                })
            }
            console.log("This is num1 " + num1);
            console.log("This is num2 " + num2);
            displayCalcBtn();
        })
    }
    for (item of operate) {
        item.addEventListener('click', (e) => {
            operator = e.target.innerText;
            console.log(operator);
            displayCalcOp();
        })
    }
    equal.addEventListener('click', () => {
        operat();
    })
    clr.addEventListener('click', () => {
        clear();
    })
}
function operat() {
    if (operator === "+") {
        add();
    } else if (operator === "-") {
        subtract();
    } else if (operator === "*") {
        multiply();
    } else if (operator === "/") {
        divide();
    }
}
function add() {
    res = num1 + num2;
    displayRes();
}
function multiply() {
    res = num1 * num2;
    displayRes();
}
function divide() {
    res = num1 / num2;
    displayRes();
}
function subtract() {
    res = num1 - num2;
    displayRes();
}
function displayCalcBtn() {
    disCalc.value = disCalc.value + buttonText;
}
function displayCalcOp() {
    disCalc.value = disCalc.value + operator;
}
function clear() {
    disCalc.value = "";
    disRes.value = "";
    num1 = 0;
    num2 = 0;
    operator = "";
    buttonText = "";
    screenValue = "";
}
function displayRes() {
    disRes.value = "=" + res;
}