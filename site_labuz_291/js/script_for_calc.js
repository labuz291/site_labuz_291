let display = document.getElementById("field");
let miniDisplay = document.getElementById("extra_field");
let btnC = document.getElementById("btn_C");
let operator = null;
let numBtns = document.querySelectorAll(".numbers");
let operBtns = document.querySelectorAll(".operation");
let operand_1 = null;
let operand_2 = null;
let equally = document.querySelector(".eq");
let result = null;

let isLastClickOperator = false;
const OPERATORS = {
  "+": onPlus,
  "-": onMinus,
  "*": onMultiply,
  "/": onDivide,
};

//очищаем дисплей при загрузке страницы
window.onload = function () {
  display.value = "";
  miniDisplay.value = "";
};

//отображение нажатой цифры на дисплее
function addNumber(number) {
  if (display.value === "" || isLastClickOperator) {
    if (number === 0) {
      return;
    }
    display.value = number;
    miniDisplay.value += number;
  } else {
    display.value += number;
    miniDisplay.value += number;
  }

  if (!operator) {
    operand_1 = +display.value;
  } else {
    operand_2 = +display.value;
  }
  isLastClickOperator = false;
}

function addOperator(value) {
  operator = value;
  if (isLastClickOperator) {
    miniDisplay.value = miniDisplay.value.slice(0, -1);
  }
  miniDisplay.value += operator;
  isLastClickOperator = true;
}

function onPlus(arg1, arg2) {
  return arg1 + arg2;
}
function onMinus(arg1, arg2) {
  return arg1 - arg2;
}
function onMultiply(arg1, arg2) {
  return arg1 * arg2;
}
function onDivide(arg1, arg2) {
  return arg1 / arg2;
}

function onEqually() {
  if (operand_1 && operand_2 && operator) {
    const EQUALLY = OPERATORS[operator](operand_1, operand_2);
    display.value = EQUALLY;
    operand_1 = EQUALLY;
    operand_2 = null;
    operator = null;
  }
}

function addNumber1(number) {
  for (let num of numBtns) {
    num.onclick = function addNum() {
      if (display.value === "") {
        display.value = num.value;
        miniDisplay.value = num.value;
      } else if (display.value !== "") {
        display.value += num.value;
        miniDisplay.value += num.value;
      }
      operand_1 = +display.value;
    };
  }
}

//нажатие оператора
function addOperator1(operators) {
  for (let oper of operBtns) {
    oper.onclick = function addOp() {
      if (display.value !== "") {
        operator = oper.value;
        miniDisplay.value = display.value + oper.value;
        //console.log(oper.value);
      } else if (display.value === "") {
        operator = null;
      }
      display.value = operand_1;
    };
  }
}

// addNumber(numBtns);
// addOperator(operBtns);

//кнопка сброса
btn_C.onclick = function clear() {
  display.value = "";
  miniDisplay.value = "";
  display = document.getElementById("field");
  miniDisplay = document.getElementById("extra_field");
  btnC = document.getElementById("btn_C");
  operator = null;
  numBtns = document.querySelectorAll(".numbers");
  operBtns = document.querySelectorAll(".operation");
  operand_1 = null;
  operand_2 = null;
  flag = null;
  equally = document.querySelector(".eq");
  result = null;
};
