// const parentEl = document.querySelector(".parent");
// const childEl = document.querySelector(".child");
// const descendantEl = document.querySelector(".descendant");
// parentEl.addEventListener("click", e => {
//     console.log("Hello parent");

// });
// childEl.addEventListener("click", e => {
//     console.log("Hello child");

// })
// descendantEl.addEventListener("click", e => {
//     e.stopPropagation();
//     console.log("Hello descendant");

// })
//////////////////
// const divElem = document.querySelector(".js-buttons");
// divElem.addEventListener("click", e => {
//     console.log("Поточна кнопка:", e.target);
//     console.log("Каррент таргет:", e.currentTarget);

// })
//////////////////

// const divBnts = document.querySelector('.js-buttons');
// divBnts.addEventListener('click', e => {
//   const markup = e.target;
//   console.log(markup);
// });
////////
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };
// const { title, author: bookAuthor, genres, isPublic, rating = 10 } = book;
// const accessType = isPublic ? 'pulbic' : 'private';
// const message = `Book ${title} by author ${bookAuthor} with rating ${rating} is in ${accessType} access!`;
// console.log(message);
// console.log(title);
// console.log(bookAuthor);
// console.log(rating);
// console.log(accessType);
///////////

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
// ];
// for(const book of books)
// for (const{title, author, rating} of books) {
//   const { title, author, rating } = book;
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
//////////

// const bookData = {
//   title: 'Unknown Book',
//   author: 'Anonymous',
//   pages: 100,
//   downloads: 0,
//   publisher: 'Self',
//   shlak: {
//     year: 2025,
//     language: 'Ukrainian',
//     genres: ['mystery'],
//   },
// };
// const {
//   title,
//   author,
//   pages,
//   downloads,
//   publisher,
//   shlak: { year = 22, language, genres },
// } = bookData;
// console.log(title, language, year);
const ref = {
  parent: document.querySelector('.parent'),
  child: document.querySelector('.child'),
  descendant: document.querySelector('.descendant'),
  buttons: document.querySelector('.js-buttons'),
  btn: document.querySelector('.btn'),
  items: document.querySelector('.btn_items'),
};
ref.buttons.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    ref.buttons.style.backgroundColor = 'teal';
    return;
  }
  const markup = e.target;
  // console.log(markup);
  console.log(markup);
});
