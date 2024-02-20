const pricePerKm = 0.21;
const kidsDiscount = 20;
const eldersDiscount = 40;

const inputName = document.querySelector('#passenger_name');
const inputKm = document.querySelector('#passenger_km');
const inputAge = document.querySelector('#age_range');
const button = document.querySelector('button');

const form = document.querySelector('form');
const ticket = document.querySelector('#ticket');
const title = document.querySelector('h1');
const ticketName = document.querySelector('#ticket #passenger_name');
const ticketPrice = document.querySelector('.ticket_price');
const ticketOffer = document.querySelector('.ticket_offer');
const ticketReset = document.querySelector('#reset_ticket');
const ticketCP = document.querySelector('.CP_Code');
const ticketCoach = document.querySelector('.coach_number');
const gif = document.querySelector('#gif');

button.addEventListener('click', (event) => {
    event.preventDefault();
    const passengerName = inputName.value;
    const passengerKm = Number(inputKm.value);
    const passengerAge = inputAge.value;
    let discountApplied;
    // random number between 1 and 10
    const random2Number = Math.floor((Math.random() * 10) + 1);
    // random 5-digits number between 10000 and 99999
    const random5Number = Math.floor((Math.random() * 90000) + 10000);
    // get name, kilometers and age
    console.log(passengerName, passengerKm, passengerAge);
    // get full trip price 
    let tripPrice = passengerKm * pricePerKm;
    console.log(`The final price is ${tripPrice}€`);
    // subtract 20% from the full price if the user is a minor
    if (passengerAge === 'minor') {
        tripPrice -= tripPrice / 100 * kidsDiscount;
        discountApplied = 'Kids Price';
    } else if (passengerAge === 'senior') {
        tripPrice -= tripPrice / 100 * eldersDiscount;
        discountApplied = 'Elders Price';
    } else {
        discountApplied = 'Standard Price';
    }
    // ensure the final price has a maximum of two decimal places
    const finalPrice = tripPrice.toFixed(2);
    console.log(`The final price is ${finalPrice}€ -> ${discountApplied}`);
    // hide form
    form.style.display = 'none';
    // show gif
    showGif();
    // change h1 title
    title.innerText = 'Your Ticket'
    // change ticket name and price
    ticketName.innerText = passengerName;
    ticketPrice.innerText = `${finalPrice}€`;
    ticketOffer.innerText = discountApplied;
    // add random numbers
    ticketCoach.innerText = random2Number;
    ticketCP.innerText = random5Number;
})

// refresh page
ticketReset.addEventListener('click', () => {
    window.location.reload();
})

// show gif before ticket
function showGif() {
    const gif = document.getElementById("gif");
    gif.style.display = "flex";

    setTimeout(function () {
        gif.style.display = "none";
        // show final ticket
        ticket.style.display = 'block';
    }, 1500);
}