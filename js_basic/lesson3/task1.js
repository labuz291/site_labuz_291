/*
1. Функции для работы с массивами.
a. Написать функцию, которая принимает в качестве параметра число n.
Результатом работы функции является массив из N элементов со значениями 1, 2, 3… n.
*/

const NUM_ENTERING = +prompt(`Введите число`)

function numericalSequence(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

let sequenceResult = numericalSequence(NUM_ENTERING);

/*
b. Написать функцию, которая принимает массив чисел.
Результатом работы функции является сумма чисел этого массива.
*/

const NUM_ARR = [14, 208, 17, 7, 44, 55, 144];

function sumOfArrNum(numArr) {
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return sum;
}

let sumResult = sumOfArrNum(NUM_ARR);

/*
c. Написать функцию, которая на вход получает массив целых чисел,
и в качестве результата возвращает максимальное число.

Вариант 1:
*/

function maxNumOfArr(numArr) {
  let max = [0];
  for (let i = 1; i < numArr.length; i++) {
    if (numArr[i] > max) {
      max = numArr[i];
    }
  }
  return max;
}

let maxNumResult = maxNumOfArr(NUM_ARR);

/*
Вариант 2:
*/

function maxNumOfArrByMath(numArr) {
  return Math.max(...numArr);
}

let maxNumResultByMath = maxNumOfArrByMath(NUM_ARR);

/*
d. Написать функцию, которая на вход получает массив целых чисел,
и в качестве результата возвращает минимальное число.

Вариант 1:
*/

function minNumOfArr(numArr) {
  let min = numArr[0];
  for (let i = 1; i < numArr.length; i++) {
    if (numArr[i] < min) {
      min = numArr[i];
    }
  }
  return min;
}

let minNumResult = minNumOfArr(NUM_ARR);

/*
Вариант 2:
*/

function minNumOfArrByMath(numArr) {
  return Math.min(...numArr);
}

let minNumResultByMath = minNumOfArrByMath(NUM_ARR);

/*
f. Написать функцию, которая на вход получает массив целых чисел,
и в качестве результата возвращает только четные числа из этого массива.
Чтобы определить четность числа, воспользуйтесь оператором для подсчета остатка от деления: x % 2.
Если остаток от деления числа на 2 равен 0, число будет четное.
*/

function findEvenNumbers(numArr) {
  const EVEN_NUMBERS_ARR = [];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
      EVEN_NUMBERS_ARR.push(numArr[i]);
    }
  }
  return EVEN_NUMBERS_ARR;
}

let evenNumbersResult = findEvenNumbers(NUM_ARR);

console.log(`Числовая последовательность из ${NUM_ENTERING} чисел: ${sequenceResult}`);
console.log(`Сумма чисел массива ${NUM_ARR} составляет: ${sumResult}`);
console.log(`Максимальным числом в массиве ${NUM_ARR} является: ${maxNumResult}`);
console.log(`Максимальное число с помощью Math.max: ${maxNumResultByMath}`);
console.log(`Минимальным числом в массиве ${NUM_ARR} является: ${minNumResult}`);
console.log(`Минимальное число с помощью Math.min: ${minNumResultByMath}`);
console.log(`Чётные числа из массива ${NUM_ARR} следующие: ${evenNumbersResult}`);
