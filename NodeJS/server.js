var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a)

// if you prefer something other than '-' as seperator
let b = slugify('some st$%^&$%&^ring', '_') //some _string
console.log(b)