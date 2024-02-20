const pricePerKm = 0.21;
const kidsDiscount = 20;
const eldersDiscount = 40;

const inputName = document.querySelector('#passenger_name');
const inputKm = document.querySelector('#passenger_km');
const inputAge = document.querySelector('#age_range');
const button = document.querySelector('button');

button.addEventListener('click', () => {
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
        discountApplied = 'Kids Discount Applied';
    } else if (passengerAge === 'senior') {
        tripPrice -= tripPrice / 100 * eldersDiscount;
        discountApplied = 'Elders Discount Applied';
    } else {
        discountApplied = 'Adult Price';
    }
    // ensure the final price has a maximum of two decimal places
    const finalPrice = tripPrice.toFixed(2);
    console.log(`The final price is ${finalPrice}€ -> ${discountApplied}`);
})


