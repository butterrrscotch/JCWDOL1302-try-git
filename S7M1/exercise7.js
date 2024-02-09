//1. Create a function to check if two objects are equal

//a. Input : { a: 2 } & { a: 1 }
let obj1 = { a: 2 };
let obj2 = { a: 1 };

function checkIfEqual(obj1, obj2) {
  //   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
  //     return false;
  //   }
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
  //   if (Object.keys(obj3).length !== Object.keys(obj4).length) {
  //     return false;
  //   }
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

//2. Create a function to get the intersection of two objects

//Input : { a: 1, b: 2 } & { a: 1, c: 3 }
let obj7 = { a: 1, b: 2 };
let obj8 = { a: 1, c: 3 };

function intersectionOf(obj7, obj8) {
  let intersection = {};
  for (let key in obj7) {
    if (key in obj8 && obj7[key] === obj8[key]) {
      intersection[key] = obj7[key];
    }
  }
  return intersection;
}
let intersection = intersectionOf(obj7, obj8);
console.log(intersection);

//3. Create a function to merge two array of student data and remove duplicate data
/* Array1 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 2’, email : ‘student2@mail.com’ }
]
Array2 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’ },
{ name: ‘Student 3’, email : ‘student3@mail.com’ }
]
*/

function mergeArray(arr1, arr2) {
  let array = [];
  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    if (arr1[i].name === arr2[i].name && arr1[i].email === arr2[i].email) {
      array.push(arr1[i]);
    } else {
      if (arr1[i]) {
        array.push(arr1[i]);
      }
      if (arr2[i]) {
        array.push(arr2[i]);
      }
    }
  }
  return array;
}

let data = mergeArray(
  [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" },
  ],
  [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" },
  ]
);

console.log(data);

//4. Create a function that can accept input as an array of objects and switch all values into property and property into value

function reverseObject(arr) {
  let result = [];
  for (let i of arr) {
    let newObj = {};
    for (let key in i) {
      newObj[i[key]] = key;
    }
    result.push(newObj);
  }
  return result;
}

console.log(reverseObject([{ name: "David", age: 20 }]));

//5. Create a function to find a factorial number using recursion

function findFactorial(num) {
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}

console.log(findFactorial(5));
