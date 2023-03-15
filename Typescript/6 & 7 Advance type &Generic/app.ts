//----Intersection Type----
// type support = {
//   name: string;
//   privileges: string[];
// };

// type developer = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedDeveloper = support & developer;

// const e1: ElevatedDeveloper = {
//   name: "Umesh",
//   privileges: ["create-server"],
//   startDate: new Date(),
// };

//============================================
//----------MORE ON TYPE GUARD----------
// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading carg------" + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

//===============================================/
//-------DISCRIMINATED UNIONS---------

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: string;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("Moving at speed:- " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 });
// moveAnimal({ type: "horse", runningSpeed: "100kmh" });

//======================================================

//--index property

// interface errorContainer {
//   [prop: string]: string;
// }

// const errorBag: errorContainer = {
//   email: "not a valid email",
//   username: "not a valid username",
// };

//====================================================
//-----function overload-----------

function add(num1: number, num2: number): number;
function add(a: string, b?: string): string;
function add(a: any, b: any): any {
  if (b) {
    return a + b;
  } else return a;
}
console.log(add(5, 5));
console.log(add("s1", "s2"));

///======================================================
//---optional chaining-------

const student = {
  rollNo: 10,
  details: {
    firstName: "Student-FN",
    lastName: "Student-LN",
  },
  parentDetails: {
    fatherName: "Father_name",
    motherName: "Mother_name",
  },
};

console.log(student && student.details && student.details.firstName);
console.log(student?.details?.firstName);

//===========================================================
//----NULLISH CHAINING----
// const value = " ";
// const data = value || "Default";
// console.log(data) //empty

// const value = null;
// const data = value || "Default";
// console.log(data) ///Default

const value = false; //0 also default
const data = value || "Default";
console.log(data); //default

//============================================================================
//----generic  function----

// function getvalue(item: string): string {
//   return item;
// }
// function getValue<T>(item: T): T {
//   return item;
// }
// let values = getValue([10, 10]);
// console.log(values);

// function getValue<T,U>(item: T,name:U):U  {
//   return name;
// }
// let values = getValue([10, 10],"test");
// console.log(values);

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Max", hobbies: ["sports"] }, { age: 30 });
console.log(mergeObj);

//---keyof constraint
function extractandConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "value :" + obj[key];
}

const output = extractandConvert({ name: "max" }, "name");
console.log(output);

//---------Generics class-------
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(100);
numberStorage.addItem(200);
numberStorage.removeItem(100);
console.log(numberStorage.getItems());