// # Масиви

// ## Прості задачі

// 1. Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.
// function getArr(array) {
//     for (let arr of array) {
//         console.log(arr);

//     }
// }
// const items = [1, 4, 7, 10]
// getArr(items);

// 1. Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у
//    консоль.
// function getArr(array) {
//     for (let arr of array) {
//         if (arr % 2 === 0) {
//     console.log(arr);

// }

//     }
// }
// const items = [1, 4, 7, 10]
// getArr(items);
// 1. Напиши функцію, яка приймає масив чисел та виводить лише парні числа у
//    консоль.
// function getArr(array) {
//     let numbers = [];
//     for (let arr of array) {
//         if (arr % 2 === 0) {
//     numbers.push(arr)

// }

//     } return numbers;
// }
// const items = [1, 4, 7, 10]
// console.log(getArr(items));

// 1. Напиши функцію, яка приймає два параметри (arr, max). Де arr - це масив
//    чисел. Потрібно вивести лише ті елементи масиву які більші за max.
// function foo(arr, max) {
//     for (let num of arr) {
//        if (num > max) {
//         console.log(num);

//        }
//    }
// }
// const items = [1, 4, 7, 10, 30, 33];
// foo(items, 30);

// 1. Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві.
// function getSum(array) {
//     let sum = 0;
//     for (let arr of array) {
//         sum += arr;
//     } return sum;
// }
// const items = [1, 4, 7, 10, 30, 33];
// console.log(getSum(items));

// 1. Напиши функцію яка приймає масив та елемент для пошуку. Фукнція повинна
//    порахувати скільки разів шуканий елемент зустрічається у масиві.
// function countTimes(array, elem) {
//     let count = 0;
//     for (let arr of array) {
//         if (arr === elem) {
//             count++
//         }
//     } return count;
// }
// const items = [1, 4, 10, 7, 10, 30, 33];
// console.log(countTimes(items, 10));

// 1. Напиши функцію яка приймає масив чисел. Функція повинна видалити усі
//    негативні(відємні числа) з масиву та повернути новий масив.
// function countTimes(array) {
// let positiveNumbers = [];
//     for (let arr of array) {
//         if (arr > 0) {
//             positiveNumbers.push(arr);
//         }
//     }return positiveNumbers
// }
// const items = [1, -4, 10, 7, -10, 30, -33];
// console.log(countTimes(items));

// 1. Напиши функцію яка приймає масив рядочків. Потрібно змінити кожен елемент
//    масиву наступним чином - якщо довжина рядочку менша за 6 до привести рядок до
//    нижнього регістру, в іншому випадку привести до верхнього регістру.
// function checkLength(array) {
//     let result = [];
//     for (let arr of array) {
//         if (arr.length < 6) {
//             result.push(arr.toLowerCase());
//         }

//         else {
//             result.push(arr.toUpperCase())
//         }
//     }return result;
// }
// const strings = ["hello", "Peach", "apple", "Monitor", "Germany"];
// console.log(checkLength(strings));

// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить
//    лише непарні числа.
// function getNumbers(array) {
//     let result = [];
//     for (let arr of array) {
//         if (arr % 2 !== 0) {
//             result.push(arr)
//         }
//     } return result;
// }

// const items = [1, 4, 10, 7, 10, 30, 33];
// console.log(getNumbers(items));

// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожне
//    число помножене на індекс, за яким воно знаходиться в масиві.
// function multiply(array) {
//     let newArr = [];
//     for (let index = 0; index < array.length; index++) {
//         newArr.push(array[index] * index)

//     } return newArr;
// }
// const items = [1, 4, 10, 7, 10, 30, 33];
// console.log(multiply(items));

// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить
//    лише числа, які діляться на 3.
// function multiply(array) {
//     let newArr = [];
//     for (let arr of array) {
//         if (arr % 3 === 0) {
//             newArr.push(arr)
//         }
//     } return newArr;
// }

// const items = [1, 6, 10, 18, 10, 30, 33];
// console.log(multiply(items));

// ## Середні задачі

// 1. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
//    де будуть лише ті елементи які зустрічаються і в arr1 і arr2.
// function getSameElement(arr1, arr2) {
//     let result = [];
//     for (let arr of arr1) {
//         if (arr2.includes(arr)) {
//             result.push(arr)
//         }
//     } return result;
// }
// const firstArr = ["Mars", "Jupiter",  "Venera", "Earth"];;
// const secondArr = ["Mars", "Jupiter", "Saturn", "Earth"]
// console.log(getSameElement(firstArr, secondArr));

// 1. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
//    де будуть лише елементи масиву arr1 яких не має у масиві arr2.

// function getUniqElement(arr1, arr2) {
//     let result = [];
//     for (let arr of arr1) {
//         if (!arr2.includes(arr)) {
//             result.push(arr)
//         }
//     } return result;
// }
// const firstArr = ["Mars", "Jupiter",  "Venera", "Earth"];;
// const secondArr = ["Mars", "Jupiter", "Saturn", "Earth"]
// console.log(getUniqElement(firstArr, secondArr));

// 1. Напиши функцію яка приймає масив та знаходить мінімальний елемент.

// function multiply(array) {
//     let min;
//     for (let i = 0; i < array.length; i++) {
//         if (i === 0) {
//             min = array[i]
//         } else if (array[i] < min) {
//             min = array[i];
//         }
//     }return min;
// }
// const items = [ 6, 10, 18, 10, 30, 33];
// console.log(multiply(items));

// 1. Напиши функцію яка приймає масив та знаходить максимальний елемент.
// function checkArr(array) {
//     let max;
//     for (let i = 0; i < array.length; i++) {
//         if (i === 0) {
//             max = array[i]
//         } else if (array[i] > max) {
//             max = array[i]
//        }
//     }return max;
// }
// const items = [ 6, 10, 18, 10, 30, 33];
// console.log(checkArr(items));

// 1. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які
//    більші за середнє значення всіх елементів масиву
// function getNembers(array) {
//     let sum = 0;
//     for (let arr of array) {
//         sum += arr;
//     }
//     const numbers1 = sum / array.length;
//     let result = [];
//     for (let arr of array) {
//         if (arr > numbers1) {
//             result.push(arr);
//         }
//     } return result;
// }

// const items = [5, 10, 6];
// console.log(getNembers(items));

// 1. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які
//    більші за власний індекс.
// function getArrNumbers(array) {
//     let result = [];
//     for (let i = 0; i < array.length; i++){
//         if (array[i] > i) {
//             result.push(array[i])
//         }
//     } return result;
// }
// const items = [18, 2, 1, 5, 10, 4];
// console.log(getArrNumbers(items));

// 1. Напишіть функці яка приймає масив чисел. Функція повинна занйти мінімальний
//    елемент та видалити його з масиву.
// function getArrNumbers(array) {
//     let min = array[0];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         }
//     }
//         let numbers = [];
//         for (let i = 0; i < array.length; i++){
//             if (array[i] !== min) {
//                 numbers.push(array[i]);
//             }
//         } return numbers;
//     }

// const items = [2, 1, 5, 10, 4];
// console.log(getArrNumbers(items));///////TODO//////..///////////////////////////////////////////////////////

// 1. Напиши функцію яка приймає два параметри start та end. Функія повина
//    повернути масив де будуть числа з діапазону але лише ті у яких не має
//    цифри 5. К прикладу числа (51, 25, 15,256) не підходять бо містять символ "5"
//    у собі.
// function getArrNumbers(start, end) {
//     let result = [];
//     for (let i = start; i <= end; i++) {
//         if (!i.toString().includes("5")) {
//             result.push(i)
//         }
//     }return result;
//     }

// console.log(getArrNumbers(1, 100));

// ## Складні

// 1. Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі парні
//    числа переміщені в початок, а всі непарні - в кінець.

// function getNumbers(array) {
//     let even = [];
//     let odd = [];
//     for (let arr of array) {
//         if (arr % 2 === 0) {
//             even.push(arr)
//         } else {
//             odd.push(arr);
//         }
//        } const arrNum = even.concat(odd);
//      return arrNum;
// }
// const numbers = [2, 3, 6, 8, 5, 7, 13, 17, 25];
// console.log(getNumbers(numbers));

// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен
//    елемент є сумою усіх попередніх елементів.
// function getSum(array) {
//     let sum = [];
//     let counter = 0;
//     for (let elem of array) {
//         counter += elem;
//         sum.push(counter);
//     } return sum;
// }
// const numbers = [2, 3, 6, 8];
// console.log(getSum(numbers));

// function getSum(array) {
//     return array.reduce((acc,elem) => acc + elem,0)
// }
// const numbers = [2, 3, 6, 8];
// console.log(getSum(numbers));

// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, що містить
//    лише унікальні числа.

// function getUniqNumbers(array) {
//     let result = [];
//     for (let elem of array) {...
//         if (!result.includes(elem)){
//             result.push(elem);
//        }
//    } return result
//     }

// const numbers = [ 8, 3, 3, 8, 10,2];
// console.log(getUniqNumbers(numbers));

// 1. Напиши функцію, яка приймає два масиви і повертає об'єднаний массив без
//    дублювання елементів.
// function getUniqNumbers(array, array1) {
//     let result = [];
//     for (let num of array) {
//         if (!result.includes(num)){
//             result.push(num);
//         }
//     }
//     for (let num of array1) {
//         if (!result.includes(num)){
//             result.push(num);
//         }
//     } return result;
//     }

// const arrNum = [8, 3, 3];
// const arrNum1 = [8, 10, 2];
// console.log(getUniqNumbers(arrNum, arrNum1));

// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен
//    елемент є середньоарифметичним всіх сусідніх елементів.

// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де елементи
//    відсортовані в порядку збільшення або зменшення.
// function getUniqNumbers(array) {
//     return array.sort((a, b) => a - b);

//     }

// const numbers = [ 8, 3, 10,2];
// console.log(getUniqNumbers(numbers));

// 1. Напиши функцію, яка приймає массив рядочків та сортує їх за довжиною
//    елементів.
// function getSortStr(array) {
//     return array.sort((a, b) => a.length - b.length);
// }
// const arrString = ["Helo", "Banana", "Peaches", "Tomato"];
// console.log(getSortStr(arrString));

///////////////////////////TTTTTTTTTTTTToooooooooooooooDDDDDDDDDDDOOOOOOOOOOOOOOOO./././././././././././././././
// ## Codewars

// - [Kata #1](https://www.codewars.com/kata/57a083a57cb1f31db7000028)
// - [Kata #1](https://www.codewars.com/kata/64fbfe2618692c2018ebbddb)
// - [Kata #1](https://www.codewars.com/kata/64fbfe2618692c2018ebbddb)
// - [Kata #1](https://www.codewars.com/kata/57f222ce69e09c3630000212)
// - [Kata #1](https://www.codewars.com/kata/53dc23c68a0c93699800041d)

// - [Kata #1](https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c)
// - [Kata #2](https://www.codewars.com/kata/563cf89eb4747c5fb100001b)
// - [Kata #3](https://www.codewars.com/kata/5813d19765d81c592200001a)
// - [Kata #4](https://www.codewars.com/kata/62ad72443809a4006998218a)
// - [Kata #5](https://www.codewars.com/kata/53b2ff49b82af296ce001139)
// - [Kata #6](https://www.codewars.com/kata/58f8a3a27a5c28d92e000144)
// - [Kata #7](https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118)
// - [Kata #8](https://www.codewars.com/kata/5a905c2157c562994900009d)
// - [Kata #9](https://www.codewars.com/kata/57d814e4950d8489720008db)
// - [Kata #10](https://www.codewars.com/kata/5a2be17aee1aaefe2a000151)
// - [Kata #11](https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0)
// function multiply(array) {
//     let min;
//     for (let i = 0; i < array.length; i++) {
//         if (i === 0) {
//             min = array[i]
//         } else if (array[i] < min) {
//             min = array[i];
//         }
//     }return min;
// }
// const items = [ 6,5, 10, 18, 10, 30, 33];
// console.log(multiply(items));
