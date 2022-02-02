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

    if (userAnswer === riddlesAndAnswers[i][1]) {
      alert("Правильно!");
      rightAnswerCount++;
    } else {
      alert(`Неправильно. Правильный ответ "${riddlesAndAnswers[i][1]}".`);
    }
  }
  return rightAnswerCount;
}

let riddles = [
  ["в поле лестница лежит, дом по лестнице бежит", "поезд"],
  ["пыль увижу — заворчу, заверчу и проглочу", "пылесос"],
  ["к нам приехали с бахчи полосатые мячи", "арбуз"],
  ["cтоял на крепкой ножке, теперь лежит в лукошке", "гриб"]
];

makeForRiddles(riddles);
alert(`Количество правильных ответов: ${rightAnswerCount}.`);
alert("Игра окончена.");
