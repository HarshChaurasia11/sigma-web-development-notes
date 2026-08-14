console.log("Hey this is tutorial for JS Variable")

// var is global level variiable
// var a = 55;
// var b = 6;
// var c = "harsh";


// console.log(a + b)
// console.log(typeof a, typeof b, typeof c);


// I can't changed const value after the  inislization. So, this is not allowed because a1 is constant.
// const a1 = 6;
// a1 = a1 + 1;



// let is a block level variable 
let o = 5;

{
    let o = 66;
    console.log(o);
}

console.log(o);


let x = "Harsh"
let y = 531;
let z = 56.45;
const p = true;
let q = undefined;
let r = null;


console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

// object is a key value pair of combination in javascript
let obj = {
    // key : value 
    "name" : "Harsh",
    "job code" : 8103,
    // Add boolean value
    "is_handsome" : true
}

console.log(obj)

// Adding some value pairs
obj.salary = "50cr"

console.log(obj)

obj.salary = "500cr"
console.log(obj)