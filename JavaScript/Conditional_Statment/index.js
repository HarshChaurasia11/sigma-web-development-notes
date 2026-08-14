console.log("Hello I am conditional Statment")


let age = 1;

if(age > 18){
    console.log("You can drive")
}

else if(age == 0){
    console.log("Are you kidding?")
}

else{
    console.log("You can't drive")
}

// It is a ternary Operator 
let a = 6
let b = 8
let c = a > b ?(a - b):(b - a)
console.log(c);