// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
// These are basic conversions

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(undefined <= 0); //undefined is not greaterthen, smallerthen or equel to 0. In all three type the output is false/0;
console.log(null >= 0);
//  Don't perform / avoid these type of conversions it may confuse you.


// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null >0 is false.

//  === => It is called Strict Check
console.log("2" === 2);






//Check it 

// An equality check checks if two values are identical, whereas a comparison checks if one value is greater or less than another value. So when you say "x == y", it's asking 
//"are x and y exactly the same thing?". But when you say "x > y “is x more valuable than y?”
// let x = '10';
// let y = 10;
// if (x == y) {
//     console.log('Equal');
//     } else {
//         console.log('Not equal');
//         }
//         if (x === y) {
//             console.log('Strongly equal')
//             } else {
//                 console.log('Not strongly equal');
//                 };