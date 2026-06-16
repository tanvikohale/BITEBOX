// create a variable in javascript by using var, let and const keyword

// var keyword -- redclaration and reassignment are allowwed
var age = 90;
console.log("Age is " +age);
console.log("Data type of age = " +typeof(age))
// redeclaring age
var age = 34;
console.log("Age after redeclaration is " +age);
// Ṛeassignments
age = 67;
console.log("Age after reassignment = " +age)

// let keyword -- redeclaration is not allowed but reassignment is allowed.
let city = "Nagpur";
let rollno = 23;

console.log("city = " +city);
console.log(typeof(city));
console.log(rollno)
console.log(typeof(rollno));

// // Redeclaration using let is not allowed
// let city = "Delhi"
// console.log(city);

// reassignment using let
city = "Pune"
console.log("After reassignment of city " +city);

// const Keyword
const pi = 3.14;
console.log(pi);

// // redeclare of const is not allowed 
// const pi = 4.13;
// console.log(pi);

// // /reassignment of const is also not allowed
// pi = 4.56;
// console.log(pi);