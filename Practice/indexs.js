const refs = {
  form: document.querySelector('.js-form'),
  list: document.querySelector('.js-items'),
  button: document.querySelector('.js-button-showmore'),
};
const arrPassengers = [];
refs.form.addEventListener('submit', e => {
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
  };
  const passengersTemplate = getRegistration(flyPassenger);
  arrPassengers.push(flyPassenger);
  createLsPassengers('passenger', arrPassengers);
  refs.list.insertAdjacentHTML('afterbegin', passengersTemplate);
  e.target.reset();
});

function getRegistration({ departure, destination, time }) {
  return `<li class="box item hight">
   <p>Departure time ${time}</p>
     <div class="js-text">
 <div>     <span>${departure}</span> -
  <span>${destination}</span></div>
      </div>
     <button class="js-button-showmore form-control" data-type="show">SHOW MORE</button>
    </li>`;
}
function usersTemplate(userData) {
  return userData.map(getRegistration).join('<hr/>');
}
function createLsPassengers(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}
function parseLsPassengers(key) {
  const parse = localStorage.getItem(key);
  try {
    const result = JSON.parse(parse);
    return result;
  } catch {
    return parse;
  }
}
//!==============
window.addEventListener('DOMContentLoaded', e => {
  const userData = parseLsPassengers('passenger');
  const strMarkup = usersTemplate(userData);
  refs.list.insertAdjacentHTML('afterbegin', strMarkup);
  arrPassengers.push(...userData);
});
// refs.list.addEventListener('click', e => {
//   const btn = e.target.closest('.js-button-showmore');
//   if (!btn) return;
//   const { departure, destination, date, time, passengers } = passenger;

//   const instance = basicLightbox.create(`
//     <div class="modal">
//       <p>${departure}</p>
//       <p>${destination}</p>
//       <p>${date}</p>
//       <p>${time}</p>
//       <p>${passengers}</p>
//     </div>
//   `);
//   instance.show();
// });
