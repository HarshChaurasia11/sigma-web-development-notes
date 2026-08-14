/* Create a faulty calculator using javascript

This faulty calculator is following :
1. It takes two no from the user
2. It perform wrong operation as follow:

+ --> -
* --> +
- --> /
/ --> **

It perform wrong operation 10% of the times

*/

let random = Math.random()
// console.log(random)

let a = prompt("Enter first digit")
let x = prompt("Enter operator")
let b = prompt("Enter second digit")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (random > 0.1) {
    console.log(`The result is ${a} ${x} ${b}`)
    alert(`The result is ${eval(`${a} ${x} ${b}`)}`)

}

else {
    x = obj[x]
    alert(`The result is ${eval(`${a} ${x} ${b}`)}`)

}