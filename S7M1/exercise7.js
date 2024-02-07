//1. Create a function to check if two objects are equal

//a. Input : { a: 2 } & { a: 1 }
let obj1 = { a: 2 };
let obj2 = { a: 1 };

function checkIfEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let keys in obj1) {
    if (obj1[keys] !== obj2[keys]) {
      return false;
    }
    return true;
  }
}

console.log(checkIfEqual(obj1, obj2));

//b. Input : { a: “Hello” } & { a: 1 }
let obj3 = { a: "Hello" };
let obj4 = { a: 1 };

function checkIfEqual(obj3, obj4) {
  if (Object.keys(obj3).length !== Object.keys(obj4).length) {
    return false;
  }
  for (let keys in obj3) {
    if (obj3[keys] !== obj4[keys]) {
      return false;
    }
    return true;
  }
}

console.log(checkIfEqual(obj3, obj4));

//c. Input : { a: 1 } & { a: 1 }
let obj5 = { a: 1 };
let obj6 = { a: 1 };

function checkIfEqual(obj5, obj6) {
  if (Object.keys(obj5).length !== Object.keys(obj6).length) {
    return false;
  }
  for (let keys in obj5) {
    if (obj5[keys] !== obj6[keys]) {
      return false;
    }
    return true;
  }
}

console.log(checkIfEqual(obj5, obj6));
