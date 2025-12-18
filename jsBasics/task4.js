//Завдання 4: Обчислення площі та об'єму

/*Завдання 4.1
π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа
Створіть змінну radius і присвойте їй числове значення радіуса кола.
Обчисліть площу кола за формулою π * radius^2 і виведіть результат.*/

const radius = 5.55;
const circleArea = Math.PI * radius ** 2;
console.log("Circle area:", circleArea.toFixed(2));


/*Завдання 4.2
Створіть змінну length і присвойте їй числове значення довжини прямокутника.
Створіть змінну width і присвойте їй числове значення ширини прямокутника.
Обчисліть площу прямокутника за формулою length * width і виведіть результат.*/

const length = 10;
const width = 4.02;
const rectangleArea = length * width;
console.log("Rectangle area:", rectangleArea.toFixed(2));


/*Завдання 4.3
Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
Створіть змінну height і присвойте їй числове значення висоти циліндра.
Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
Округліть кожне отримане значення до 2 значень після крапки */

const radiusCylinder = 3;
const height = 7;
const cylinderVolume = Math.PI * radiusCylinder ** 2 * height;
console.log("Cylinder volume:", cylinderVolume.toFixed(2))