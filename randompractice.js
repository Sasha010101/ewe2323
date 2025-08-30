// function getWords(str, length) {
//   return str.slice(3, length);
// }
// console.log(getWords('hello'));

// console.log(getWords('hello Sasha', 9));
// const fullName = 'Oleksandr';
// const name = fullName.slice(2, 5);
// console.log(name);

// const fullName = "oleksandr";
// const name = fullName.toUpperCase(1);
// console.log(name);

// function getStr(input, to) {
//   if (to === 'upper') {
//     return input.toUpperCase();
//   } else {
//     return input.toLowerCase();
//   }
// }
// console.log(getStr('oLeKsandr', 'lower'));
// console.log(getStr('maRiia', 'upper'));
// console.log(getStr('Polina', 'upper'));

// const str = 'Olekdsandr';
// const name = str.includes('ol');
// if (name) {
//   console.log('hello everybody');
// } else {
//   console.log('chao');
// }

// function getStr(fullName, end) {
//   if (fullName.endsWith(end)) {
//     return 'right inf';
//   } else {
//     return 'incorect';
//   }
// }
// console.log(getStr('index.html', '.tml'));
// console.log(getStr('java.script', '.script'));
// console.log(getStr('vue.ua', 'uah'));
// console.log(getStr('style.css', '.css'));

// const str = 'hello my world';
// const world = str.indexOf('my');
// console.log(world);

// function getFileName(file) {
//   let dotIndex = file.indexOf('.');
//   if (dotIndex !== -1) {
//     return file.slice(0, dotIndex);
//   }
//   return file;
// }
// console.log(getFileName('index.html'));
// console.log(getFileName('java.script'));
// console.log(getFileName('vue.ua'));
// console.log(getFileName('style.html'));

// function getWords(start, end) {
//   const fullName = start.trim();
//   const result = `${fullName}.${end}`;
//   return result;
// }
// console.log(getWords(' Oleksandr', 'txt'));

// let count = 0;

// while (count <= 30) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }
//

// function getNumbers(minNumber, maxNumber) {
//   let counter = minNumber;
//   while (counter < maxNumber) {
//     console.log(counter);

//     counter += 1;
//   }
// }
// getNumbers(20, 30);

// function calculateTotal(number) {
//   let total = 0;
//   let i = 1;
//   while (i <= number) {
//     total += i;
//     i += 1;
//   }
//   return total;
// }
// console.log(calculateTotal(17));
// console.log(calculateTotal(7));

// const age = 18;
// const type = age > 17 ? 'juniour' : 'adult';
// console.log(type);

// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 1; i <= number; i++) {
//     total += i;
//   }
//   return total;
// }
// console.log(calculateTotal(18));

// for (let i = 0; i <= 60; i += 5) {
//   console.log(i);
// }

// function calculateEvenTotal(number) {
//   let total = 0;
//   for (let i = 2; i <= number; i += 2) {
//     total += i;
//   }
//   return total;
// }
// console.log(calculateEvenTotal(9));

// const start = 6;
// const end = 17;
// let number;
// for (let i = start; i <= end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

// const arr = ['apple', 'peach', 'orange', 'jerry'];
// arr[3] = 'tomato';
// const array = arr;

// console.log(array.length);

// function getArr(arr) {
//   const lastElement = arr.length - 1;
//   console.log(lastElement);
//   const secontElement = arr[lastElement];
//   console.log(secontElement);
//   const result = [lastElement, secontElement];
//   return result;
// }
// console.log(getArr(['apple', 'peach', 'orange', 'jerry']));

// function getExtremeElements(array) {
//   if (array.length === 0) {
//     return 'empty';
//   }
//   return [array[0], array[array.length - 1]];
// }
// console.log(getExtremeElements(['peach', 12, 'tomato', 16]));

// const arr = ['peach', 12, 'tomato', 16];

// const arrStr = arr.join('-');

// const array = arrStr.split('-');
// console.log(array);

// function getWords(strings) {
//   const words = strings.join('+-+');
//   return words.split('+-+');
// }
// console.log(getWords(['peach', 12, 'tomato', 16]));

// function getArr(str) {
//   const words = str.join('-');
//   return words.split('-')[str.length - 1];
// }
// // console.log(getArr(['peach', 12, 'tomato', 16]));

// console.log(getArr(['Mango', 'hurries', 'to', 'the', 'train']));

// function calculateEngravingPrice(message, pricePerWord) {
//   const str = message.split(' ');
//   return str.length * pricePerWord;
// }
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'];
// console.log(planets.slice(2, planets.length)); // ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

// const fruits = ['apple', 'plum'];
// const arr = ['pear', 'orange', 'banana'];
// const array = arr.concat(fruits);
// console.log(array);

// function getArr(first, second, third) {
//     const words = second.concat(third, first);
//     return words;
// }
// console.log(getArr(['apple', 'plum'], ['pear', 'orange', 'banana'], ["fruits", "vegetables"]));

// function getSlice(array, value) {
//   const index = array.indexOf(value);
//   if (index !== -1) {
//     return array.slice(1, index + 1);
//   }

//   return [];
// }
// console.log(
//   getSlice(['Mango', 'Poly', 'Earth', 'Mars', 'Ajax', 'Venus'], 'Mars')
// );

// let array = [];
// for (let index = 0; index <= 6; index++) {
//     array.push(`${index}`);

// }
// console.log(array);

// const arr = array.join("+");
//  const arRay = arr.split("+")

// console.log(arRay);

// function createNumbers(min, max) {
//     const result = [];
//     for (let i = min; i < max; i++){
//     result.push(`${i}`);
//     }
//     return result
// }
// console.log(createNumbers(3, 22));

// function calculateTotalPrice(order) {
//   let total = 0;
//   for( let i = 0; i < order.length; i += 1) {
//    total += order[i];
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 4, 7]));

// function getNumbers(min, max, ) {
//     const result = []
//     for (let i = min; i <= max; i++) {
//         if (i % 5 === 1) {
//           result.push(i)

//         }

//     } return result;
// }
// console.log(getNumbers(4, 12, 16, 21));
//мін та макс. перші два числа.інше ігнор. маємо тільки 2 параметра//

// const fruits = ["apple", "peach", "banana", "orange"];
// if (fruits.includes("peach")){
//     console.log("we have enough");

// } else {
// console.log("sorry we don't have enough");

// }

// function getFruits(fruits, item) {
//     for (let i = 0; i < fruits.length; i++){
//         if (fruits[i] === item) {
//             return `We have  ${fruits[i]}`;
//         }
//     } return "Sorry we dont have this fruits";

//     }
// const fruits = ["apple", "peach", "banana", "orange"];

// console.log(getFruits(["apple", "peach", "banana", "orange"], "peach"));

// function getFruits(fruits, item) {
//     for (let fruit of fruits) {
//         if (fruit === item) {
//             return `We have  ${fruit}`;
//         }
//     }
//     return `Sorry we dont have ${item}`;
        
// }
// const fruits = ["apple", "peach", "banana", "orange"];

// console.log(getFruits(["apple", "peach", "banana", "orange"], "watermelon"));




// function getSameprosuct(arr1, arr2) {
//     let result = [];
//     for (let i = 0; i < arr1.length; i++){
//         if (arr2.includes(arr1[i])) {
//             result.push(arr1[i])
//         }
//     } return result;
// }
// console.log(getSameprosuct([1, 2, 3], [2, 4, 3]));

// function getSum(array) {
//     let sum = 0;
//     for (const arr of array) {
//         sum += arr;
//     }
//     return sum;
// }
// console.log(getSum([12, 4, 6, 6]));

// function getSameprosuct(arr1, arr2) {
//     let result = [];
//     for (const element of arr1) {
//         if (arr2.includes(element)) {
//             result.push(element);
//     }
// }return result
// }
// console.log(getSameprosuct([1, 2, 3], [2, 4, 3]));

// function getName(name = "Guest") {
//     console.log(`Hello, ${name}`);

// }

// console.log(getName("Ivan"));
// console.log(getName());
// console.log(getName("Tolik"));
// console.log(getName("Apolo"));


// function count(from, to, step = 3) {
//   console.log(`from: ${from}, to: ${to}, step: ${step}`);

//   for (let i = from; i <= to; i += step) {
//   console.log(i);

//   }
// }

// count(1, 15, 4); // "from: 1, to: 15, step: 4"
// count(1, 15);

// const multiply = function (x, y, z) {
//   console.log(x * y * z);
// };
// multiply(5,5,5)

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// book.author = "Andjey Sapkovski";
// const bookAuthor = book.author;
// console.log(bookAuthor);

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swimming", "music", "sci-fi"],
// };
// user.location.country = "Ukraine";
// const location = user.location.country;
// console.log(location);

// const hobbies = user.hobbies;
// console.log(hobbies[1]); // ["swimming", "music", "sci-fi"]

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// const nameAuthor = "author";
// // console.log(book.name"Author);
// console.log(book[nameAuthor]);

// console.log(book.price); // "The Last Kingdom"
// console.log(book["title"]); // "The Last Kingdom"

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.owner.address = "Kyivska 98";
// apartment.owner.location = {
//     city: "Kyiv",
//     street: "the best",
//     number: 26,
// };
// console.log(apartment);

// const person = "name";
// const human = "surname";
// const obj = {
//     [person]: "Apolo",
//     [human]: "Mhitarian"
// };
// console.log(obj[person]);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.owner.address = "Kyivska 98";
// apartment.owner.location = {
//     city: "Kyiv",
//     street: "the best",
//     number: 26,
// };


// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// apartment.owner.address = 'Kyivska 98';
// apartment.owner.location = {
//   city: 'Kyiv',
//   street: 'the best',
//   number: 26,
// };

// let keyy = [];
// let values = [];
// const objOne = Object.keys(apartment);
// for (let key of objOne) {
//   keyy.push(key);
//   values.push(apartment[key]);
// }
// console.log(keyy);
// console.log(values);

// function getObj(obj) {
//   let objKeys = Object.values(obj);
//   return objKeys.length;
// }
// const book = {
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
//   age: 38,
// };
// console.log(getObj(book));

// function getSumObj(obj) {
//   let sum = 0;
//   let salarys = Object.values(obj);
//   console.log(salarys);

//   for (let salary of salarys) {
//     sum += salary;
//   }
//   return sum;
// }
// console.log(getSumObj({ kiwi: 400, poly: 50, ajax: 850 }));

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// const first = [];
// const second = [];
// for (let color of colors) {
//   first.push(color.hex);
//   second.push(color.rgb);
// }
// console.log(first);
// console.log(second);

// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell' },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley' },
//   { title: 'The Dream of a Ridiculous Man', author: 'Fyodor Dostoevsky' },
// ];

// const authorToSearchFor = 'Robert Sheckley';

// for (const book of books) {
//   if (book.author === authorToSearchFor) {
//     console.log(book);
//     console.log(book.title);
//     console.log(book.author);
//     console.log(book.rating);

//   }
// }

// function getProductPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   for (let product of products) {
//     if (product.name === productName) {
//       return product.quantity;
//     }
//   }
//   return 'ZERo';
// }
// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Crispy'));

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// const element = [];
// for (let item of products) {
//   element.push(item.quantity);
// }
// console.log(element);

// const books = [
//   { title: 'The Last Kingdom', author: 'Bernard Cornwell', rating: 8 },
//   { title: 'Beside Still Waters', author: 'Robert Sheckley', rating: 16 },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 3,
//   },
// ];
// let sum = 0;
// for (let book of books) {
//   sum += book.rating;
// }
// console.log(sum / books.length);

// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   let propValues = [];
//   for (let product of products) {
//     if (propName in product) {
//       propValues.push(product[propName]);
//     }
//   }
//   return propValues;
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('surname'));
// console.log(getAllPropValues('price'));

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   for (let product of products) {
//     if (productName === product.name) {
//       return product.price * product.quantity;
//     }
//   }
//   return `We didn't find ${productName} `;
// }

// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Aloha'));
// console.log(calculateTotalPrice('Grip'));

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return 'List of all available potions';
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//     return `Hello ${potionName}`;
//   },
// };
// console.log(atTheOldToad.addPotion('Grigoriy'));

// const bookShelf = {
//   books: [
//     { title: 'The Last Kingdom', rating: 8 },
//     { title: 'The Mist', rating: 6 },
//   ],
//   changeRating(objName, newRating) {
//     for (const book of this.books) {
//       if (book.title === objName) {
//         book.rating = newRating;
//         return book;
//       }
//     }
//     return `We didn't fint "${objName}"`;
//   },
// };
// console.log(bookShelf.changeRating('The Mist', 9));
// console.log(bookShelf.changeRating('The Stick', 4));
// console.log(bookShelf.changeRating('The Last Kingdom', 4));

// //  приклад 1
// const numbers = [1, 2, 3];
// const newNumbers = [4, 5, 6, ...numbers];
// console.log(newNumbers);

// // приклад 2
// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4, 5, 6];
// console.log(newNumbers);

// function foo(num, ...args) {
//   let sum = num;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
// }
// console.log(foo(14, 30, 10));

// function etExtremeScores(rest) {
//   return {
//     best: Math.max(...rest),
//     worst: Math.min(...rest),
//   };
// }

// console.log(etExtremeScores([89, 64, 42, 17, 93, 51, 26, 14, 2, 1, 18, 78]));


// const list = document.querySelector(".usernames");
// const lastItem = document.createElement("li");
// lastItem.textContent = "Oleh";
// list.append(lastItem);

// const firstItem = document.createElement("li");
// firstItem.textContent = "Ivan";
// list.prepend(firstItem);

// const listElem = document.querySelector(".list .text");
// console.log(listElem.innerHTML);
// const link = document.querySelector(".list .title");
// link.innerHTML= `
//   New and
//   <a href="https://www.instagram.com" class="accent" target="_blank">
//     improved
//   </a>
//   title
// `;
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const listElem = document.querySelector(".list");
// const markup = technologies.map((technologies) => `<li class="js-item-">${technologies}</li>`).join("");
// console.log(markup);
// listElem.innerHTML=markup;



// const userObj = {
//     name: "Sasha",
//     age: 20,
//     city:"Lviv",
// }
// const listElem = document.querySelector(".list");
// const markup = `<h1>Name:${userObj.name}</h1>
//       <p>Age:${userObj.age}</p>
//       <p>City:${userObj.city}</p>
// `;
// listElem.innerHTML = markup;

// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies.map((newTechnologies) => `<li class="list-item">${newTechnologies}</li>`).join("");
// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("afterbegin", "<h2>Popular Technologies</h2>");
const formElems = document.querySelector(".js-form");
const ulElems = document.querySelector(".js-items");
const inputContacts = document.querySelector(".js-input-contacts")
const arrContacts = [];
formElems.addEventListener("submit", e => {
    e.preventDefault();
    const surname = e.target.elements.Surname.value;
    const name = e.target.elements.Name.value;
    const phone = e.target.elements.Phone.value;
    const objectContacts = {
        surname: surname,
        name: name,
        phone:phone,
    }
    const contactInf = getMarkup(objectContacts);
    ulElems.insertAdjacentHTML("afterbegin", contactInf);
    e.target.reset();
    arrContacts.push(objectContacts);
    
})
function getMarkup({surname, name, phone}){
    return ` <li class="box item hight">
            <p>FullName: ${surname} ${name}</p>
            <p>phone-number: ${phone}</p>
            <button class="form-control" data-type="show">SHOW MORE</button>
            <button class="form-control" data-type="delete">DELETE</button>
          </li>`
}

inputContacts.addEventListener("input", e => {
    const inputContacts = e.target.value;
    const copy = arrContacts.filter(element => element.phone.includes(inputContacts));
    const markup = copy.map(getMarkup).join("");
    ulElems.innerHTML = markup;
})