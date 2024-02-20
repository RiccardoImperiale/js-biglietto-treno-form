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

button.addEventListener('click', (event) => {
    event.preventDefault();
    const passengerName = inputName.value;
    const passengerKm = Number(inputKm.value);
    const passengerAge = inputAge.value;
    let discountApplied;
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
    // show final ticket
    ticket.style.display = 'block';
    // change h1 title
    title.innerText = 'Your Ticket'
    // change ticket name and price
    ticketName.innerText = passengerName;
    ticketPrice.innerText = `${finalPrice}€`;
    ticketOffer.innerText = discountApplied;
})


