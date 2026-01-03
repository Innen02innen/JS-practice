/*Завдання 1

1. Створіть функцію handleNum яка буде приймати 3 параметри.
а.число
b.Колбек функцію яку треба викликати якщо передане число парне
c.Колбек функцію яку треба викликати якщо передане число непарне

2.Створіть ще дві функції які ви будете передавати у якості колбеків, наприклад handleEven та handleOdd. 
Кожна з них має виводити просте повідомлення в консоль. Наприклад handleEven буде виводити текст “number is even”, 
a handleOdd буде виводити текст “number is odd”

3.Викличте функцію handleNum і передайте в якості аргументів довільне число і дві функції які ви створили раніше*/


function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

function handleNum(num, onEven, onOdd) {
  if (typeof num !== "number" || Number.isNaN(num)) {
    console.log("Error: num must be a valid number");
    return;
  }

  if (num % 2 === 0) {
    onEven();
  } else {
    onOdd();
  }
}

handleNum(12, handleEven, handleOdd);
handleNum(7, handleEven, handleOdd);