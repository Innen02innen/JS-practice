/*In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats with decimal part non equal to zero are considered UNeven for this kata.*/

/*У цьому ката ми передаємо число (n) у функцію.
Ваш код визначатиме, чи є передане число парним (чи ні).
Функція повинна повертати або «true», або «false».
Числа можуть бути додатними або від'ємними, цілими або числами з плаваючою комою.
Числа з плаваючою комою з десятковою частиною, не рівною нулю, вважаються непарними для цього ката.*/


function isEven(n) {
  if (!Number.isInteger(n)) {
    return false;
  }

  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Перевірка
console.log(isEven(2));
console.log(isEven(-4)); 
console.log(isEven(3));
console.log(isEven(2.5));
console.log(isEven(-6.2));