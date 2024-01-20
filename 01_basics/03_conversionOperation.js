let score = null
//score is a variable that holds the value of the user's current points.



let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" - easily converted to 33 (number)
// "33wsd" - not convertable, it shows Nan (Not a Number)
// true - 1; false - 0; boolean value converted to numbers

let isLoggedIn = "Rudra"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 - true; 0 - false
// ""(empty string) - false
// "Rudra" (string) - true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);