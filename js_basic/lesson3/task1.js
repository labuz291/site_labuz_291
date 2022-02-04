/*
1. Функции для работы с массивами.
a. Написать функцию, которая принимает в качестве параметра число n.
Результатом работы функции является массив из N элементов со значениями 1, 2, 3… n.
*/

let numEtering = +prompt(`Введите число`)

function numericalSequence(n) {
  let arr = [];
  for (var i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

let sequenceResult = numericalSequence(numEtering);

/*
b. Написать функцию, которая принимает массив чисел.
Результатом работы функции является сумма чисел этого массива.
*/

let numArr = [14, 208, 17, 7, 44, 55, 144];

function sumOfArrNum(numArr) {
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return sum;
}

let sumResult = sumOfArrNum(numArr);

/*
c. Написать функцию, которая на вход получает массив целых чисел,
и в качестве результата возвращает максимальное число.

Вариант 1:
*/

function maxNumOfArr(numArr) {
  let max = [0];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > max) {
      max = numArr[i];
    }
  }
  return max;
}

let maxNumResult = maxNumOfArr(numArr);

/*
Вариант 2:
*/

function maxNumOfArrByMath(numArr) {
  return Math.max(...numArr);
}

let maxNumResultByMath = maxNumOfArrByMath(numArr);

/*
d. Написать функцию, которая на вход получает массив целых чисел,
и в качестве результата возвращает минимальное число.

Вариант 1:
*/

function minNumOfArr(numArr) {
  let min = numArr[0];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < min) {
      min = numArr[i];
    }
  }
  return min;
}

let minNumResult = minNumOfArr(numArr);

/*
Вариант 2:
*/

function minNumOfArrByMath(numArr) {
  return Math.min(...numArr);
}

let minNumResultByMath = minNumOfArrByMath(numArr);

/*
f. Написать функцию, которая на вход получает массив целых чисел,
и в качестве результата возвращает только четные числа из этого массива.
Чтобы определить четность числа, воспользуйтесь оператором для подсчета остатка от деления: x % 2.
Если остаток от деления числа на 2 равен 0, число будет четное.
*/

function findEvenNumbers(numArr) {
  let evenNumbersArr = [];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
      evenNumbersArr.push(numArr[i]);
    }
  }
  return evenNumbersArr;
}

let evenNumbersResult = findEvenNumbers(numArr);

console.log(`Числовая последовательность из ${numEtering} чисел: ${sequenceResult}`);
console.log(`Сумма чисел массива ${numArr} составляет: ${sumResult}`);
console.log(`Максимальным числом в массиве ${numArr} является: ${maxNumResult}`);
console.log(`Максимальное число с помощью Math.max: ${maxNumResultByMath}`);
console.log(`Минимальным числом в массиве ${numArr} является: ${minNumResult}`);
console.log(`Минимальное число с помощью Math.min: ${minNumResultByMath}`);
console.log(`Чётные числа из массива ${numArr} следующие: ${evenNumbersResult}`);
