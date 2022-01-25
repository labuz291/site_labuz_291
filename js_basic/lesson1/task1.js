/* Программа хранит в двух переменных курс доллара и евро.
В первой переменной у вас хранится стоимость одного евро в рублях, во второй - стоимость одного доллара в рублях.
Вы спрашиваете у пользователя, сколько рублей он хочет сконвертировать, получаете это число и считаете.
Результат надо вывести на страницу с помощью alert.
*/
const EURO_RATE = 84.85; // курс евро на 11.01.2022
const DOLLAR_RATE = 74.86; // курс доллара на 11.01.2022

const RUBLES_COUNT = +prompt("Введите сумму в рублях");

let conversResult = (Math.round((RUBLES_COUNT / EURO_RATE) * 100) / 100).toFixed(2);

if(Number.isNaN(conversResult)) {
  alert("Данные введены некорректно");
} else {
  alert(`Ваша сумма в евро составляет: ${ conversResult } евро.`);
}

conversResult = (Math.round((RUBLES_COUNT / DOLLAR_RATE) * 100) / 100).toFixed(2);

if(Number.isNaN(conversResult)) {
  alert("Данные введены некорректно");
} else {
  alert(`Ваша сумма в долларах составляет: ${ conversResult } долларов.`);
}
