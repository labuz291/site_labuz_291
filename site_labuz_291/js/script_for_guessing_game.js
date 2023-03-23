let onePlayerMode = document.getElementById('one_player');
let twoPlayersMode = document.getElementById('two_players');
let rightAnswer = 0;
let answer = document.getElementById('answer');
let userAnswer = 0;
let infoMessage = document.getElementById('info');
let maxTryCount = 1;
let tryCount = 0;

let commonBlock = document.getElementById('common_block');
let generalBlock = document.getElementById('general_block');
let mainBlock = document.getElementById('num_and_ans_box');
let centralBlock = document.getElementById('ans');
let settingsBlock = document.getElementById('settings_block');
let gameMode = document.getElementById('game_mode');
let difficultyLevels = document.getElementById('difficulty_levels');
let select = document.getElementById('complexityLvls');
let maxValue = 0;

function hide(id) {
  document.getElementById(id).style.display = 'none';
}

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

  initialConcealment('answer');

  let startBox= document.createElement('div');
  startBox.className = "startBox";
  let startMsg= document.createElement('div');
  startMsg.innerHTML = '<p>Добро пожаловать в <strong>"Угадайку"</strong></p><p>Компьютер загадает Вам число, а Вы можете попробовать его угадать.</p><p>Чтобы начать игру, нажмите <strong>"ИГРАТЬ"</strong>';
  commonBlock.replaceWith(startBox);

  let startBtn = document.createElement('button');
  startBtn.className = "startButton";
  startBtn.id = 'startButtonId';
  startBtn.innerHTML = "ИГРАТЬ";
  startBox.append(startMsg);
  startBox.appendChild(startBtn);

  let guessingNum = document.createElement('input');
  guessingNum.className = "guessingNumber";
  guessingNum.id = 'guessingNumberId';
  guessingNum.type = 'number';
  guessingNum.min = '0';
  guessingNum.placeholder = 'Число';

  startBtn.addEventListener("click", function() {

    startMsg.innerHTML = '<p>Компьютер загадает число от 0 до любого числа, которое Вы введёте.</p>';

    startBox.appendChild(guessingNum);
    startBox.appendChild(startBtn);
    startBtn.innerHTML = "ВЫБРАТЬ";

    startBtn.addEventListener("click", function() {

      maxValue = guessingNum.value;

      if (maxValue === "") {
        startMsg.innerHTML = '<p>Пожалуйста, введите число.</p>';
      } else {
        maxValue = +maxValue;
        rightAnswer = Math.round(Math.random() * maxValue);
        startBox.replaceWith(commonBlock);
        initialAppearance('settings_block');
        }

      let beginBtn = document.createElement('button');
      beginBtn.className = "beginButton";
      beginBtn.id = 'beginButtonId';
      beginBtn.innerHTML = "ВЫБРАТЬ";
      difficultyLevels.replaceWith(beginBtn);
      write('Пожалуйста, выберите режим игры.');

      beginBtn.addEventListener("click", function() {

        function checkGameMode() {
          if (onePlayerMode.checked === true) {
            return onePlayerMode = true;
          } else if (twoPlayersMode.checked === true) {
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
  
        function checkDifficultyLvs() {
          maxTryCount = +select.value;
          let setupComplet = document.createElement('button');
          setupComplet.className = "beginButton";
          setupComplet.id = 'setupCompletId';
          setupComplet.innerHTML = "ГОТОВО";
          beginBtn.replaceWith(setupComplet);

          setupComplet.onclick = function () {

            let gameBox= document.createElement('div');
            gameBox.className = 'gameBox';
            gameBox.id = 'gameBoxId';
            settingsBlock.replaceWith(gameBox);
            
            for (let i = 0; i <= maxValue; i++) {
              let numBtn = document.createElement('button');
              numBtn.className = 'numBtn';
              numBtn.value = i;
              numBtn.innerHTML = i;
              numBtn.id = i;
              gameBox.appendChild(numBtn);
              write(`Угадайте число от 0 до ${maxValue}`);
            }

            //gameBox.appendChild(answer);
            //initialAppearance('answer');
            
            let numCollection = document.querySelectorAll('.numBtn');
            numCollection.id = 'collection';

            function choose(_numbers) {
              for (let num of numCollection) {
                num.onclick = function addNum() {
                  userAnswer = +num.value;
                  if (userAnswer === rightAnswer && tryCount < maxTryCount) {
                    write(`Поздравляю, Вы угадали!`);
                    hide('gameBoxId');
                  } else {
                    tryCount++;
                    if (userAnswer < rightAnswer && tryCount < maxTryCount) {
                      write(`Вы ввели слишком маленькое число<br /> Осталось ${maxTryCount - tryCount} попыток`);
                    } else if (userAnswer > rightAnswer && tryCount < maxTryCount) {
                      write(`Вы ввели слишком большое число<br /> Осталось ${maxTryCount - tryCount} попыток`);
                    } else if (tryCount >= maxTryCount && userAnswer !== rightAnswer) {
                    write(`У Вас закончились попытки. Правильный ответ ${rightAnswer}`);
                    hide('gameBoxId');
                    }
                  }
                }
              }
            }

            numCollection.onclick = choose();

          }
        }

        beginBtn.onclick = checkDifficultyLvs();

      } );

  } );
  } );

}

/*
function guess() {

  tryCount++;

  if (userAnswer === rightAnswer && tryCount < maxTryCount) {
    write(`Поздравляю, Вы угадали!`);
    hide('collection');
    hide('answer');
  } else {
    if (userAnswer < rightAnswer && tryCount < maxTryCount) {
      write(`Вы ввели слишком маленькое число<br /> Осталось ${maxTryCount - tryCount} попыток`);
    } else if (userAnswer > rightAnswer && tryCount < maxTryCount) {
      write(`Вы ввели слишком большое число<br /> Осталось ${maxTryCount - tryCount} попыток`);
    } else if (tryCount >= maxTryCount && userAnswer !== rightAnswer) {
    write(`У Вас закончились попытки. Правильный ответ ${rightAnswer}`);
    hide('collection');
    hide('answer');
    }
  }

}
*/
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
