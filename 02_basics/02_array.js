const marvel_heros = ["thor",  "iron man", "captain america"];
const dc_heros = ["superman",  "batman", "wonder woman"] ;

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);  // in this console log it take a array to a single data.
// console.log(marvel_heros[3] [1]);

// const allHeros = marvel_heros.concat(dc_heros) // it add all array but giving a  single data into an array.
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // it is  used for merging two arrays into one using the spread operator.
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity) // it  will flatten all the arrays inside of an array into one single array.
console.log(real_another_array);


console.log(Array.isArray("Rudra"));
console.log(Array.from("Rudra"));
console.log(Array.from({name: "Rudra"})); // interesting  
// it wil give empty array as a output

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

//  Example
const Array1 = [1, 2, 3, 4, 5]
const  Array2 = ['a', 'b', 'c']
const Array3 = [0, 0, 0]
const Array4 = [1, 3, 5, 7, 9, 11]
const concatAll = Array1.concat(Array2,  Array3, Array4)
console.log(concatAll);
// we can merge multiple arrays using concat as well like spread syntax.