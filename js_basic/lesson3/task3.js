/*
3. Доработать игру в загадки:
a. Избавиться в игре в загадки от дублирования кода, используя массивы и функции.
b. Сделать так, чтобы программа поддерживала несколько правильных ответов на один и тот же вопрос.
Все возможные варианты задаются программистом в коде программы.
*/

let rightAnswerCount = 0;

function makeForRiddles(riddlesAndAnswers) {
  for (let i = 0; i < riddlesAndAnswers.length; i++) {
    let riddle = riddlesAndAnswers[i];
    let userAnswer = prompt(`Отгадайте загадку: ${riddlesAndAnswers[i][0]}`).toLowerCase();
    if (riddlesAndAnswers[i].length > 2) {
      if (userAnswer === riddlesAndAnswers[i][1] || userAnswer === riddlesAndAnswers[i][2]) {
        alert("Правильно!");
        rightAnswerCount++;
      } else {
        alert(`Неправильно. Правильный ответ - ${riddlesAndAnswers[i][1]} (${riddlesAndAnswers[i][2]}).`);
      }
    } else {
      if (userAnswer === riddlesAndAnswers[i][1]) {
        alert("Правильно!");
        rightAnswerCount++;
      } else {
        alert(`Неправильно. Правильный ответ - ${riddlesAndAnswers[i][1]}.`);
      }
    }
  }
  return rightAnswerCount;
}

const RIDDLES = [
  ["в поле лестница лежит, дом по лестнице бежит", "поезд", "паровоз"],
  ["пыль увижу — заворчу, заверчу и проглочу", "пылесос"],
  ["к нам приехали с бахчи полосатые мячи", "арбуз", "арбузы"],
  ["cтоял на крепкой ножке, теперь лежит в лукошке", "гриб", "грибы"]
];

makeForRiddles(RIDDLES);
alert(`Количество правильных ответов: ${rightAnswerCount}.`);
alert("Игра окончена.");
