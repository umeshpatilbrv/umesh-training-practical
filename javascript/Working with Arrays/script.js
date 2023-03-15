"use strict";

///entries method///

// const entries_array = ['amit','vishal','umesh','shoeab'];

// for (const [index, element] of entries_array.entries())
//    console.log(element);

///////

const entries_array2 = ["amit", "vishal", "umesh", "shoeab"];

for (let element of entries_array2.entries()) {
  // if (index == 0) element = "-No-";
  console.log(element);
}

////

// const array3 = ["a", "b", "c"];
// const arrayEntries = array3.entries();                                          // Iterating with index and element// 0 'a'

// for (const element of arrayEntries) {
//   console.log(element);
// }

// ///
// const array4 = ["games", "codes", "books"];
// for (const element of [, "games"].entries()) {                       ////visit empty slots as if they are undefined.// [0, undefined] // [1, 'games']
//   console.log(element);}

// ///

// const array5 = ["Java", "C", "C++", "Python"];
// let iterator = array5.entries();
// for (let entry of iterator) {
//   console.log(entry);
// };

// ///////////////////////////
///////EXAMPLE 1
// const iterable = [10, 20, 30];
// for (let value of iterable) {
//   value += 1;                        //// 11
//   console.log(value);
// }

//////////////////////
///////EXAMPLE 2
//   const iterable = "abcde";

// for (const value of iterable) {
//   console.log(value);
// }

//////////////////
///////EXAMPLE 3
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
/////
///////EXAMPLE 4
let names = ["mumbai", "Ahmedabad", "pune"];
for (let i in names) {
  console.log(names[i]);
}
///////EXAMPLE 5
const n = 3;
// looping from i = 1 to 3
for (let i = 1; i <= n; i++) {
  console.log(`JavaScript.`);
}

///.......find method......
// const data = [10, 20, 5, 7, 50, 2, 100];
// const find_result = data.find(function (element) {
//   return element < 10;
// });
// console.log(find_result);
// ///////////

// const data = [10, 20, 5, 7, 50, 2, 100];
// const find_result = data.find(function (element) {
//   return element < 50;
// });
// console.log(find_result);
// /////

///..........find index........
//........example1
// const data = [10, 20, 5, 7, 50, 2, 100];
// const find_result = data.findIndex(function (element) {
//   return element < 10;
// });
// console.log(find_result);

// ////........example2

// const data = [10, 20, 5, 7, 50, 2, 100];
// const find_result = data.findIndex(function (element) {
//   return element < 50;
// });
// console.log(find_result);
/////
//...example lowest

// const data = [10, 20, 5, 7, 50, 2, 100];
// const find_result = data.findIndex(function (element) {
//   return element < 5;
// });
// console.log(find_result);
// /////
///...find with arrow function

const data1 = [10, 20, 5, 7, 50, 2, 100];
const find_result = data1.find((element) => element < 5);
console.log(find_result);
// /////

// const data = [10, 20, 5, 7, 50, 2, 100];
// const find_result = data.find((element) => element > 5 && element < 10);
// console.log(find_result);
// /////

// const data = [10, 20, 5, 7, 50, 2, 100];
// const find_result = data.findIndex((element) => element > 5 && element < 10);
// console.log(find_result);
// /////
//.....array with object

const data = [
  { roll_no: 10 },
  { roll_no: 7 },
  { roll_no: 50 },
  { roll_no: 3 },
  { roll_no: 95 },
];

const result_object = data.find(function (element) {
  return element.roll_no > 50;
});
console.log(result_object);

//some method ///
const numbers = [10, 15, 20, 9, 5];
const num = numbers.some(pass_num);
function pass_num(marks) {
  return marks >= 15;
}
console.log(num);
//////f
// const numbers = [10, 15, 20, 9, 5];
// const num = numbers.some(pass_num);
// function pass_num(marks) {
//   return marks >= 21;
// }
// console.log(num);
// //
//
////////every method

// const numbers = [10, 15, 20, 9, 5];
// const num = numbers.every(pass_num);
// function pass_num(marks) {
//   return marks >= 15;
// }
// console.log(num);
// //
/////////
// const numbers = [25, 16, 20, 19, 35];
// const num = numbers.some(pass_num);
// function pass_num(marks) {
//   return marks >= 15;
// }
// console.log(num);
// //
// ///-------flat method
// let arr_flat = [10, 20, 30, , [50, 60, 70], [90, 100]];
// arr_flat = arr_flat.flat();
// console.log(arr_flat);
// //////////////
// const arr_flat2 = [10, 20, 30, , [50, 60, 70, [1, 2, 3]], [90, 100, [5, 6, 7]]];
// console.log(arr_flat2.flat(2));
// //////
// //infinity
// let arr_flat3 = [
//   10,
//   20,
//   30,
//   ,
//   [50, 60, 70, [1, 2, 3], [9, 10, 11, 12]],
//   [90, 100, [5, 6, 7]],
// ];
// arr_flat3 = arr_flat3.flat(Infinity);
// console.log(arr_flat3);
// ///////
//----flatmap
let arr = ["welcome to", "brainvire infotech", "React js"];
arr = arr.map((FM) => {
  return FM.split(" ");
});
arr = arr.flat();
console.log(arr);
///
//flatmap = combination
let arr_flatmap = ["welcome to", "brainvire infotech", "React js"];
arr_flatmap = arr_flatmap.flatMap((FM) => {
  return FM.split(" ");
});
// arr = arr.flat();
console.log(arr_flatmap);

///
//sorting array
//string
const names_sort = ["amit", "vishal", "umesh", "yogesh"];
names_sort.sort();
console.log(names_sort);

//numbers
const numbers_sort = [10, 20, 5, 80, 50, 100];
// numbers_sort.sort();
// console.log(numbers_sort);
// //
numbers_sort.sort(compare);
function compare(a, b) {
  // < 0---a come first
  // 0---no change
  // > 0---b come first

  return a - b;
}
console.log(numbers_sort);

////fill method
const arr_fill = [1, 2, 3, 4, 5, 6];
const empty = new Array(7); ///--empty array with elements
console.log(empty);

//fill empty array with fill Method
empty.fill(5, 2, 5);
console.log(empty);
//original array fill
arr_fill.fill(50, 0, 3);
console.log(arr_fill);
