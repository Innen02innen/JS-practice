/*Завдання 3

1.Створіть функцію checkOrder яка перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
available - доступна кількість товарів на складі
ordered - кількість одиниць товару в замовленні
1.Якщо товарів в наявності менше ніж замовлено — повернути рядок з повідомленням - “Your order is too large, we don’t have enough goods.”
2.Якщо ordered дорівнює нулю — повернути рядок з повідомленням - “Your order is empty”
3.У разі якщо товарів на складі вистачає — повернути рядок з повідомленням - “Your order is accepted”*/


function checkOrder(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty";
  }

  if (available < ordered) {
    return "Your order is too large, we don’t have enough goods.";
  }

  return "Your order is accepted";
}

console.log(checkOrder(10, 0));
console.log(checkOrder(5, 10));
console.log(checkOrder(10, 5));