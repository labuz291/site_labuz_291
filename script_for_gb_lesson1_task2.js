const TRAPEZOID_BASE_A = +prompt("Введите первое основание трапеции в см:");
const TRAPEZOID_BASE_B = +prompt("Введите второе основание трапеции в см:");
const TRAPEZOID_HEIGHT = +prompt("Введите высоту трапеции");

let TRAPEZOID_AREA = ((TRAPEZOID_BASE_A + TRAPEZOID_BASE_B) / 2) * TRAPEZOID_HEIGHT;

if(Number.isNaN(TRAPEZOID_AREA)) {
  alert("Данные введены некорректно");
} else {
  alert(`Площадь трапеции составляет: ${ TRAPEZOID_AREA } квадратных см`);
}
