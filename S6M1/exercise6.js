/* 1. Create a function to calculate array of student data
● The object has this following properties :
○ Name → String
○ Email → String
○ Age → Date
○ Score → Number
● Parameters : array of student
● Return values :
○ Object with this following properties :
1. Score
● Highest
● Lowest
● Average
2. Age
● Highest
● Lowest
● Average
*/

let dataStudent = [
  {
    name: "Nadya",
    email: "nadyadhyanti@yahoo.com",
    age: new Date("1997-04-25"),
    score: 97,
  },
  {
    name: "Lala",
    email: "lalala@yahoo.com",
    age: new Date("1994-02-23"),
    score: 87,
  },
  {
    name: "Yala",
    email: "yalala@yahoo.com",
    age: new Date("1996-07-15"),
    score: 92,
  },
];

// function calculateAll(dataStudent){
//   let highestScore = dataStudent[0].score;
//   let studentWithHighestScore = dataStudent[0].name;
//   let lowestScore = dataStudent[0].score;
//   let studentWithLowestScore = dataStudent[0].name;
//   let totalScore = 0;

//   for (let i = 0; i < dataStudent.length; i++) {
//     let studentHighest = dataStudent[i];
//     if (studentHighest.score > highestScore) {
//       highestScore = studentHighest.score;
//       studentWithHighestScore = studentHighest.name;
//     }

// }

//1. a. Highest Score
function theHighestScore(dataStudent) {
  let highestScore = dataStudent[0].score;
  let studentWithHighestScore = dataStudent[0].name;

  for (let i = 0; i < dataStudent.length; i++) {
    if (dataStudent[i].score > highestScore) {
      highestScore = dataStudent[i].score;
      studentWithHighestScore = dataStudent[i].name;
    }
  }
  return { highestScore, studentWithHighestScore };
}

let result = theHighestScore(dataStudent);
console.log(
  `1. a. Student with the highest score is ${result.studentWithHighestScore} with score ${result.highestScore}`
);

//1. b. Lowest Score
function theLowestScore(dataStudent) {
  let lowestScore = dataStudent[0].score;
  let studentWithLowestScore = dataStudent[0].name;

  for (let i = 0; i < dataStudent.length; i++) {
    if (dataStudent[i].score < lowestScore) {
      lowestScore = dataStudent[i].score;
      studentWithLowestScore = dataStudent[i].name;
    }
  }
  return { lowestScore, studentWithLowestScore };
}

let result2 = theLowestScore(dataStudent);
console.log(
  `   b. Student with the lowest score is ${result2.studentWithLowestScore} with score ${result2.lowestScore}`
);

//1. c. Average Score
function theAverageScore(dataStudent) {
  let totalScore = 0;

  for (let i = 0; i < dataStudent.length; i++) {
    totalScore += dataStudent[i].score;
  }
  let averageScore = totalScore / dataStudent.length;
  return { averageScore };
}

let result3 = theAverageScore(dataStudent);
console.log(`   c. The average score is ${result3.averageScore}`);

//2. a. Oldest Age
const calculateAge = function (birthDate) {
  const currentDate = new Date();
  const age = currentDate - birthDate;
  return Math.floor(age / (365 * 24 * 3600 * 1000));
};

function theOldestAge(dataStudent) {
  let oldestAge = calculateAge(dataStudent[0].age);
  let studentWithOldestAge = dataStudent[0].name;

  for (let i = 0; i < dataStudent.length; i++) {
    if (dataStudent[i].age > oldestAge) {
      oldestAge = dataStudent[i].age;
      studentWithOldestAge = dataStudent[i].name;
    }
  }
  return { oldestAge, studentWithOldestAge };
}

let result4 = theOldestAge(dataStudent);
console.log(
  `2. a. The oldest student is ${result4.studentWithOldestAge}, ${result.oldestAge} years old`
);
