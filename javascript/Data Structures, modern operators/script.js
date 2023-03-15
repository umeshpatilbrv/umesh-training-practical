"use strict";

// Primitives and Object

// Primitive type=

// let FName = 'rakesh';
// let old_FName = FName;
// FName = 'vicky';
// console.log(FName, old_FName);

// // // Reference type=

// const friend = {
//   firstName: 'monika',
//   lastName: 'salunkhe',
//   age: 25,
// };
// const married_monika = friend;
// married_monika.LName = 'patil';
// console.log('Before marriage:', friend);
// console.log('After marriage: ', married_monika);

// // Copying objects
// const joy = {
//   firstName: 'Joy',
//   lastName: 'Wankhede',
//   age: 27,
//   family: ['roy', 'tom'],
// };

// const joy_Copy = Object.assign({}, joy);
// joy_Copy.lastName = 'Desoja';

// joy_Copy.family.push('Mary');
// joy_Copy.family.unshift('John');

// console.log('Before marriage:', joy);
// console.log('After marriage: ', joy_Copy);

// Destructuring Arrays

// const arr = [2, 5, 8];
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// const [first, second] = restaurant.categories; //indexing
// console.log(first, second);

// // Receive 2 return values from a function//////////
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring/////
// const nested = [2, 8, [10, 15]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values///////
// const [A = 1, B = 1, C = 1] = [10, 20];
// console.log(A, B, C);

//////////////////////////////////////////
///destructing object//

const restaurant = {
  name1: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 15,
      close: 20,
    },
    fri: {
      open: 10,
      close: 21,
    },
    sat: {
      open: 5,
      close: 9,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderfood: function (f1, f2, f3) {
    console.log(`food with ${f1},${f2} and ${f3}`);
  },
};

// const { name1, openingHours, categories } = restaurant;
// console.log(name1, openingHours, categories);

// //with object
// const {
//   name1: restaurant_Name,
//   openingHours: Hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurant_Name, Hours, tags);

// //setting a default value

// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// //nested objects//

// const {
//   sat: { open, close },
// } = openingHours;
// console.log(open, close);
// ///
// const {
//   sat: { open: O, close: C },
// } = openingHours;
// console.log(O, C);

//spred//

//copy  arrays///

const copy_mainArray = [...restaurant.mainMenu];
console.log(copy_mainArray);

//join array//

const join_array = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(join_array);

//string//
const str = "practice";
const name2 = [...str, " ", "e."];
console.log(name2);

//ingredient prompt //
const in_prompt = [prompt("let's make food1"), prompt("let's make food1")];
console.log(in_prompt);
restaurant.orderfood(...in_prompt); //with spred
