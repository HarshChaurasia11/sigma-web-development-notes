let arr = [1, 8, 9, 2, 5]

// let newArr = []

// In this for loop we push square value of arr to newArr
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**3)
// }

// Same thing we do again usind map 

let newArr = arr.map((e, index, arr) => {
    return e**2
})

console.log(newArr)

// it is an example of filter 
// const greaterThanSeven = (e) => {
//     if(e > 7){
//         return true;
//     }
//     return false
// }
// console.log(arr.filter(greaterThanSeven))


let arr2 = [1, 5, 7, 8, 9]

const redd = (a, b) => {
    return a*b;
}

console.log(arr2.reduce(redd));

