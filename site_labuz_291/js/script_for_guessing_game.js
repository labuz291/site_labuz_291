let onePlayerMode = document.querySelector('#one_player');
let twoPlayersMode = document.querySelector('#two_players');
const ANSWER = Math.round(Math.random() * 10);
let number = document.getElementById('userAnswer');
let infoMessage = document.getElementById('info');
const MAX_TRY_COUNT = 3;
let tryCount = 0;

function write(text) {
  infoMessage.innerHTML = text;
}

function readInt() {
  number = +number.value;
  return number;
}

function hide(id) {
  document.getElementById(id).style.display = 'none';
}


if (onePlayerMode.checked === true && twoPlayersMode.checked === false) {

  function guess() {
    tryCount++;
    let userAnswer = readInt();
    if (userAnswer === ANSWER && tryCount < MAX_TRY_COUNT) {
      write(`Поздравляю, Вы угадали!`);
      hide('answerBtn');
      hide('userAnswer');
    } else {
      if (userAnswer < ANSWER && tryCount < MAX_TRY_COUNT) {
        write(`Вы ввели слишком маленькое число<br /> Осталось ${MAX_TRY_COUNT - tryCount} попыток`);
      } else if (userAnswer > ANSWER && tryCount < MAX_TRY_COUNT) {
        write(`Вы ввели слишком большое число<br /> Осталось ${MAX_TRY_COUNT - tryCount} попыток`);
      } else if (tryCount >= MAX_TRY_COUNT && userAnswer !== ANSWER) {
      write(`У Вас закончились попытки. Правильный ответ ${ANSWER}`);
      hide('answerBtn');
      hide('userAnswer');
      }
    }
  }
} else if (twoPlayersMode.checked === true && onePlayerMode.checked === false) {
  alert(`Игра УГАДАЙ ЧИСЛО в режиме двух игроков. Отгадайте число от 1 до 10. (Чтобы выйти из игры, нажмите "Отмена")`);
  let playerOne;
  let playerTwo;
  let playerOneAnswer;
  let playerTwoAnswer;

  let playerCount = [
    playerOne, playerTwo
  ];
  let responseOrder = Math.abs(Math.round(Math.random() * playerCount.length - 1));

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
      if (playerOneAnswer === ANSWER && playerTwoAnswer !== ANSWER) {
        alert("Первый игрок победил!");
        break;
      } else if (playerTwoAnswer === A && playerOneAnswer !== ANSWER) {
        alert("Второй игрок победил!");
        break;
      } else if (playerOneAnswer === ANSWER && playerTwoAnswer === ANSWER) {
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

}