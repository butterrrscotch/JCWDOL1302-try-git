//1. Create a function that can create a triangle pattern according to the height

function generateNumberTriangle(height) {
    for (let i = 1; i <= height; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        let formattedNumber = String(j).padStart(2, '0'); // Ensure two digits
        row += formattedNumber + ' ';
      }
      console.log(row);
    }
  }
  
  // Example usage with height 10
//   generateNumberTriangle(10)
//   genereteNumberTriangle(12)


  //for..in loop

  let person = {
    name: "Nadya",
    age: 27,
  }
  for (let key in person) {
    // console.log(key);
    console.log(person[key]);
  }