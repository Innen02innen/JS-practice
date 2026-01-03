/*Завдання 3

1.Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
2.У функції треба поділити numerator на denominator і повернути результат.
3.Додайте валідацію в функції. У разі,
а.якщо denominator дорівнює 0
b. або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
4.Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, 
коли denominator дорівнює 0 або один з аргументів не є числом.
5.Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, 
виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.*/

function divide(numerator, denominator) {
  const isNumValid =
    typeof numerator === "number" &&
    !Number.isNaN(numerator) &&
    typeof denominator === "number" &&
    !Number.isNaN(denominator);

  if (!isNumValid) {
    throw new Error("Both numerator and denominator must be valid numbers.");
  }

  if (denominator === 0) {
    throw new Error("Denominator cannot be 0.");
  }

  return numerator / denominator;
}

// 1) Просвоїла різні значення
try {
  const result = divide(10, 2);
  console.log("Result:", result);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Робота завершена");
} 

// 2) denominator дорівнює 0
try {
  const result = divide(10, 0);
  console.log("Result:", result);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Робота завершена");
}

// 3) Один з аргументів не є числом
try {
  const result = divide("10", 2);
  console.log("Result:", result);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Робота завершена");
}
