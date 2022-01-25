/* 1. Игра в загадки.
a. Загадать загадку. Если ответ верен – поздравить пользователя. Затем сообщить, что игра окончена.
b. Если ответ неверный – написать пользователю, что он не угадал.
c. Добавить еще 3 загадки. Подсчитать количество правильных ответов, сообщить пользователю.
d. (По желанию). В качестве верного ответа принимать несколько вариантов ответов. Например, «Стул», «стул», «табуретка» и так далее.
*/
const USER_ANSWER_1 = prompt("Отгадайте загадку: в поле лестница лежит, дом по лестнице бежит.").toLowerCase();
const RIGHT_ANSWER_1 = "поезд";

let rightAnswerCount = 0;

if (USER_ANSWER_1 === RIGHT_ANSWER_1) {
  alert("Поздравляю, вы угадали! :-)");
  rightAnswerCount++;
} else {
  alert("Вы не угадали.");
  alert(`Правильный ответ - ${ RIGHT_ANSWER_1 }`);
}

const USER_ANSWER_2 = prompt("Отгадайте загадку: пыль увижу — заворчу, заверчу и проглочу.").toLowerCase();
const RIGHT_ANSWER_2 = "пылесос";

if (USER_ANSWER_2 === RIGHT_ANSWER_2) {
  alert("Поздравляю, вы угадали! :-)");
  rightAnswerCount++;
} else {
  alert("Вы не угадали.");
  alert(`Правильный ответ - ${ RIGHT_ANSWER_2 }`);
}

const USER_ANSWER_3 = prompt("Отгадайте загадку: к нам приехали с бахчи полосатые мячи.").toLowerCase();
const RIGHT_ANSWER_3 = "арбуз";

if (USER_ANSWER_3 === RIGHT_ANSWER_3) {
  alert("Поздравляю, вы угадали! :-)");
  rightAnswerCount++;
} else {
  alert("Вы не угадали.");
  alert(`Правильный ответ - ${ RIGHT_ANSWER_3 }`);
}

const USER_ANSWER_4 = prompt("Стоял на крепкой ножке, теперь лежит в лукошке.").toLowerCase();
const RIGHT_ANSWER_4 = "гриб";

if (USER_ANSWER_4 === RIGHT_ANSWER_4) {
  alert("Поздравляю, вы угадали! :-)");
  rightAnswerCount++;
} else {
  alert("Вы не угадали.");
  alert(`Правильный ответ - ${ RIGHT_ANSWER_4 }`);
}

alert(`Количество правильных ответов: ${rightAnswerCount}.`);
alert("Игра окончена.");
