/*
function makeForRiddle(riddlesAndAnswers) {
  ...
  Эта функция будет выводить загадки на экран по одной.
  Пользователь сможет запрашивать кнопкой новую загадку
  либо другой кнопкой закончить игру
  ...
}
*/

//хочу использовать объект вместо массива
let riddlesAndAnswersObj = {
  "в поле лестница лежит, дом по лестнице бежит": ["поезд", "паровоз"],
  "пыль увижу — заворчу, заверчу и проглочу": ["пылесос"],
  "к нам приехали с бахчи полосатые мячи": ["арбуз", "арбузы"],
  "cтоял на крепкой ножке, теперь лежит в лукошке": ["гриб", "грибы"]
};

let riddlesAndAnswersArr = [
  ["в поле лестница лежит, дом по лестнице бежит", "поезд"],
  ["пыль увижу — заворчу, заверчу и проглочу", "пылесос"],
  ["к нам приехали с бахчи полосатые мячи", "арбуз"],
  ["cтоял на крепкой ножке, теперь лежит в лукошке", "гриб"]
];

let rightAnswerCount = 0;

function checkAnswer(inputId, riddlesAndAnswers) {
  let userAnswer = document.getElementById(inputId).value;
  userAnswer = userAnswer.toLowerCase();
  for (let i = 0; i < riddlesAndAnswersArr.length; i++) {
    if (userAnswer === riddlesAndAnswersArr[i][1]) {
      rightAnswerCount++;
      break;
    }
    }
  }

function answersChecking() {
  rightAnswerCount = 0;

  checkAnswer("userAnswer1", riddlesAndAnswersArr);
  checkAnswer("userAnswer2", riddlesAndAnswersArr);
  checkAnswer("userAnswer3", riddlesAndAnswersArr);
  checkAnswer("userAnswer4", riddlesAndAnswersArr);

  alert(`Вы отгадали ${ rightAnswerCount } загадок`);
}
