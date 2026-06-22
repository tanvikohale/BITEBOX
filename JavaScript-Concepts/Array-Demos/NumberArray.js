
let Num_arr = [23,45,67,89,43,65,87,56,98,29]

// Print the array in reverse order
console.log("Array in reverse order : "+Num_arr.reverse());

// Print the array in sorted array 
console.log("Array in sorted order : "+Num_arr.sort());

// To insert a new element is an array
Num_arr.push(77)
console.log("After Insert 77 in an array the new array is :  "+Num_arr);

// to remove a element from array
Num_arr.pop();
Num_arr.pop();
Num_arr.pop();
console.log("Remove the topmost element and the new array is : "+Num_arr);

// Shift Operator shift()
Num_arr.shift()
console.log("After Shift the new Array is : "+Num_arr);

// Combine the two array
let a = [1,2,3];
let b = [4,5,6];

console.log("Combine a + b Array : " +a.concat(b));

// Matrix--2D Array

let matrix = [
    [1,1,1],
    [2,3,4],
    [5,6,7]
]
console.log("Matrix Printing using for loop");
for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix.length;j++){
        console.log(matrix[i][j]);
    }
}