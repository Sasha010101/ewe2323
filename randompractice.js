// function getWords(str, length) {
// return str.slice(1, length);
// }
// console.log(getWords("hello"));


// console.log(getWords("hello Sasha", 9));
// const fullName = "Oleksandr";
// const name = fullName.slice(2, 5);
// console.log(name);

// const fullName = "oleksandr";
// const name = fullName.toUpperCase(1);
// console.log(name);


// function getStr(input, to) {
//     if (to === "upper") {
//         return input.toUpperCase();
//     }
//     else {
//         return input.toLowerCase();
//     }
// }
// console.log(getStr("oLeKsandr", "lower"));
// console.log(getStr("maRiia", "upper"));
// console.log(getStr("Polina", "upper"));
// const str = "Olekdsandr";
// const name = str.includes("ol");
// if (name){
//     console.log("hello everybody");
// }
// else{
// console.log("chao");

// }
// function getStr(fullName, end) {
//     if (fullName.endsWith(end)) {
//         return "right inf"
//     } else {
//         return "incorect"
//     }
// }
// console.log(getStr("index.html", ".tml"));;
// console.log(getStr("java.script", ".script"));
// console.log(getStr("vue.ua", "uah"));
// console.log(getStr("style.css", ".css"));
// const str = "hello my world";
// const world = str.indexOf("me");
// console.log(world);

// function getFileName(file) {
// let dotIndex = file.indexOf(".")
//   if(dotIndex !== -1){
//     return file.slice(0, dotIndex)
//   }
//   return file;
// }
//   function getWords(start, end) {
//         const fullName = start.trim();
//         const result = `${fullName}.${end}`;
//         return result
//     }
//     console.log(getWords("Oleksandr","txt"));

// let count = 0;

// while (count <= 30) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }
// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }
// function getNumbers(minNumber, maxNumber) {
//     let counter = minNumber;
//     while (counter < maxNumber) {
//         console.log(counter);
        
//         counter += 1;
        
//     }
// }
// getNumbers(20, 30);
// function calculateTotal(number) {
//     let total = 0;
//     let i = 1;
//     while (i <= number) {
//         total += i;
//         i+=1
//     }
//     return total;
// }
// console.log(calculateTotal(17));
// console.log(calculateTotal(7));

// const age = 18;
// const type = age >=17  ? "juniour" : "adult";
// console.log(type);



// function calculateTotal(number) {
//     let total = 0;
//     for (let i = 1; i <= number; i++){
//         total+=i
//     }
//     return total;
// }
// console.log(calculateTotal(18));

// for (let i = 0; i <= 60; i += 5) {
//   console.log(i);
// }
// function calculateEvenTotal(number) {
//   let total = 0;
//   for( let i = 2; i <= number; i +=2){
//     total += i;
//   }
//   return total;
// }
// console.log(calculateEvenTotal(9));

// const start = 6;
// const end = 17;
// let number;
// for (let i = start; i <= end; i += 1){
//   if(i % 5 === 0){
//    number = i;
//     break;
//   }
// }
// console.log((number));
// const arr = ["apple", "peach", "orange", "jerry"];
// arr[3] = "tomato";
// const array = arr;

// console.log(array.length);

// function getArr(arr) {
//     const lastElement = arr.length - 1;
//     const secontElement = arr[lastElement]
//     const result = [lastElement, secontElement];
//     return result;
    
// }
// console.log(getArr(["apple", "peach", "orange", "jerry"]));

// function getExtremeElements(array) {
//   if (array.length === 0) {
//       return "empty";
//   }
//   return [array[0], array[array.length -1]];
// }
// console.log(getExtremeElements(["peach", 12, "tomato", 16]));



// const arr = ["peach", 12, "tomato", 16];
// console.log(arr);

// const arrStr = arr.join("-");
// console.log(arrStr);
// const array = arrStr.split('-');
// console.log(array);


// function getWords(strings) {
//     const words = strings.join("+-+");
//     return words.split("+-+");
  
// }
// console.log(getWords(["peach", 12, "tomato", 16]));


// function getArr(str) {
//     const words = str.join("-");
//     return words.split("-")[str.length -1];
// }
// console.log(getArr(["peach", 12, "tomato", 16]));

// console.log(getArr(["Mango", "hurries", "to", "the", "train"]));


// function calculateEngravingPrice(message, pricePerWord) {
//     const str = message.split(" ");
//     return str.length * pricePerWord;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(2, planets.length)); // ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

// const fruits = ['apple', 'pl'];
// const arr = ['pear', 'orange', 'banana'];
// const array = arr.concat(fruits);
// console.log(array);


// function getArr(first, second, third) {
//     const words = second.concat(third, first);
//     return words;
// }
// console.log(getArr(['apple', 'plum'], ['pear', 'orange', 'banana'], ["fruits", "vegetables"]));
 


// function getSlice(array, value) {
//     const index = array.indexOf(value);
//     if (index !== -1) {
//         return array.slice(1, index+1)
        
//     }

//     return [];
// }
// console.log(getSlice(["Mango", "Poly", "Mars","Earth", "Ajax", "Venus",], "Mars"));

// let array = [];
// for (let index = 0; index <= 6; index++) {
//     array.push(`${index}`);
 
    
// }
// const arr = array.join("+");
//  const arRay = arr.split("+")
   
// console.log(arRay);

// function createNumbers(min, max) {
//     const result = [];
//     for (let i = min; i <= max; i++){
//     result.push(`${i}`);
//     }
//     return result
// }
// console.log(createNumbers(3, 17));

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
// if (fruits.includes("tomato")){
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
// // console.log(location);


// const hobbies = user.hobbies;
// console.log(hobbies[1]); // ["swimming", "music", "sci-fi"]

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };


// // console.log(book.price); // "The Last Kingdom"
// // console.log(book["title"]); // "The Last Kingdom"


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// const nameAuthor = "author";
// // console.log(book.nameA"uthor);
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

// for (const key in apartment.owner) {
//     console.log(apartment.owner);
    
// }


// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }







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
// let keyy = [];
// let values = [];
// const objOne = Object.keys(apartment);
// for (let key of objOne) {
//     keyy.push(key);
//     values.push(apartment[key]);
// }
// console.log(keyy);
// console.log(values);

// function getObj(obj) {
//     let objKeys = Object.values(obj);
//     return objKeys.length;
// }
// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// console.log(getObj(book));

function getSumObj(obj) {
    let sum = 0;
    let salarys = Object.values(obj);
    for (let salary of salarys){
        sum += salary;
    } return sum;
    
}
console.log(getSumObj({ kiwi: 400, poly: 50, ajax: 850 }));
