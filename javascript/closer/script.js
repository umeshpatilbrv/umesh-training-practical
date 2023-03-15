"use strict";
///////////
// Default Parameters
const bookings = [];

const create_Booking = function (
  flightNum,
  numPassengers = 1,
  price = 187 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

create_Booking("MH19");
create_Booking("MH19", 5, 1500);
create_Booking("MH19", 7);
create_Booking("MH19", 8);

create_Booking("MH19", undefined, 2000);

//function return function

const company = function (Brainvire) {
  return function (name) {
    console.log(`${name}${Brainvire}`);
  };
};

const technology = company("JS");
technology("React");
technology("Node");

//callback
const one_word = function (str) {
  return str.replace(/ /g, " ").toLowerCase();
};

const upper_Firstword = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original_string: ${str}`);
  console.log(`Transformed_string: ${fn(str)}`);

  console.log(`Transformer_by name: ${fn.name}`);
};

transformer("JavaScript is start", upper_Firstword);
transformer("JavaScript is start", one_word);

//callback all time

const callback = function () {
  console.log("Hii");
};
document.body.addEventListener("click", callback);
["Reactjs", "Nodejs", "IOS", "PHP"].forEach(callback);

/////////////////
const Ahmedabad = {
  airline: "Ahmedabad",
  code: "GJ",
  bookings: [],

  book(flight_number, name) {
    console.log(
      `${name} book a seat on ${this.airline} flight ${this.code}${flight_number}`
    );
  },
};

Ahmedabad.book(501, "Virat Kohli");
Ahmedabad.book(208, "Rohit Sharma");
console.log(Ahmedabad);

//Bind Method
const book = Ahmedabad.book;
const booknew = book.bind(Ahmedabad);
booknew(13, "MS Dhoni");
booknew(15, "Ravibdra Jadeja");

////// //with eventlistener//

Ahmedabad.planes = 250;
Ahmedabad.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", Ahmedabad.buyPlane.bind(Ahmedabad));

////partial application
const add_tax = (rate, value) => value + value * rate;
console.log(add_tax(0.1, 100));

const addnew = add_tax.bind(null, 0.5);
console.log(addnew(200));
console.log(addnew(50));
