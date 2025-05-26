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

// const person = { name: "Ivan", age: 20, city: "Kyiv", test: [1, 2, 3, 4] };
// let copyPerson = { ...person }; //shalow copy - не глибока копія
// copyPerson = { name: "Ivan", age: 20, city: "Kyiv", test: [1, 2, 3, 4] };
// person.test.push('test');
// copyPerson.test.push('some text value')
// console.log("person", person);
// console.log("copyPerson", copyPerson);

// const person = { name: "Ivan", age: 20, city: "Kyiv", test: [1, 2, 3, 4] };
// let copyPerson = { ...person }; //shalow copy - не глибока копія
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

//      { name: 'Ivan', age: 20, city: 'Kyiv' }
// let test = { name: "User" };
// let test2 = { name: "User" };
// console.log(test === test2);

//////////////////////////////////////////////////////////////
// 1. Фільтрація чисел більших за 10
//    - Вхідні дані:

// const numbers = [5, 12, 7, 20, 15, 2];
// function getBiggerNumber(arr) {
//          return arr.filter(num => num >10)
// }
//      console.log(getBiggerNumber(numbers));

//    - Завдання: Напишіть функцію, яка повертає новий масив з числами, що більші за 10.

// 2. Пошук максимального числа в масиві
//    - Вхідні дані:

// const numbers = [3, 15, 7, 29, 10];
// function maxNumber(arr) {
//          return Math.max(...numbers)
// }
//      console.log(maxNumber(numbers));

//    - Завдання: Напишіть функцію, яка знаходить максимальне число в масиві.
/////////////////////////

// 3. Обчислення суми всіх елементів масиву
//    - Вхідні дані:

//      const numbers = [1, 2, 3, 4, 5];
// function getSumNumbers(arrNumbers) {
//     return arrNumbers.reduce((sum, number)=> sum + number, 0)
// }
// console.log(getSumNumbers(numbers));

//    - Завдання: Напишіть функцію, яка повертає суму всіх чисел у масиві.

////////////////////
// 4. Перетворення масиву в рядок
//    - Вхідні дані:

// const words = ["apple", "banana", "cherry"];
// function getString(arr) {
//      return arr.join(",")
//      }
//      console.log(getString(words));
//    - Завдання: Напишіть функцію, яка перетворює масив слів у один рядок, розділений комами.

// 5. Видалення елементів масиву за індексом
//    - Вхідні дані:

// const arr = [1, 2, 3, 4, 5];
// const indexToRemove = 2;
// function deleteNumberByIndex(number) {
//   number.splice(indexToRemove, 2)
// }
// console.log(deleteNumberByIndex(arr));
// console.log(arr);

//    - Завдання: Напишіть функцію, яка видаляє елемент масиву за вказаним індексом.

//////////////////////////////////////////////////////////////////////
// 1. Зміна тексту елемента за ID
//    - Завдання: Напишіть функцію, яка змінює текст елемента на сторінці за
// його id на "Hello World".
// function changeString(str) {
//     let textEl = document.getElementById("text");
//     textEl.textContent = "Hello World"

// }
// console.log(changeString(''));
// 2. Додавання класу до елемента при кліку
//    - Завдання: Напишіть функцію, яка додає клас "clicked" до елемента при кліку на нього.
// const buttonEl = document.querySelector(".button");

// function addClicked() {
//     buttonEl.addEventListener("click", event => {
//         buttonEl.classList.add("clicked")
//     })
// }
// addClicked();
////////////////////////////
// 3. Зміна фону сторінки на клік кнопки
//    - Завдання: Напишіть функцію, яка змінює фон сторінки на червоний при кліку на кнопку з id="changeColor".
// const bodyColorEl = document.getElementById("bodyColor");
// let changeColorBtn = document.getElementById("changeColor") ;

// changeColorBtn.addEventListener("click", e => {
//         bodyColorEl.style.background = "red"
//     })

// 4. Таблиця: зміна стилю рядка на hover
//    - Завдання: Напишіть JavaScript, який змінює фон рядка таблиці на сірий при наведенні миші на цей рядок.
// const textEl = document.querySelector(".text");
// textEl.addEventListener("mouseover", e => {
//     textEl.style.background = "blue"
// })
///////////////////////////////////////////////////////////////
// 1. Фільтрація чисел більше 10
// const numbers = [4, 12, 7, 20, 15, 3];
// const filtered = numbers.filter(num => num > 10);
// console.log(filtered);
///////////////////////////////////////////////////////////////
// 2. Отримання імен користувачів

//    const users = [
//      { name: 'Alice', age: 25 },
//      { name: 'Bob', age: 30 },
//      { name: 'Charlie', age: 35 }
// ];
// const names = users.map(user => user.name);
// console.log(names);
///////////////////////////////////////////////////////////////
// 3. Перевірка наявності значення в масиві
//  const fruits = ['apple', 'banana', 'cherry', 'date'];
// const fruitToCheck = 'apple';
// const isFruit = fruits.includes(fruitToCheck);
// console.log(isFruit);
///////////////////////////////////////////////////////////////
// 4. Підрахунок суми чисел

//    const numbers = [10, 20, 30, 40];
// const sum = numbers.reduce((total, num) => total + num, 0)
// console.log(sum);
// 5. Сортування об’єктів за віком

//    const people = [
//      { name: 'Alice', age: 25 },
//      { name: 'Bob', age: 20 },
//      { name: 'Charlie', age: 35 }
// ];
// const sortAge = people.sort((a, b) => a.age - b.age);
// console.log(sortAge);

// Результат: [
//   { name: 'Bob', age: 20 },
//   { name: 'Alice', age: 25 },
//   { name: 'Charlie', age: 35 }
// ]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Зміна стилю елемента при кліку: Створити кнопку,
//     при натисканні на яку змінюється фон будь -
//         якого елемента(наприклад, `div`) на інший колір.
// const titletextEl = document.querySelector(".titletext");
// const buttonEl = document.getElementById("button");
// buttonEl.addEventListener("click", e => {
//     titletextEl.style.background = "red";
// })
///////////////////////////////////////////////////////////////
// 2. Текст при наведенні: Створити елемент(наприклад, `p`),
//     і при наведенні на нього мишкою текст змінюється на інший.При виході мишки повертається початковий текст.
// const paragraph = document.createElement("p")
// paragraph.textContent = "Hello world";
// document.body.prepend(paragraph)
// paragraph.addEventListener("mouseover", e => {
//     paragraph.textContent = "Текст змінено"
// });
// paragraph.addEventListener("mouseleave", e => {
//     paragraph.textContent = "Hello world"
// })
// 4. Додавання та видалення елементів: Створити кнопку,
//     яка додає новий елемент(наприклад, li до списку).
//     Додати ще одну кнопку, яка видаляє останній доданий елемент.
// const buttonEl = document.getElementById('button');
// const buttonelement = document.getElementById("button_element");
// const newElement = document.getElementById("new_element");

// buttonelement.addEventListener("click", e => {
//     let item = document.createElement("li")//створили елемент
//     item.textContent = "Change me";
//     newElement.append(item);//змінили текст
// })

// buttonEl.addEventListener("click", e => {
//     // let arr = [1, 2, 3, 4];
//     // console.log(arr[arr.length-1]);

//     // // 4?
//     // console.log(newElement.children[newElement.children.length - 1]);

//     let item = newElement.children[newElement.children.length - 1] //останній створений
//     console.log('item', item);
//     newElement.removeChild(item)
// })
///////////////////////////////
// 5. Зміна класу на прокручуванні:
//  Додати до сторінки елемент(наприклад, `header`),
//     який змінює колір або клас при прокручуванні сторінки вниз на певну відстань.
// const headerEl = document.querySelector(".header");
// window.addEventListener('scroll', e => {
//     console.log('scrolling');
//     headerEl.style.background = "blue"

// })
/* 

Створи HTML-елемент <p> з текстом і за допомогою JavaScript зміни його текст на інший.( по кліку )
*/
// let texxtEl = document.getElementById('texxt');
// texxtEl.addEventListener('click', e => {
//   texxtEl.style.color = 'skyblue';
//   texxtEl.textContent = 'Good morning World';
// });

/* 
Створи кнопку, яка приховує або показує текст, коли на неї натискають.
*/
// let textEl = document.getElementById('text');
// let buttonEl = document.getElementById('button');
// let isTextVisible = true;
// buttonEl.addEventListener('click', e => {
//   //DRY  - dont repeat yourself
//   if (isTextVisible) {
//     textEl.style.display = 'none';
//     // isTextVisible = false;
//   } else {
//     textEl.style.display = 'block';
//     // isTextVisible = true;
//   }
//   isTextVisible = !isTextVisible;
// });

/* 
Додай кнопку, яка рахує кількість натискань і виводить це число у параграфі.
*/
// let countButtonEl = document.getElementById('countButton');
// let counterEl = document.getElementById('counter');
// let count = 0;
// countButtonEl.addEventListener('click', e => {
//   //   counterEl.textContent = ++count;
//   counterEl.textContent = Number(counterEl.textContent.trim()) + 1;
// });
/* 
Створи просту форму з полем для вводу Логіну юзера. 
Додай перевірку, чи є введений текст довший за 4 символа
і виводь відповідне повідомлення у тег з з id errorMessage.*/
// let inputEl = document.getElementById('email');
// let errorMessageEl = document.getElementById('errorMessage');
/* 
Додай перевірку, чи є введений текст довший за 4 символа
якщо текст коротший за 3 символа - виводимо в логи текст ( текст короткий)
якщо ж довжина тексту = 4 або більше, то виводимо в логи - текст нормальний
 */
/* 
і виводь відповідне повідомлення у тег з з id errorMessage
якщо текст коротший за 3 символа - виводимо в  у тег текст ( текст короткий)
якщо ж довжина тексту = 4 або більше, то виводимо в  у тег  - текст нормальний
*/
/* 
якщо текст короткий - повідомлення буде червоного кольору
якщо текст  окей - скриваємо повідомлення 
і робимо зелену рамку для інпуту
boxShadow = '0px 0px 10px green';
*/
// inputEl.style.outline = '0px';

// inputEl.addEventListener('input', function (e) {
//   if (this.value.trim().length >= 4) {
//     errorMessageEl.style.display = 'none';
//     this.style.boxShadow = '0px 0px 10px green';
//   } else if (this.value.trim().length <= 3) {
//     this.style.boxShadow = 'none';
//   }
// });

// inputEl.addEventListener('blur', function () {
//   if (this.value.trim().length <= 3) {
//     errorMessageEl.textContent = 'Текст короткий';
//     this.style.boxShadow = 'none';
//   }
// });


// const isBlocked = true;
// const canChat = !isBlocked;

// if (canChat) {
//   console.log('Can type in chat!');
// } else {
//   console.log('Blocked from typing in chat!');
// }
// function checkName(fullName, firstName) {
//   return fullName.toLowerCase().includes(firstName.toLowerCase())
// }
// console.log(checkName('Ivan Ivanov', 'Anatoliy'));
// console.log(checkName('Oleg Icanov', 'Oleg'));
// console.log(checkName('Anton Ivanov', 'Anatoliy'));
// console.log(checkName('Oleksiy Ivanov', 'Oleksiy'));
// function getLastWordsOfName(name, words) {
//   if (name.endsWith(words)) {
//     return "everything correct"
//   } else {
//     return "incorect"
//   }
// }
// console.log(getLastWordsOfName("Sasha", "ash"));
// console.log(getLastWordsOfName("Masha", "asha"));
// console.log(getLastWordsOfName("Pasha", "sh"));
// console.log(getLastWordsOfName("Dasha", "asha"));
// const message = "Goog morning world";
// const index = message.indexOf("morning")
// console.log(index);
// function getFileName(file) {
//   const words = file.indexOf(".");
//   if (words !== -1) {
//     return file.slice(0, words).trim(file)
//   } else {
//     return file.trim(file);
//   }
// }
// console.log(getFileName(" js"));
// console.log(getFileName(" react.com "));
// console.log(getFileName("css.com"));
// console.log(getFileName(" vue.com" ));
// function getInf(name, surname) {
//   return `Hello person: ${name.trim(name)} ${surname.trim(surname)}}`
// }
// console.log(getInf("   Sasha ", "Lymanets   "));
// console.log(getInf("   Ivan  ", "   Ivanov  "));
// console.log(getInf("  Oleg ", "  Gudz  "));
// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//     console.log(clientCounter);
//     clientCounter += 2;
// }
// function getNumbers(first, second) {
//     let counter = first;
//     while (counter < second) {
//         console.log(counter);
//         counter += 1;
        
//     }
// }
// console.log(getNumbers(8,24));
// function getNumber(number) {
//     let total = 0;
//     let i = 1;
//     while (i <= number) {
//         total += i;
//         i += 1;
//     }
//     return total;
// }
// console.log(getNumber(2));
// console.log(getNumber(5));
// console.log(getNumber(6));
// console.log(getNumber(7));

// function findNumber(start, end, divisor) {
//   for(let i = start; i <= end; i += 1){
//     if(i % divisor === 0 ) {
//      return i;
//     }
//   }
   
// }
// function getElements(array) {
//     if (array.length === 0) {
//         return [];
//     }
//     return [array[0], array[array.length - 1]];
// }
// console.log(getElements([1, 2, 3, 4, 5]));
// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]
// const c = b;
// c[1] = "Jacob";
// console.log(a); // ["Mango", "Jacob"]
// console.log(b)
// console.log(c);
// const ar = [1, 2, 3];
// const ar1 = [5, 6, 89];
// const res = ar.concat(ar1);

// const ar2 = res.join("-.-");


// const ar3 = ar2.split("-.-")
// console.log(ar3);

