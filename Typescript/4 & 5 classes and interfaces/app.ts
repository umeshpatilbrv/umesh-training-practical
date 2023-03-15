// //----ARROW FUNCTION---------//

// const add = (a: number, b: number = 20) => a + b;
// const print_output: (a: number | string) => void = (output) =>
//   console.log(output);
// // print_output(add(10, 10));
// print_output(add(10));

// //=================================================

// //-------SPREAD OPERATOR--------
// const hobbies = ["sports", "watching", "cooking"];
// const active_hobbies = ["hiking"];
// // active_hobbies.push(hobbies[1],hobbies[2])
// active_hobbies.push(...hobbies);
// console.log(active_hobbies);

// const person = {
//   name: "umesh",
//   age: 25,
// };
// const copy_person = { ...person };
// console.log(copy_person);

// //-----REST PARAMETERS--------

// const add = (...numbers: number[]) => {
//   return numbers.reduce((cur_result, cur_value) => {
//     return cur_result + cur_value;
//   }, 5);
// };

// const add_numbers = add(2, 5, 6, 0.5, 3.2);
// console.log(add_numbers);

// //============================================================

// //------CLASS----------

// class department {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }
// }

// const accounting = new department("accounting");
// console.log(accounting);

//=======================================
//----constructor------------

// class user {
//   name = "";
//   age = 0;
//   email = "";
//   constructor(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//   }
//   displayval() {
//     console.log(this.name, this.age, this.email);
//   }
// }

// const output = new user("umesh", 25, "umesh@brainvire.com");
// output.displayval();

//constructor public , private:-

// class user {
//   constructor(public name, public age, public email) {}
//   displayval() {
//     console.log(this.name, this.age, this.email);
//   }
// }

// const output = new user("umesh", 25, "umesh@brainvire.com");
// output.displayval();

//=================================================================

//---INHERITANCE-----------------

// class createInheritance {
//   makeEmail(person) {
//     return `${person}@brainvire.com`;
//   }
// }
// class users extends createInheritance {
//   adduser(user) {
//     return `${user} is added `;
//   }
// }
// const output1 = new users();
// console.log(output1.adduser("umesh"));
// console.log(output1.makeEmail("umesh"));

// class employee extends createInheritance {
//   addemployee(emp) {
//     return `${employee} is added`;
//   }
// }
// const output2 = new employee();
// console.log(output2.addemployee("amit"));
// console.log(output2.makeEmail("amit"));

//===================================================
//-----------getter  and setter-----------

// class student {
//   private _age = -1;
//   private _ageStr = "";

//   get age() {
//     return this._age;
//   }

//   get agestring() {
//     return this._ageStr;
//   }

//   set age(a: number) {
//     this._age = a;
//     this._ageStr = `${a} years`;
//   }
// }

// let s = new student();
// s.age = 12;

// console.log(s.age);
// console.log(s.agestring);

//====================================================

//----------interface---------

interface userType {
  name: string;
  age: number;
  getName: () => string;
}
let users: userType = {
  name: "umesh patil",
  age: 25,
  getName: function () {
    return "umesh patil";
  },
};
console.log(users);
console.log(users.getName);
