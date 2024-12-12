// ## 5 завдань на масиви

// ### 1. Підрахунок кількості елементів
// Порахуй, скільки разів кожен елемент з'являється у масиві.

// Вхідні дані:
// const arr = ["яблуко", "банан", "яблуко", "груша", "яблуко", "груша"];
// // Очікуваний результат:
// // { яблуко: 3, банан: 1, груша: 2 }
// ---

// ### 2. Пошук найбільшого числа
// Знайди максимальне число у масиві.

// Вхідні дані:

// const numbers = [4, 2, 9, 7, 5];
// const biggerNumber = Math.max(...numbers)
// console.log(biggerNumber);

// Очікуваний результат:
// // 9
// ---

// ### 3. Сортування масиву
// Відсортуй масив рядків за алфавітом.

// Вхідні дані:
// const words = ["груша", "яблуко", "банан", "ананас"];
// const sortWords = words.sort((a, b) => a.localeCompare(b));
// console.log(sortWords);

///// words.sort();////
// console.log(words);

// Очікуваний результат:
// // ["ананас", "банан", "груша", "яблуко"]
// ---

// ### 4. Перетворення масиву
// Перетвори масив чисел у масив їх квадратів.

// Вхідні дані:
// const numbers = [1, 2, 3, 4];
// const squares = numbers.map(number => number ** 2)
// console.log(squares);

// Очікуваний результат:
// // [1, 4, 9, 16]
// ---

// ### 5. Фільтрація елементів
// Залиш у масиві тільки слова, довжина яких більше 5 символів.

// Вхідні дані:
// const words = ["коротке", "довге", "дуже-довге", "ще"];
// const longerWords = words.filter(word => word.length > 5)
// console.log(longerWords);

// Очікуваний результат:
// // ["дуже-довге",'коротке',]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ### 1. Доступ до вкладених об'єктів
// Дістань назву міста зі структури даних.

// Вхідні дані:

// const user = {
//   name: "Олексій",
//   address: {
//     city: "Київ",
//     zip: 01001,
//   }
// };
// const findCity = user.address.city;
// console.log(findCity);

// Очікуваний результат:

// // "Київ"

// ---

// ### 2. Перетворення об'єкта в масив
// Перетвори об'єкт у масив його ключів.

// Вхідні дані:

// const person = {
//   name: 'Марія',
//   age: 25,
//   profession: 'дизайнер',
// };
// const objectKey = Object.keys(person);
// console.log(objectKey);

// Очікуваний результат:

// // ["name", "age", "profession"]

// ---

// ### 3. Додавання нового властивості
// Додай нову властивість isAdmin: true до об'єкта користувача.

// Вхідні дані:

// const user = { name: 'Іван', age: 30 };
// user.isAdmin = true;
// console.log(user);

// Очікуваний результат:

// // { name: "Іван", age: 30, isAdmin: true }

// ---

// ### 4. Пошук значення у масиві об'єктів
// Знайди користувача з іменем "Анна".

// Вхідні дані:

// const users = [
//   { name: 'Олег', age: 20 },
//   { name: 'Анна', age: 25 },
//   { name: 'Марія', age: 22 },
// ];
// const user = users.find(user => user.name === 'Анна');
// console.log(user.name);

// Очікуваний результат:

// // { name: "Анна", age: 25 }

// ---

// ### 5. Підрахунок значень у об'єкті
// Порахуй кількість властивостей в об'єкті.

// Вхідні дані:

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// const sumAllKeys = Object.keys(obj).length;
// console.log(sumAllKeys);

// Очікуваний результат:

// // 3
/////////////////////////////////////////////////////////////////////////////

// ### 1. Додай текст у елемент
// Додай текст "Привіт, світ!" у <div>.
// const greetingEl = document.getElementById("greeting")
// greetingEl.textContent = "Привіт, світ!"
// HTML:
// 
// JavaScript:
// // Ваш код
// Очікуваний результат (HTML після виконання):
// <div id="greeting">Привіт, світ!</div>
// ---

// ### 2. Видалення елемента
// Видали елемент із класом .remove-me.
// const removeMe = document.querySelector(".remove-me");
// removeMe.textContent = "";
// removeMe.classList.remove("remove-me");

// <div class="remove-me">Цей текст потрібно видалити</div>
// <div>Залишитись</div>
// JavaScript:
// // Ваш код
// Очікуваний результат (HTML після виконання):
// <div>Залишитись</div>
// ---

// ### 3. Зміна атрибута
// Змініть посилання у <a> на "https://google.com".

// HTML:
// <a id="link" href="#">Перейти</a>
// JavaScript:
// // Ваш код
// const linkEl = document.getElementById("link");
// linkEl.href = "https://google.com";
// Очікуваний результат (HTML після виконання):
// <a id="link" href="https://google.com">Перейти</a>1
// ---

// ### 4. Зміна стилів
// Зробіть фон <div> жовтим.
// const boxEl = document.getElementById("box");
// boxEl.style.background = "yellow";
// HTML:
// <div id="box" style="width: 100px; height: 100px;"></div>
// JavaScript:
// // Ваш код
// Очікуваний результат (HTML після виконання):
// <div id="box" style="width: 100px; height: 100px; background-color: yellow;"></div>
// ---

// ### 5. Додай список у контейнер
// Створи <ul> і додай до нього три елементи з текстом "Елемент 1", "Елемент 2", "Елемент 3".

// HTML:
// <div id="listContainer"></div>
// JavaScript:
// // Ваш код
