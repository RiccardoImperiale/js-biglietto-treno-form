const pricePerKm = 0.21;
const kidsDiscount = 20;
const eldersDiscount = 40;

const button = document.querySelector('button');
const passengerName = document.querySelector('#passenger_name');
const passengerKm = document.querySelector('#passenger_km');
const passengerAge = document.querySelector('#age_range');

button.addEventListener('click', () => {
    console.log(passengerName.value, passengerAge.value, passengerKm.value);
})

// get kilometers and age of the user
// const userKm = Number(prompt('How many kilometers would you like to travel?'));
// const userAge = Number(prompt('How old are you?'));

// multiply user km by 0.21 € to get the full price
// let tripPrice = userKm * pricePerKm;

// subtract 20% from the full price if the user is a minor
// if (userAge < 18) {
//     tripPrice -= tripPrice / 100 * kidsDiscount;
// }
// subtract 40% from the full price if the user is more than 65
// if (userAge >= 65) {
//     tripPrice -= tripPrice / 100 * eldersDiscount;
// }

// ensure the final price has a maximum of two decimal places
// const finalPrice = tripPrice.toFixed(2);
// alert(`The final price is ${finalPrice}€`);