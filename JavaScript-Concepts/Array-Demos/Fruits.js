let fruits = ["Apple", "Pineapple", "Kiwi", "Orange", "Guava", "Strawberry"];

// to print collection of fruits on console
console.log(fruits);

// to print orange
console.log(fruits[3]);

// using foreach function

console.log("Printing fruits using forEach");
fruits.forEach(f => console.log(f));

// Add more fruits in array

fruits.push("Cherry", "Papaya", "Blueberry", "Watermelon");
console.log("Ner Fruits List : "+fruits);

// To print total numbers of fruits
console.log("Total fruits = "+fruits.length);

// list out the fruits whose name name starts with c
let c_fruits = fruits.find(f => f.startsWith("C"));
console.log("Fruits starts with c : "+c_fruits);

// list out the fruits which contains 'pp'

let pp_fruits = fruits.find(f => f.includes("pp"));
console.log("Fruits include PP : "+pp_fruits);

let p_fruits = fruits.filter(f => f.includes("pp"));
console.log("Fruits include PP using filter : "+p_fruits);

// find function find only satusfy only one condition while filter method finds from all of that list

let erry_fruits = fruits.filter(f => f.includes("erry"));
console.log("Fruits that include erry : "+erry_fruits);

// list out the fruits whose name name ends with 'a'
let a_fruits = fruits.f(f => f.endsWith("a"));
console.log("Fruits end with a : "+a_fruits);

// Print only first 3 fruits
let first3fruits = fruits.slice(0,3); //0 is the start position and 3 is total elements which is print.
console.log(first3fruits);