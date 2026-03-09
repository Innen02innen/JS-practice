/* Завдання 2

В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом

<https://jsonplaceholder.typicode.com/todos/1>
Функція повинна повертати як результат Promise що повертає об’єкт todo
Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом

<https://jsonplaceholder.typicode.com/users/1>
Функція повинна повертати як результат Promise що повертає об’єкт user
Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2.
 Присвойте значення отримані від цих виразів до змінних */


function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json());
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json());
}

fetchTodo()
  .then((todo) => {
    console.log("Todo:", todo);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

fetchUser()
  .then((user) => {
    console.log("User:", user);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

const allResult = Promise.all([fetchTodo(), fetchUser()]);

allResult.then((result) => {
  console.log("Promise.all result:", result);
});

const raceResult = Promise.race([fetchTodo(), fetchUser()]);

raceResult.then((result) => {
  console.log("Promise.race result:", result);
});