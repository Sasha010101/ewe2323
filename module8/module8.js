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
const divBnts = document.querySelector(".js-buttons");
divBnts.addEventListener("click", e => {
    const markup = e.target;
    console.log(markup);
    
    
})
