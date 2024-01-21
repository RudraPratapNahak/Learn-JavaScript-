const score = 400
// console.log(score);

const balance = new Number(100.5654684)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8695

// console.log(otherNumber.toPrecision(3));

// perfect calculation gives perfect output in the use of tpPrecision.

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));





// +++++++++++++++++++++  MATHS  ++++++++++++++++++++++++++

console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6)) // it is roundingoff the number after decimal
// console.log(Math.ceil(4.2))  // it will choose higher value if there is a higher value then the number which is before the decimal
// console.log(Math.floor(4.2)) // it always take floor value 

console.log(Math.random()); // iot gives the value between 0 - 1.
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min)