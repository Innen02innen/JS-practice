/* Завдання 5
1. Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
2. Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
3. Зробіть деструктуризацію в циклі */

const users = [
    {name: "Inna", email: "test@gmail.com", age: 36},
    {name: "Linda", email: "linda@gmail.com", age: 18},
    {name: "Roma", email: "roma@gmail.com", age: 6},
];

for (const { name, email, age } of users) {
    console.log("User:");
    console.log("  name:", name);
    console.log("  email:", email);
    console.log("  age:", age);
}