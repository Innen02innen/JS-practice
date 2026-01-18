/*Завдання 1

1. Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.

2. В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. 
Додайте до класу EBook нову властивість, наприклад, "формат файлу". Сторіть метод printInfo для EBook таким чином 
щоб друкувалась вся доступна інформація про екземляр EBook 
(все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo

3.Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. 
В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.
Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання. 
Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)

4. Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і 
формат файлу як рядок ****та повертати екземпляр класу EBook */


export default class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Title must be a non-empty string");
    }
    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Author must be a non-empty string");
    }
    this._author = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (!Number.isInteger(value) || value < 0) {
      throw new Error("Year must be a valid integer");
    }
    this._year = value;
  }

  printInfo() {
    console.log(`"${this.title}" — ${this.author}, ${this.year}`);
  }

  static findOldestBook(books) {
    return books.reduce((oldest, book) =>
      book.year < oldest.year ? book : oldest
    );
  }
}