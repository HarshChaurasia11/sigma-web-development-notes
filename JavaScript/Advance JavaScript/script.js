async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

// // This is an Example of IIFE
// (async function main() {
//     let a = await sleep()
//     console.log(a)
//     let b = await sleep()   
//     console.log(b)
// })()


function sum(a, b, c){
    return a+b+c;
}


// // It's an example of destructuring in array
// (async function main1() {
//     let [x, y, ...rest] = [1, 5, 7, 8, 9, 10]
//     console.log(x, y, rest)
// })()


// // It's an example of destructuring in object
// (async function main1() {
//     let obj = {
//         a : 1,
//         b : 2,
//         c : 3,
//         d : 4,
//         e : 5
//     }

//     let {a, b, ...rest} = obj
//     console.log(a, b, rest)

    
// }) ()

let arr = [1, 11, 58]
console.log(sum(arr[0], arr[1], arr[2]))
console.log(sum(...arr))