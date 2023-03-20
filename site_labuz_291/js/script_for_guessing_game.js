let onePlayerMode = document.getElementById('one_player');
let twoPlayersMode = document.getElementById('two_players');
const ANSWER = Math.round(Math.random() * 10);

let number = document.getElementById('user_answer');
let infoMessage = document.getElementById('info');
const MAX_TRY_COUNT = 3;
let tryCount = 0;

let commonBlock = document.getElementById('common_block');
let generalBlock = document.getElementById('general_block');
let mainBlock = document.getElementById('num_and_ans_box');
let centralBlock = document.getElementById('ans');
let settingsBlock = document.getElementById('settings_block');
let gameMode = document.getElementById('game_mode');
let difficultyLevels = document.getElementById('difficulty_levels');
let select = document.getElementById('complexityLvls');

function initialConcealment (id) {
  document.getElementById(id).style.visibility = "hidden"; // hide
}

function initialAppearance (id) {
  document.getElementById(id).style.visibility = "visible"; // show
}

function write(text) {
  infoMessage.innerHTML = text;
}

window.onload = function() {

  let startBox= document.createElement('div');
  startBox.className = "startBox";
  startBox.innerHTML = '<p>Добро пожаловать в <strong>"Угадайку"</strong></p><p>Компьютер загадает Вам число, а Вы можете попробовать его угадать.</p><p>Чтобы начать игру, нажмите <strong>"ИГРАТЬ"</strong>';
  commonBlock.replaceWith(startBox);

  let startBtn = document.createElement('button');
  startBtn.className = "startButton";
  startBtn.id = 'startButtonId';
  startBtn.innerHTML = "ИГРАТЬ";
  startBox.append(startBtn);

  startBtn.addEventListener("click", function() {

    initialConcealment('startButtonId');
    startBox.replaceWith(commonBlock);
    initialAppearance('settings_block');

    let beginBtn = document.createElement('button');
    beginBtn.className = "beginButton";
    beginBtn.id = 'beginButtonId';
    beginBtn.innerHTML = "ВЫБРАТЬ";
    difficultyLevels.replaceWith(beginBtn);
    write('Пожалуйста, выберите режим игры.');

    beginBtn.addEventListener("click", function() {

      function checkGameMode() {
        if (onePlayerMode.checked === true) {
          console.log('onePlayerMode');
          return onePlayerMode = true;
        } else if (twoPlayersMode.checked === true) {
          console.log('twoPlayersMode');
          return twoPlayersMode = true;
        }
      }

      beginBtn.onclick = checkGameMode();

      if (onePlayerMode === true || twoPlayersMode === true) {
        gameMode.replaceWith(difficultyLevels);
        write('Пожалуйста, выберите уровень сложности.');
      } else {
        write('Вы не выбрали режим игры.');
      }
    } );

    function checkDifficultyLvs() {
      select.onchange = function() {
        alert(this.value);
      }
    }

    beginBtn.onclick = checkDifficultyLvs();

  } );
}










function readInt() {
  number = +number.value;
  return number;
}

function hide(id) {
  document.getElementById(id).style.display = 'none';
}



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

  /*
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
  */
