/* Завдання 3
Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити */


async function fetchTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = await response.json();
  return todo;
}


async function fetchUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await response.json();
  return user;
}

async function run() {
  try {
    // just get todo + user
    const todo = await fetchTodo();
    console.log("Todo:", todo);

    const user = await fetchUser();
    console.log("User:", user);

    // Promise.all
    const allResult = await Promise.all([fetchTodo(), fetchUser()]);
    console.log("Promise.all result:", allResult);

    // Promise.race
    const raceResult = await Promise.race([fetchTodo(), fetchUser()]);
    console.log("Promise.race result:", raceResult);
  } catch (error) {
    console.log("Error:", error);
  }
}

run();