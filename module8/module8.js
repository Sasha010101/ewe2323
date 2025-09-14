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
// const divBnts = document.querySelector(".js-buttons");
// divBnts.addEventListener("click", e => {
//     const markup = e.target;
//     console.log(markup);
    
    
// })

const ref = {
    list: document.querySelector(".list"),
    liItems: document.querySelector(".li-items"),
    sendBtn: document.querySelector(".li-send"),

}
ref.list.addEventListener("click", e => {
    if (e.target === e.currentTarget) return;
    const liElem = e.target.closest("li");
  
   
    
   liElem.classList.toggle("active");
    
})
ref.sendBtn.addEventListener("click", sendData)
function sendData() {
    const firstActive = ref.list.querySelectorAll("active");
    console.log(firstActive);
    
}