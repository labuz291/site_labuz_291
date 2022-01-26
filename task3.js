alert(`Игра УГАДАЙ ЧИСЛО в режиме двух игроков. Отгадайте число от 1 до 100. (Чтобы выйти из игры, нажмите "Отмена")`);
let playerOne;
let playerTwo;
let answer = Math.round(Math.random() * 100);
let playerOneAnswer;
let playerTwoAnswer;
let playerCount = [
  playerOne, playerTwo
];
let responseOrder = Math.round(Math.random() * playerCount.length - 1);

for (;;) {
  if (responseOrder === 0) {
    playerOneAnswer = prompt("Первый игрок, ваш ответ:");
    playerTwoAnswer = prompt("Второй игрок, ваш ответ:");
  } else if (responseOrder === 1) {
    playerTwoAnswer = prompt("Второй игрок, ваш ответ:");
    playerOneAnswer = prompt("Первый игрок, ваш ответ:");
  }

  if (playerOneAnswer === null || playerTwoAnswer === null) {
    alert("Один из игроков пожелал закончить игру.");
    break;
  } else {
    playerOneAnswer = +playerOneAnswer;
    playerTwoAnswer = +playerTwoAnswer;
      if (playerOneAnswer === answer && playerTwoAnswer !== answer) {
      alert("Первый игрок победил!");
      break;
      } else if (playerTwoAnswer === answer && playerOneAnswer !== answer) {
        alert("Второй игрок победил!");
        break;
        } else if (playerOneAnswer === answer && playerTwoAnswer === answer) {
            if (responseOrder === 0) {
              alert("Первый игрок победил!");
              break;
            } else if (responseOrder === 1) {
              alert("Второй игрок победил!");
              break;
            }
          }
    }
}
