/*Create a function to convert Excel sheet column title to its corresponding column number.
● Example :
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
*/

function titleToNumber(columnTitle) {
  let columnNumber = 0;
  let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < columnTitle.length; i++) {
    let char = columnTitle[i];
    let charIndex = 0;
    for (let j = 0; j < base.length; j++) {
      if (base[j] === char) {
        charIndex = j + 1;
        break;
      }
    }
    columnNumber = columnNumber * 26 + charIndex;
  }
  return columnNumber;
}

console.log(titleToNumber("Z"));
console.log(titleToNumber("AA"));
console.log(titleToNumber("ZA"));
