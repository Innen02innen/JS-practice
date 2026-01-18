/* Додаткове завдання 1
 Напишіть функцію, яка обчислює середнє арифметичне чисел у заданому списку (масиві).
Примітка: Якщо масив порожній, функція повинна повертати 0. */

function calculateAverage(numbers) {
 
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}