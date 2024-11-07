// const arrNumbers = [1, 4, 22, 16, 21, 7, 19, 11, 99];
// arrNumbers.forEach((number) => {
//     if (number % 2 === 0) {
//          console.log(number * 4);
//     }

// });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Створити масив рядків - вивести методом map у консоль кожно строку, а поруч - її довжину
// Створити масив рядків - вивести методом map у консоль кожно строку, а поруч - її довжину
// const arrStrings = ["JS", "React", "STB", "apple", "peach", "carrot", "mouse"]
// arrStrings.map((str) => {
//     console.log(str.length, str);
// });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Створити масив чисел - та вивести у консоль створений за допомогою методу filter масив чисел , у якому числа більше 10
// const arrNumbers = [1, 4, 22, 16, 21, 7, 19, 11, 99];
// let newArr = arrNumbers.filter((number) => number > 10
// )
// console.log(newArr);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Створити масив рядків - відфільтрувати їх та свторити новий масив методом filter куди війдуть тільки ті рядки, довжина яких більше 5

// const arrStrings = ["JS", "React", "STB", "apple", "peaches", "carrot", "mouse"];
// let newArr = arrStrings.filter((str) => str.length > 5)
// console.log(newArr);
///////////////////////////

// Створити масив булеан, строк та чисел - методом filter свторити новий масив який буде містити тільки числа\
// const newArr = [12, "peach", true, 33, false, "apple"];
// let arrNumbers = newArr.filter((numbers) => {
//     if (typeof (numbers) === "number") {
//         console.log(numbers);
//         return numbers;

//     }
// });
// console.log(arrNumbers);
///////////////////////////////////////////////
// Створити масив об'єктів та вивести у консоль тільки ті значення поля name юзерів вік яких більше за 20.

// let users = [
//     {
//         name: 'Anya',
//         age: 21,
//     },
//     {
//         name: 'Masha',
//         age: 19,
//     },
//     {
//         name: 'Dasha',
//         age: 18,
//     },
//     {
//         name: 'Melisa',
//         age: 22,
//     },
//     {
//         name: 'Krisstina',
//         age: 27,
//     },
//     {
//         name: 'Yulya',
//         age: 19,
//     },
// ];
// users.forEach(({age, name}) => {
//     if (age > 20) console.log(name);
// });
// Створити масив чисел  - створити з нього новий масив який буде скадатись з чисел які діляться на 3 та на 2 без остачі
// const arrNumbers = [1, 4, 22, 36, 21, 7, 18, 11, 99];
// let newNumber = arrNumbers.filter(numbers => numbers % 3 === 0 && numbers % 2 === 0);
// console.log(newNumber);

//////////////////////////////////////////////////////1234567890////////////////////////
//  - Завдання: Написати функцію, яка повертає масив імен активних користувачів, старших за 18 років.
//    - Очікуваний результат: ['Ivan', 'Maria']
//      const users = [
//        { name: 'Ivan', age: 20, isActive: true },
//        { name: 'Anna', age: 17, isActive: true },
//        { name: 'Pavel', age: 22, isActive: false },
//        { name: 'Maria', age: 19, isActive: true },
//      ];

// function getOldUsers() {
//     return users.filter(({age}) => age > 18).map(({name}) => name)
// }
// console.log(getOldUsers(users));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Завдання: Написати функцію, яка обчислює загальну суму цін всіх продуктів у масиві.
//    - Очікуваний результат: 2500
//  const products = [
//    { productName: 'Laptop', price: 1200 },
//    { productName: 'Phone', price: 800 },
//    { productName: 'Tablet', price: 500 },
//  ];
// function getTotalSum(products) {
//          return products.reduce((sum, product) => sum += product.price, 0);
// };
// console.log(getTotalSum(products));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  - Завдання: Реалізувати функцію, яка шукає об'єкт за id і повертає title знайденого об'єкта.
//    - Приклад виклику: findTitleById(items, 2)
//    - Очікуваний результат: 'Pen'

//      const items = [
//        { id: 1, title: 'Book', description: 'A mystery novel' },
//        { id: 2, title: 'Pen', description: 'A blue ink pen' },
//        { id: 3, title: 'Notebook', description: 'A5 lined notebook' },
//      ];
// function findTitleById(ID) {
//          return items.find(({id}) => ID === id).title
//      }
// console.log(findTitleById(2));

//   - Завдання: Написати функцію, яка сортує книги в порядку спадання за роком видання.
//    - Очікуваний результат: Масив книг, відсортований від новіших до старіших.
//      const books = [
//        { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
//        { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//        { title: '1984', author: 'George Orwell', year: 1949 },
//      ];
// function sortBooks(books) {
//     return books.sort((a, b) => b.year - a.year);
//      }
// console.log(sortBooks(books));

//   - Завдання: Написати функцію, яка повертає новий масив з об'єктами формату { fullName: 'Ivan Ivanov', age: 30 }.
//    - Очікуваний результат:
//      const people = [
//        { firstName: 'Ivan', lastName: 'Ivanov', age: 30 },
//        { firstName: 'Anna', lastName: 'Petrova', age: 25 },
//      ];
// function getNewArr(people) {
//          return people.map(({firstName, lastName, age}) => ({age, fullName:`${firstName + ' ' + lastName}`}))
//      }
// console.log(getNewArr(people));

// 1. Виведення чисел до N
//    - Вхідні дані: N = 5
//    - Завдання: Написати цикл for, який виведе числа від 1 до N.
//    - Очікуваний результат: 1, 2, 3, 4, 5

// for (let index = 1; index <= 5; index++) {
//     console.log(index);
// }

// 2. Підрахунок суми чисел
//    - Вхідні дані:
//      - Не потребує додаткових даних, рахуємо від 1 до 100.
//    - Завдання: Використовуючи цикл for, обчислити суму всіх чисел від 1 до 100.
//    - Очікуваний результат: 5050
// let totalSum= 0;
// for (let i = 1; i <= 100; i++){
//     totalSum += i;
// }
// console.log(totalSum);

// 3. Перевірка простого числа
//    - Вхідні дані: N = 7
//    - Завдання: Написати функцію, яка перевіряє, чи є число N простим.
//    - Очікуваний результат: true (оскільки 7 — просте число)
// function getSimpleNumber(number) {
//     for (let i = 2; i < number; i++){
//         if (number % i === 0) {
//             return false;
//         }

//     }
//     return true;
// }
// console.log(getSimpleNumber(3));
// 4. Пошук максимального значення в масиві
//    - Вхідні дані:
//  - Завдання: Реалізувати функцію, яка знаходить найбільше число в масиві.
//    - Очікуваний результат: 98

// const numbers = [10, 23, 45, 2, 98, 12];
// let maxNumber = numbers[0];

// function getBiggerNumber(numbers) {
//     for (let i = 0; i < numbers.length; i++){
//         if (numbers[i] > maxNumber) {
//             maxNumber = numbers[i];
//   }
//     }
//     return maxNumber;
// }
// console.log(getBiggerNumber(numbers));

// 1. Виведення чисел до N
//    - Вхідні дані: N = 5
//    - Завдання: Написати цикл for, який виведе числа від 1 до N.
//    - Очікуваний результат: 1, 2, 3, 4, 5
// const N = 5;

// for (let i = N; i >= 1; i--) {
//     console.log(i);
// }

// 1. Перебір властивостей об'єкта
//    - Вхідні дані:

//      const student = { name: 'Ivan', age: 20, isActive: true }
// for (let key in student) {
//     console.log(`${key}: ${student[key]}`);

// };

//    - Завдання: Вивести всі ключі та значення цього об'єкта.
//    - Очікуваний результат:

//      name: Ivan
//      age: 20
//      isActive: true

// 2. Підрахунок кількості властивостей
//    - Вхідні дані:

// const obj = { name: 'Ivan', age: 20, city: 'Kyiv' };
// let entries = Object.entries(obj).length;
//console.log(Object.entries(obj).length);
// console.log(entries.length);
// let count = 0;

// for (let key in obj) {
//   count++;
// }

// console.log(count);

// 3. Фільтрація властивостей за типом
//    - Вхідні дані:
// let a = 'test';
// let aType = typeof(a);//typeof a; -> 'string'
// let test = {};
// test.street = 20
// test['city'] = 'Kiyv';
// result[age] = 15
// const data = { name: "Ivan", age: 20, city: "Kyiv", score: 15 };
// let result = {};
// for (let key in data) {
//     if (typeof data[key] === "number") {
//     result[key] = data[key]
// }
// }
// console.log(result);
//    - Завдання: Повернути новий об'єкт з тільки числовими властивостями.
//    - Очікуваний результат:

//      { age: 20, score: 15 }
// 4. Копіювання об'єкта
//    - Вхідні дані:

const person = { name: "Ivan", age: 20, city: "Kyiv", test: [1, 2, 3, 4] };
let copyPerson = { ...person }; //shalow copy - не глибока копія
// copyPerson = { name: "Ivan", age: 20, city: "Kyiv", test: [1, 2, 3, 4] };
// person.test.push('test');
// copyPerson.test.push('some text value')
// console.log("person", person);
// console.log("copyPerson", copyPerson);

// let secCopy = structuredClone(person); //deep copy - глибока копія - робить нові посилання для глибоко вкладених масивів чи об'єктів
// person.test.push('copied by shalow copy');
// console.log("secCopy", secCopy);
// console.log("person", person);

//    - Завдання: Повернути новий об'єкт, що є копією вихідного.
//    - Очікуваний результат:

//      { name: 'Ivan', age: 20, city: 'Kyiv' }
// let test = { name: "User" };
// let test2 = { name: "User" };
// console.log(test === test2);
