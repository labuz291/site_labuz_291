/* 2. Банковская программа.
Пользователь вводит сумму вклада и процент, который будет начисляться ежегодно.
Отобразить размер вклада поочередно на ближайшие 5 лет.
*/

const DEPOSIT = +prompt("Введите сумму вклада в рублях");
const PERCENT_PER_YEAR = +prompt("Сколько процентов годовых?");
const DEPOZIT_PERIOD = +prompt("На сколько лет вклад?");
let periodInDays = DEPOZIT_PERIOD * 365;
let percent = PERCENT_PER_YEAR / 100;
let increaseSize = 0;

for (let year = 1; year <= DEPOZIT_PERIOD; year++) {
  increaseSize = increaseSize + (DEPOSIT + increaseSize) * percent / 365 * 365;
  document.write(`После ${ year } года сумма вклада составит: ${ (DEPOSIT + increaseSize).toFixed(3) } руб.<br>`);
}

document.write(`По окончании ${ DEPOZIT_PERIOD } лет сумма Вашего вклада составит: ${ (DEPOSIT + increaseSize).toFixed(3) } руб.<hr>`);

let checkingFormula = DEPOSIT * Math.pow(( 1 + PERCENT_PER_YEAR * 365 / 365 / 100 ), DEPOZIT_PERIOD);
console.log(`Размер вклада по окончании срока: ${ checkingFormula }`);
