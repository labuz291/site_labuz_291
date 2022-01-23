/*
3. Дописать игру “Угадай число” (по желанию).
Сделать игру с двумя игроками и бесконечным числом попыток.
Сделайте возможность выйти из игры по желанию одного из игроков.
*/
alert(`Игра УГАДАЙ ЧИСЛО в режиме двух игроков. Отгадайте число от 1 до 100. (Чтобы выйти из игры, нажмите "Отмена")`);
let answer = Math.round(Math.random() * 100);
let playerOneAnswer = prompt("Первый игрок, ваш ответ:");
let playerTwoAnswer = prompt("Второй игрок, ваш ответ:");

for (;;) {
  if (playerOneAnswer === null) {
    alert("Первый игрок пожелал закончить игру.");
    break;
  } else if (playerTwoAnswer === null) {
    alert("Второй игрок пожелал закончить игру.");
    break;
  } else {
    playerOneAnswer = +playerOneAnswer;
    playerTwoAnswer = +playerTwoAnswer;
    if (playerOneAnswer === answer && playerTwoAnswer === answer) {
    alert("Оба игрока угадали! Ничья.");
  } else if (playerOneAnswer === answer && playerTwoAnswer !== answer) {
    alert("Первый игрок победил!");
    break;
  } else if (playerTwoAnswer === answer && playerOneAnswer !== answer) {
    alert("Второй игрок победил!");
    break;
  }
    playerOneAnswer = prompt("Первый игрок, ваш ответ:");
    playerTwoAnswer = prompt("Второй игрок, ваш ответ:");
  }
  }
