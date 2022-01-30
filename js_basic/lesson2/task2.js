/* 2. Банковская программа.
Пользователь вводит сумму вклада и процент, который будет начисляться ежегодно.
Отобразить размер вклада поочередно на ближайшие 5 лет.
*/

const DEPOSIT = +prompt("Введите сумму вклада в рублях");
const PERCENT_PER_YEAR = +prompt("Сколько процентов годовых?");
const DEPOSIT_PERIOD = +prompt("На сколько лет вклад?");
const PERCENT = PERCENT_PER_YEAR / 100;
let increaseSize = 0;

for (let year = 1; year <= DEPOSIT_PERIOD; year++) {
  increaseSize = increaseSize + (DEPOSIT + increaseSize) * PERCENT / 365 * 365;
  document.write(`После ${ year } года сумма вклада составит: ${ (DEPOSIT + increaseSize).toFixed(2) } руб.<br>`);
}

document.write(`По окончании ${ DEPOSIT_PERIOD } лет сумма Вашего вклада составит: ${ (DEPOSIT + increaseSize).toFixed(2) } руб.<hr>`);

let checkingFormula = DEPOSIT * Math.pow(( 1 + PERCENT_PER_YEAR * 365 / 365 / 100 ), DEPOSIT_PERIOD);
console.log(`Размер вклада по окончании срока: ${ checkingFormula }`);
