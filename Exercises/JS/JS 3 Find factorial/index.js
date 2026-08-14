// Write a program to calculate factorial of a number using reduce and using for loops

// 6! = 6*5*4*3*2*1

// find factorial using for loop

let arr = [6, 5, 4, 3, 2, 1]
let fact = 1;


for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    fact = fact * element;
}

console.log(fact);


// using reduce 
const redu = (a, b) => {
    return a*b;
}

console.log(arr.reduce(redu))