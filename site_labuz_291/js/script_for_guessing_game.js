let commonBlock = document.getElementById('commonBlock');
let generalBlock = document.getElementById('generalBlock');
let mainBlock = document.getElementById('numAndAnsBox');
let centralBlock = document.getElementById('ans');
let settingsBlock = document.getElementById('settingsBlock');
let gameMode = document.getElementById('gameMode');
let difficultyLevels = document.getElementById('difficultyLevels');
let select = document.getElementById('complexityLvls');
let refreshBtnDiv = document.getElementById('refreshBtnDiv');
let refreshBtn = document.getElementById('refreshBtn');
let settingInfoMessage = document.getElementById('info');
let gameInfoMessage = document.getElementById('mainInfo');
let onePlayerMode = document.getElementById('onePlayer');
let twoPlayersMode = document.getElementById('twoPlayers');
let journalDiv = document.getElementById('statisticsDiv');
let journal = document.getElementById('statistics');
let rightAnswer = 0;
let userAnswer = 0;
let maxTryCount = 1;
let tryCount = 0;
let maxValue = 0;
let numBtn = null;
let numBtnDiv = null;
let numCollection = null;
let record = null;
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let timeMessage = '';
let messageCount = 0;

function getDoubleDigitTime(time) {
  let resault = '';
  if (time < 9) {
    resault = `0${ time }`;
  } else {
    resault = time;
  }
  return resault;
}

function getRandomNum(userNum) {
  let randomNum = Math.round(Math.random() * userNum);
  if  (randomNum === 0) {
    getRandomNum(userNum);
  } else {
    return randomNum;
  }
}

let removeElement = (element) => element.style.display = 'none';
let returnElement = (element) => element.style.display = 'block';
// let hideElement = (element) => element.style.visibility = 'hidden';
// let showElement = (element) => element.style.visibility = 'visible';

rusMonthArray = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря'
]

let monthInRus = function(monthOfNewDate, monthArray) {
  for (let i = 0; i < monthArray.length; i++) {
    if (monthOfNewDate === i) {
      return timeMessage = `Дата: ${ day } ${ monthArray[i] } ${ year } года. Время: ${ getDoubleDigitTime(hours) }:${ getDoubleDigitTime(minutes) }:${ getDoubleDigitTime(seconds) }.`;
    }
  }
}

timeMessage = monthInRus(month, rusMonthArray);

refreshBtn.onclick = function() {
  // now = new Date();
  playGame();
}

removeElement(refreshBtn);
removeElement(journalDiv);
removeElement(journal);

let startBox = document.createElement('div');
startBox.className = 'start_box';
commonBlock.replaceWith(startBox);

let startMsg = document.createElement('div');
startMsg.className = 'info_message';
startMsg.innerHTML = '<p>Добро пожаловать в <strong>"Угадайку"</strong></p><p>Компьютер загадает Вам число, а Вы можете попробовать его угадать.</p><p>Чтобы начать игру, нажмите <strong>"ИГРАТЬ"</strong>';
startBox.append(startMsg);

let startBtn = document.createElement('button');
startBtn.className = 'start_button';
startBtn.id = 'startButtonId';
startBtn.innerHTML = 'ИГРАТЬ';
startBox.appendChild(startBtn);

startBtn.addEventListener("click", function() {
  startBox.replaceWith(commonBlock);
});

removeElement(difficultyLevels);

settingInfoMessage.innerHTML = 'Пожалуйста, выберите режим игры.';

let chooseModeBtn = document.createElement('button');
chooseModeBtn.className = 'begin_button';
chooseModeBtn.id = 'chooseModeBtnId';
chooseModeBtn.innerHTML = 'ВЫБРАТЬ';

let chooseLvlBtn = document.createElement('button');
chooseLvlBtn.className = 'begin_button';
chooseLvlBtn.id = 'chooseLvlBtnId';
chooseLvlBtn.innerHTML = 'ВЫБРАТЬ';

commonBlock.appendChild(chooseModeBtn);

chooseModeBtn.onclick = function() {

  if (onePlayerMode.checked === true) {
    onePlayerMode = true;
    twoPlayersMode = false;
  } else if (twoPlayersMode.checked === true) {
    twoPlayersMode = true;
    onePlayerMode = false;
  }

  if (onePlayerMode === true || twoPlayersMode === true) {
    returnElement(difficultyLevels);
    gameMode.replaceWith(difficultyLevels);
    settingInfoMessage.innerHTML = 'Пожалуйста, выберите уровень сложности.';
    chooseModeBtn.replaceWith(chooseLvlBtn);
  } else {
    settingInfoMessage.innerHTML = 'Вы не выбрали режим игры.';
  }

}

let setupCompletBtn = document.createElement('button');
setupCompletBtn.className = 'begin_button';
setupCompletBtn.id = 'setupCompletBtnId';
setupCompletBtn.innerHTML = "ГОТОВО";

chooseLvlBtn.onclick = function() {
  maxTryCount = +select.value;
  chooseLvlBtn.replaceWith(setupCompletBtn);
}

let quantityChooseBtn = document.createElement('button');
quantityChooseBtn.className = 'begin_button';
quantityChooseBtn.id = 'quantityChooseBtnId';
quantityChooseBtn.innerHTML = "Ввести";

let guessingNum = document.createElement('input');
guessingNum.className = 'guessing_number';
guessingNum.id = 'guessingNumberId';
guessingNum.type = 'number';
// guessingNum.min = '1';
// guessingNum.max = '100';
// guessingNum.step = '1';
guessingNum.placeholder = 'Число';

setupCompletBtn.onclick = function() {
  removeElement(settingsBlock);
  gameInfoMessage.innerHTML = '<p>Компьютер загадает число от 1 до любого числа, которое Вы введёте.</p>';
  generalBlock.appendChild(guessingNum);
  setupCompletBtn.replaceWith(quantityChooseBtn);
}

quantityChooseBtn.onclick = function() {
  maxValue = guessingNum.value;

  if (maxValue === "") {
    gameInfoMessage.innerHTML = '<p>Пожалуйста, введите число.</p>';
  } else {
    returnElement(journalDiv);
    returnElement(journal);
      // tryCount = 0;
      maxValue = +maxValue;
      makeBtns(maxValue);
      playGame();
    }
}

function makeBtns(maxValue) {
  for (let i = 1; i <= maxValue; i++) {
  numBtn = document.createElement('button');
  numBtnDiv = document.createElement('div');
  numBtn.className = 'num_btn';
  numBtnDiv.className = 'num_btn_div';
  numBtn.value = i;
  numBtn.innerHTML = i;
  numBtn.id = i;
  numBtnDiv.append(numBtn);
  centralBlock.appendChild(numBtnDiv);
  }
}

// разобраться с блокированием кнопок
/*
function disableBtns(btnsCollection) {
  for (let num of btnsCollection) {
    num.disabled = 'true';
  }
}

function showBtns(btnsCollection) {
  for (let num of btnsCollection) {
    num.disabled = 'false';
  }
}
*/

function playGame() {
  tryCount = 0;
  
  rightAnswer = getRandomNum(maxValue);
  
  numCollection = document.querySelectorAll('.num_btn');

  for (let num of numCollection) {
    num.onclick = function() {

    userAnswer = +num.value;
            
    tryCount++;

    if (tryCount < maxTryCount) {
      if (userAnswer === rightAnswer) {
        gameInfoMessage.innerHTML = `<strong>Поздравляю, Вы угадали!</strong>`;
        returnElement(refreshBtn);
        record = document.createElement('p');
        record.className = 'record';
        // now = new Date();
        messageCount += 1;
        record.innerHTML = `${ messageCount }. Угадано число ${ rightAnswer } c ${ tryCount } попытки.<br /> ${ timeMessage }`;
        journal.appendChild(record);
        numCollection = null;
      } else if (userAnswer < rightAnswer) {
          gameInfoMessage.innerHTML = `Число ${ userAnswer } слишком маленькое.<br /> Осталось ${maxTryCount - tryCount} попыток`;

        } else if (userAnswer > rightAnswer) {
            gameInfoMessage.innerHTML = `Число ${ userAnswer } слишком большое.<br /> Осталось ${maxTryCount - tryCount} попыток`;
        }              
    } else if (tryCount >= maxTryCount) {
        if (userAnswer === rightAnswer) {
          gameInfoMessage.innerHTML = `<strong>Поздравляю, Вы угадали!</strong>`;
          returnElement(refreshBtn);
          record = document.createElement('p');
          record.className = 'record';
          // now = new Date();
          messageCount += 1;
          record.innerHTML = `${ messageCount }. Угадано число ${ rightAnswer } c ${ tryCount } попытки.<br /> ${ timeMessage }`;
          journal.appendChild(record);
          numCollection = null;
        } else {
            gameInfoMessage.innerHTML = `У Вас закончились попытки. Правильный ответ ${rightAnswer}`;
            returnElement(refreshBtn);
            record = document.createElement('p');
            record.className = 'record';
            // now = new Date();
            messageCount += 1;
            record.innerHTML = `${ messageCount }. Число ${ rightAnswer } не угадано после ${ tryCount } попыток.<br /> ${ timeMessage }`;
            journal.appendChild(record);
            disableBtns(numCollection);
            numCollection = null;
          }
        }
      }
    }

  removeElement(guessingNum);
  removeElement(quantityChooseBtn);
  gameInfoMessage.innerHTML = `Угадайте число от 1 до ${maxValue}`;
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
