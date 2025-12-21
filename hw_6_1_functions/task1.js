/*Завдання 1

1.Створіть функцію яка приймає два параметри: width і height.
2.Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
3.Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
4.Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)*/


// Function Declaration
function calculateAreaDeclaration(width, height) {
  return width * height;
}

console.log(calculateAreaDeclaration(5, 10)); 


// Function Expression
const calculateAreaExpression = function (width, height) {
  return width * height;
};

console.log(calculateAreaExpression(5, 10)); 


// Arrow Function
const calculateAreaArrow = (width, height) => {
  return width * height;
};

console.log(calculateAreaArrow(5, 10)); 

