//1. Write a function to get the lowest, highest and average value in the array
const number = [12, 5, 23, 18, 4, 45, 32];
let highestNumber = number[0];

for (let i = 0; i < number.length; i++) {
    if (number[i] > highestNumber) {
        highestNumber = number[i];
    }
}

console.log(`1. a. The highest number from the array is ${highestNumber}`);


let lowestNumber = number[0];
for (let i = 0; i < number.length; i++) {
    if (number[i] < lowestNumber) {
        lowestNumber = number[i];
    }
}

console.log(`   b. The lowest number from the array is ${lowestNumber}`);

// let averageNumberNumber = number[0]; 
// for (let i = 0; i < number.length; i++) {
//     sumArr = sumArr + number[i];
//     }
//     return (sumArr / number.length);
// console.log(`   b. The average from the array is ${averageNumber}`);


//2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
arrWords = ["apple", "banana", "cherry", "date"]

function arrToString (arrWords) {
    let result = "";
    for (let i = 0; i < arrWords.length; i++) {
        if (i === arrWords.length - 1) {
            result = result + "and " + arrWords[i];
        } else {
            result = result + arrWords[i] + ", ";
        }
    }
    return result;
        }
        console.log(`2. The concatenation of the array is "${arrToString(arrWords)}"`)