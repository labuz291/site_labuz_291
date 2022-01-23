/* 1. Игра в загадки.
a. Загадать загадку. Если ответ верен – поздравить пользователя. Затем сообщить, что игра окончена.
b. Если ответ неверный – написать пользователю, что он не угадал.
c. Добавить еще 3 загадки. Подсчитать количество правильных ответов, сообщить пользователю.
d. (По желанию). В качестве верного ответа принимать несколько вариантов ответов. Например, «Стул», «стул», «табуретка» и так далее.
*/
const RIDDLE_1 = prompt("Отгадайте загадку: в поле лестница лежит, дом по лестнице бежит.");
const RIGHT_ANSWER_1 = "поезд";
const USER_ANSWER_1 = RIDDLE_1.toLowerCase();

let rightAnswerCount = 0;

if (USER_ANSWER_1 === RIGHT_ANSWER_1) {
  alert("Поздравляю, вы угадали! :-)");
  rightAnswerCount++;
} else {
  alert("Вы не угадали.");
  alert(`Правильный ответ - ${ RIGHT_ANSWER_1 }`);
}

const RIDDLE_2 = prompt("Отгадайте загадку: пыль увижу — заворчу, заверчу и проглочу.");
const RIGHT_ANSWER_2 = "пылесос";
const USER_ANSWER_2 = RIDDLE_2.toLowerCase();

if (USER_ANSWER_2 === RIGHT_ANSWER_2) {
  alert("Поздравляю, вы угадали! :-)");
  rightAnswerCount++;
} else {
  alert("Вы не угадали.");
  alert(`Правильный ответ - ${ RIGHT_ANSWER_2 }`);
}

const RIDDLE_3 = prompt("Отгадайте загадку: к нам приехали с бахчи полосатые мячи.");
const RIGHT_ANSWER_3 = "арбуз";
const USER_ANSWER_3 = RIDDLE_3.toLowerCase();

if (USER_ANSWER_3 === RIGHT_ANSWER_3) {
  alert("Поздравляю, вы угадали! :-)");
  rightAnswerCount++;
} else {
  alert("Вы не угадали.");
  alert(`Правильный ответ - ${ RIGHT_ANSWER_3 }`);
}

const RIDDLE_4 = prompt("Стоял на крепкой ножке, теперь лежит в лукошке.");
const RIGHT_ANSWER_4 = "гриб";
const USER_ANSWER_4 = RIDDLE_4.toLowerCase();

if (USER_ANSWER_4 === RIGHT_ANSWER_4) {
  alert("Поздравляю, вы угадали! :-)");
  rightAnswerCount++;
} else {
  alert("Вы не угадали.");
  alert(`Правильный ответ - ${ RIGHT_ANSWER_4 }`);
}

alert(`Количество правильных ответов: ${ rightAnswerCount }.`);
alert("Игра окончена.");
