1. Напишіть функцію, яка приймає JSON рядок та повертає об'єкт JavaScript.
2. Використайте конструкцію try...catch, щоб перехопити помилку у випадку, якщо рядок не є валідним JSON.

**Приклад використання:**

console.log(parseJSON('{"name": "John", "age": 30}')); // повинно вивести об'єкт { name: 'John', age: 30 }

console.log(parseJSON('{"name": "John", "age":')); // повинно вивести помилку "Invalid JSON string"