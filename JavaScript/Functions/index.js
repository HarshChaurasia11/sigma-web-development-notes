function nice(name) {
    console.log("Hey " + name +"! Your sigma web development is very good.")
    console.log("Hey " + name +"! Your are engineer.")
    console.log("Hey " + name +"! Your have technical Knowledge.")
    
}

nice("Harry");

function sum(a, b){
    console.log(a + b);
}

sum(56, 44)

// c is a default parameter
function mult(a, b, c = 10){
    return a*b+c;
}

result = mult(15, 5);
console.log(result)


// Example of arrow function
const fun1 = (x)=>{
    console.log("I am an arrow function", x)
}

fun1(55)