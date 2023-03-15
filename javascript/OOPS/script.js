'use strict';
//// Constructor Functions and the new Operator///////////
///////// 1. New {} is created
///// // 2. function is called, this = {}
///// // 3. {} linked to prototype
/// // 4. function automatically return {}

///////
const student = function (Name, birthYear) {
  // Instance properties
  this.Name = Name;
  this.birthYear = birthYear;
  //we should not create methods in constructor/
};

const school = new student('yogesh', 1997);
console.log(school);

const clg = new student('Kaes', 1998);
const Diploma = new student('vishal', 1999);
console.log(clg, Diploma);

console.log(school instanceof student);

////////////////////////////////////////////////
//PROTOTYPES
console.log(student.prototype);

student.prototype.calc_Age = function () {
  console.log(2022 - this.birthYear);
};
school.calc_Age();
clg.calc_Age();
Diploma.calc_Age();

console.log(school.__proto__);
console.log(school.__proto__ === student.prototype);

console.log(student.prototype.isPrototypeOf(school));
console.log(student.prototype.isPrototypeOf(clg));
console.log(student.prototype.isPrototypeOf(student));

//prototypeOfLinkedObjects

student.prototype.species = ' ADD Prtotype';
console.log(school.species, clg.species);

console.log(school.hasOwnProperty('Name'));
console.log(school.hasOwnProperty('species'));

// Object.prototype (top of prototype chain)
console.log(school.__proto__);
console.log(school.__proto__.__proto__);
console.log(school.__proto__.__proto__.__proto__);

const arr = [1, 2, 3, 4, 5, 6, 7, 3, 4, 5, 3, 2]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

//////////////////////
// Class declaration
class student_class {
  constructor(Name, birthYear) {
    this.Name = Name;
    this.birthYear = birthYear;
  }
  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hi ${this.Name}`);
  }
  get age() {
    return 2022 - this.birthYear;
  }
}
const kayas = new student_class('kayas pinjari', 1997);
console.log(kayas);
kayas.calcAge();
console.log(kayas.age);

console.log(kayas.__proto__ === student_class.prototype);

kayas.greet();
