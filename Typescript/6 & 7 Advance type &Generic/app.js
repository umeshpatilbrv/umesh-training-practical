//----Intersection Type----
// type support = {
//   name: string;
//   privileges: string[];
// };
var _a;
function add(a, b) {
    if (b) {
        return a + b;
    }
    else
        return a;
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
console.log((_a = student === null || student === void 0 ? void 0 : student.details) === null || _a === void 0 ? void 0 : _a.firstName);
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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "Max", hobbies: ["sports"] }, { age: 30 });
console.log(mergeObj);
//---keyof constraint
function extractandConvert(obj, key) {
    return "value :" + obj[key];
}
const output = extractandConvert({ name: "max" }, "name");
console.log(output);
//---------Generics class-------
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(100);
numberStorage.addItem(200);
numberStorage.removeItem(100);
console.log(numberStorage.getItems());
