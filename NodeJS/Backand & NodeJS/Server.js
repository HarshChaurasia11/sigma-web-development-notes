// console.log("Hello World")

var slugify = require('slugify')

let a = slugify('some string') // some-string 
console.log(a)

// if you prefer something other than '-' as operator
let b = slugify('some str!@#$%^&*ing', '_') // some_string
console.log(b)