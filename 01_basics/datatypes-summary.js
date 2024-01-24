// JasaScript is a Dynamicllty typed Language.

// Primitive datatypes

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, Bigint 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null // (it's value is not zero its value empty)
let userEmail; // In this variable we can assign the value undefine manually, but in this case there is a variable is declared and not given any value so it show undefined. 

// defining symbol

// const id = symbol('123')
// const anotherId = symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Shaltiman", "naagraj", "IronMan"]

let myObj = {
    name: "Rudra",
    age: 21,
}

// object

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof scoreValue);

// Link to study
// https://262.ecma-international.org/5.1/#sec-11.4.3


//  Return type of variables in JavaScript

// 1) Primitive Datatypes   (Stack Memory)
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes  (Heap Memory)
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

//                           Memory Type
// Stack Memory(Primitive Type),      Heap Memory(Non Primitive)
//   when we use stack you              When you use heap you
//     receive a copy.              receive reference of original value.

// Stack example
let myYoutubename = "Rudra"

let anothername = myYoutubename
anothername = "Rakesh"

console.log(anothername);


// Heap example
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "rudra@google.com"
// to access the value and update


console.log(userOne);
console.log(userTwo);