/*

let instructionArr = [
  `Положите 4 пальца левой руки - мезинец, безымянный, средний и указательный - на клавиши ф, ы, в, а.
  Запомните, что А нахрдится под Вашим указательным пальцем, а Ф - под мизинцем.\n
  Теперь неспеша набирайте текст. Постарайтесь не смотреть на клавиатуру.`,

  `Поставьте мизинец левой руки на букву Ф,
  безымянный палец — на Ы, средний — на В, указательный — на А. Мизинец правой руки на букву Ж,
  безымянный палец — на Д, средний — на Л, указательный — на О. Запомните расположение пальцев.
  Повторяйте за мной.`,

  `Поставьте мизинец левой руки на букву Ф,
  безымянный палец — на Ы, средний — на В, указательный — на А. Мизинец правой руки на букву Ж,
  безымянный палец — на Д, средний — на Л, указательный — на О. Запомните расположение пальцев.`,

  `Поставьте мизинец левой руки на букву Ф,
  безымянный палец — на Ы, средний — на В, указательный — на А. Мизинец правой руки на букву Ж,
  безымянный палец — на Д, средний — на Л, указательный — на О. Запомните расположение пальцев.`
];

let letterVariants = [
  ["ф", "а"],
  ["ы", "в"],
  ["о", "ж"],
  ["л", "д"]
];

let infoArr = [
  "Вас приветствует программа по тренировке слепой печати",
  "Вы ошиблись. Попробуйте ещё раз.",
  "Всё верно!",
  "Поздравляем!"
]

let infoMessage = document.getElementById('info');
let input = document.getElementById('userAnswer');
let rightAnswerCount = 0;

function generateText(letters, length) {
  let text = "";
  for (let i = 0; i < length; i++) {
    let n = getRandomNumber(letters.length - 1);
    text += letters[ n ];
  }
  return text;
}

function getRandomNumber(max) {
  return Math.round(Math.random() * max);
}
*/

/*
function write(message) {
  infoMessage.innerHTML = message;
}
*/

/*
while (rightAnswerCount < instructionArr.length) {
  infoMessage.innerText = instructionArr[rightAnswerCount];
  text = generateText(letterVariants[rightAnswerCount], 2);
  userText = prompt(text);
  if (userText === text) {
    alert(infoArr[2]);
    rightAnswerCount++;
  } else {
      alert(infoArr[1]);
    }
}

alert(infoArr[3]);

*/