/*Створи метод, який перевіряє, чи рядок написаний усіма великими літерами (ALL CAPS).

Рядок вважається ALL CAPS, якщо він не містить жодної малої літери.
Якщо в рядку взагалі немає літер — він також вважається ALL CAPS.*/

String.prototype.isUpperCase = function () {

  return this.toString() === this.toString().toUpperCase();
};

console.log("c".isUpperCase());
console.log("C".isUpperCase()); 
console.log("hello I AM DONALD".isUpperCase()); 
console.log("HELLO I AM DONALD".isUpperCase()); 
console.log("123 !!!".isUpperCase()); 