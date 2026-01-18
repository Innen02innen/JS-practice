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


import Book from "./Book.js";

export default class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("File format must be a non-empty string");
    }
    this._fileFormat = value;
  }

  printInfo() {
    console.log(
      `"${this.title}" — ${this.author}, ${this.year} | Формат: ${this.fileFormat}`
    );
  }

  static fromBook(book, format) {
    return new EBook(book.title, book.author, book.year, format);
  }
}