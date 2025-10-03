const refs = {
    form: document.querySelector(".js-form"),
    list: document.querySelector(".js-items"),
}
const arrPassengers = [];
refs.form.addEventListener("submit", e => {
    e.preventDefault();
    const departure = e.target.elements.departure.value;
    const destination = e.target.elements.destination.value;
    const date = e.target.elements.date.value;
    const time = e.target.elements.time.value;
    const passengers = e.target.elements.passengers.value;
    const flyPassenger = {
        departure: departure,
        destination: destination,
        date: date,
        time: time,
        passengers: passengers,
        
    }
    const passengersTemplate = getRegistration(flyPassenger);
    arrPassengers.push(flyPassenger);
    refs.list.insertAdjacentHTML("afterbegin", passengersTemplate);
    e.target.reset();
})

function getRegistration({departure, destination}) {
    return `<li class="box item hight">
     <div class="js-text">
      <span>${departure}</span>
  <span>${destination}</span>
      </div>
     <button class="form-control" data-type="show">SHOW MORE</button>
    </li>`
}
function createLsPassengers(key,value) {
    const json = JSON.stringify(value);
    localStorage.setItem(key,value)
}
function parseLsPassengers(key) {
   const parse = localStorage.getItem(key);
    try {
       const result = JSON.parse(parse)
    } catch {
        return parse;
   }
}