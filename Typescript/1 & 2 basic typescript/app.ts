// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// const number1 = 5.35;
// const number2 = 25;

// const result = add(number1, number2);
// console.log(result);

// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// const number1 = "5.35";
// const number2 = "25";

// const result = add(number1, number2);
// console.log(result);
//=================================================================

//-----With Number ,strings ,booleans------//

// function add(n1: number, n2: number, showResult: boolean, Answer: string) {
//   const result = n1 + n2;
//   if (showResult) {
//     console.log(Answer + result);
//   } else {
//     return result;
//   }
// }

// const number1 = 55;
// const number2 = 25.85;
// const print_Result = true;
// const Answer = "Answer is: ";

// add(number1, number2, print_Result, Answer);

// //===========================================================
// //--------object type----------------
// const students: {
//   name: string;
//   age: number;
//   address: string;
// } = {
//   name: "umesh",
//   age: 24,
//   address: "Maharashtra",
// };

// students.age = 25;
// console.log(students);

// const user = {
//   name: "umesh",
//   age: 24,
// };
// console.log(user.name);

//=================================================
//-----------array type---------------
// const user2: {
//   name: string;
//   age: number;
//   address2: string;
//   hobbies: string[]; ///array
//   role: [number, string]; //tuple
// } = {
//   name: "umesh",
//   age: 24,
//   address2: "Maharashtra",
//   hobbies: ["reading", "sports"],
//   role: [1, "react-js"],
// };

// user2.role.push("node-js");
// console.log(user2);
// // user2.role[1] = 20;

// console.log(user.name);

// for (const hobby of user2.hobbies) {
//   console.log(hobby);
// }

//======================================================
//------enum

// enum days {
//   mon,
//   tue,
//   wed,
//   thu,
//   fri,
//   sat,
//   sun,
// }
// let whichDay: days;
// whichDay = days.fri;

// console.log(whichDay);
//===============================================

//----union--------

// function combine(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 = input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combine_number = combine(50, 50);
// console.log(combine_number);

// const combine_names = combine("umesh", "patil");
// console.log(combine_names);

//==============================================================

//----type aliases/custome types///////////

// type Combinable = number | string;
// type ConversionDescriptor = "as-number" | "as-text";

// function combine(
//   input1: Combinable,
//   input2: Combinable,
//   resultConversion: ConversionDescriptor
// ) {
//   let result;
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultConversion === "as-number"
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// const combinedAges = combine(50, 50, "as-number");
// console.log(combinedAges);

// const combinedStringAges = combine("50", "60", "as-number");
// console.log(combinedStringAges);

// const combinedNames = combine("BrainVire", "Infotech", "as-text");
// console.log(combinedNames);
//===============================================================

//---function--------------
function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(10, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(15, 15));

addAndHandle(20, 25, (result) => {
  console.log(result);
});

//=====================================

//-----------unknown--------

let data: unknown;
data = 50;
data = "Hii";

let item: string;

if (typeof data === "string") {
  item = data;
}

// item=data

//================================

//--------never type-----

function apiError(msg, code): never {
  throw { message: message, errorcode: code };
}

const result = apiError("server error", 5000);
console.log(result);
