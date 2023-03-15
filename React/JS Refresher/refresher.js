//function

function myname(name) {
  console.log(name);
}
myname("umesh");

const mynameA = (name, id) => {
  console.log(name, id);
};
mynameA("umesh patil", 3281);

const math = (number) => {
  return number * 5;
};
console.log(math(5));

///class
class Person {
  constructor() {
    this.name = "Amit";
  }
}

const person = new Person();
console.log(person.name);

////
class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person2 extends Human {
  constructor() {
    super();
    this.name = "Babu";
    this.gender = "male";
  }
  printMy_Name() {
    console.log(this.name);
  }
}

const Person1 = new Person2();
Person1.printMy_Name();
Person1.printGender();

///spread

const num = [10, 20, 30, 40];
const newnum = [...num, 50, 60, 70];

console.log(newnum);

const spred1 = {
  name: "vishal",
};

const newspred = {
  ...spred1,
  id: 3275,
};
console.log(newspred);

//rest

const rest_op = (...args) => {
  return args.filter((element) => element === 3);
};
console.log(rest_op(2, 3, 4));

//drstructing
const rollno = [2, 4, 6];
const [a, b] = rollno;
console.log(a);
console.log(b);
console.log(rollno);

const objectval = {
  name: "shoeab",
  age: 25,
};
const { name, age } = objectval;
console.log(name);
console.log(age);
console.log(objectval);
