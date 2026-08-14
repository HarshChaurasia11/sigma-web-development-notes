console.log("Hello World")

console.log(document.body)

// In this method I can target elements child using js.
console.log(document.body.childNodes)

// Its target particular child node 
// First child show text because I give some blank space in html file
console.log(document.body.childNodes[0])
console.log(document.body.childNodes[1])


console.log(document.body.childNodes[1].childNodes)

// Store bodys first Child in a variable name "Cont"
let cont = document.body.childNodes[1];


// they both are text 
console.log(cont.firstChild)
console.log(cont.lastChild)


// In this method i can only access element and ignore text
console.log(cont.firstElementChild)


// Appling CSS style to perticular element using JS
console.log(cont.firstElementChild.style.backgroundColor = "skyblue")
// .next and .previous ElementSibling used to target similar element
console.log(cont.firstElementChild.nextElementSibling.style.backgroundColor = "pink")
console.log(cont.lastElementChild.previousElementSibling.style.backgroundColor = "purple")
console.log(cont.lastElementChild.style.backgroundColor = "lightgreen")


// target parent node
console.log(cont.parentNode)


