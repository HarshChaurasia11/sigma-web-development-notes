// Write a program to calculate factorial of a number using reduce and using for loops

// 6! = 6*5*4*3*2*1

// find factorial using for loop

// let arr = [6, 5, 4, 3, 2, 1]
// let fact = 1;


// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     fact = fact * element;
// }

// console.log(fact);


// // using reduce 
// const redu = (a, b) => {
//     return a*b;
// }

// console.log(arr.reduce(redu))


let a = 50

function factorial(number){
    // new method to creating an array.
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a, b) => {
        return a * b;
    })

    console.log(c)
}

factorial(a)