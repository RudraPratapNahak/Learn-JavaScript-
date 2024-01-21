const name = "Rudra"
const repoCount = 4

//  console.log(name + repoCount + " value");      It is outdated, not advise to use

//   backticks (``)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// String interpolation
// ${} - used for variable inject (place holder)

// declaring tring
const gameName = new String('Rudraa-nahak-com')
console.log(gameName[1]);
console.log(gameName.__proto__);

// gothrough the method of string in online article

console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString); // it will print from index 3 till end so it will


const newStringOne = "  rudra   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rudra.com/rudra%20portfolio"

console.log(url.replace('%20', '-'))

console.log(url.includes('rudra'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'));