let display = document.getElementById('field');
let miniDisplay = document.getElementById('extra_field');
let btnC = document.getElementById('btn_C');
let operator = null;
let numBtns = document.querySelectorAll('.numbers');
let operBtns = document.querySelectorAll('.operation');
let operand_1 = null;
let operand_2 = null;
let equally = document.querySelector('.eq');
let result = null;

//очищаем дисплей при загрузке страницы
window.onload = function() {
  display.value = "";
  miniDisplay.value = "";
}

//отображение нажатой цифры на дисплее
function addNumber(number) {
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
    }
  }
}

//нажатие оператора
function addOperator(operators) {
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
      }
    }
}

addNumber(numBtns);
addOperator(operBtns);

//кнопка сброса
btn_C.onclick = function clear() {
  display.value = "";
  miniDisplay.value = "";
  display = document.getElementById('field');
  miniDisplay = document.getElementById('extra_field');
  btnC = document.getElementById('btn_C');
  operator = null;
  numBtns = document.querySelectorAll('.numbers');
  operBtns = document.querySelectorAll('.operation');
  operand_1 = null;
  operand_2 = null;
  flag = null;
  equally = document.querySelector('.eq');
  result = null;
}

// равно
equally.onclick = function equally() {
  if (operator !== null && operand_1 !== null) {
    switch (operator) {
          case '+':
            result = operand_1 + operand_1;
            display.value = result;
            miniDisplay.value = result;
            break;
          case '-':
            result = operand_1 - operand_1;
            display.value = result;
            miniDisplay.value = result;
            break;
          case '*':
            result = operand_1 * operand_1;
            display.value = result;
            miniDisplay.value = result;
            break;
          case '/':
            result = operand_1 / operand_1;
            display.value = result;
            miniDisplay.value = result;
            break;
        }
  } else {
    display.value = 'ERROR';
  }
  operand_1 = result;
}
// document.getElementById('field').innerHTML = result;
