/* Завдання 4 (Опціонально)
Створіть 2 класи, які будуть мати в собі методи що реалізують функції з попереднього завдання. */

class TodoService {
  async fetchTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const todo = await response.json();
    return todo;
  }
}

class UserService {
  async fetchUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    return user;
  }
}

async function run() {
  try {
    const todoService = new TodoService();
    const userService = new UserService();

    const todo = await todoService.fetchTodo();
    console.log("Todo:", todo);

    const user = await userService.fetchUser();
    console.log("User:", user);

    const allResult = await Promise.all([
      todoService.fetchTodo(),
      userService.fetchUser(),
    ]);
    console.log("Promise.all result:", allResult);

    const raceResult = await Promise.race([
      todoService.fetchTodo(),
      userService.fetchUser(),
    ]);
    console.log("Promise.race result:", raceResult);
  } catch (error) {
    console.log("Error:", error);
  }
}

run();