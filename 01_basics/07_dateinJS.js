//                           Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // Date is a object.

// let myCreatedDate = new Date(2024, 0, 15, 5, 3)

// let myCreatedDate = new Date("2024-01-15")
let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))


let newDate = newDate()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday: "long"
})