/*
2. Банковская программа.
Пользователь вводит сумму вклада и процент, который будет начисляться ежегодно.
Отобразить размер вклада поочередно на ближайшие 5 лет.
*/
let DEPOSIT = document.getElementById('rublesSum').value;
DEPOSIT = +DEPOSIT;
let PERCENT_PER_YEAR = document.getElementById('depositPercent').value;
PERCENT_PER_YEAR = +PERCENT_PER_YEAR;
let DEPOZIT_PERIOD = document.getElementById('period').value;
DEPOZIT_PERIOD = +DEPOZIT_PERIOD;
let percent = PERCENT_PER_YEAR / 100;
let increasedSize = 0;
let resultMsg = document.getElementById('resultMessage');

function calculateDeposit() {
  for (let year = 1; year <= DEPOZIT_PERIOD; year++) {
    increasedSize = increasedSize + (DEPOSIT + increasedSize) * percent / 365 * 365;
    resultMsg = document.write(`После ${ year } года сумма вклада составит: ${ (DEPOSIT + increasedSize).toFixed(3) } руб.<br>`);
  }
}

/*
resultMsg.innerText = increasedSize.value;


document.write(`По окончании ${ DEPOZIT_PERIOD } лет сумма Вашего вклада составит: ${ (DEPOSIT + increasedSize).toFixed(3) } руб.<hr>`);

let checkingFormula = DEPOSIT * Math.pow(( 1 + PERCENT_PER_YEAR * 365 / 365 / 100 ), DEPOZIT_PERIOD);
console.log(`Размер вклада по окончании срока: ${ checkingFormula }`);
*/
