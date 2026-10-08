let a = prompt("Enter a Number")

let b = prompt("Enter second Number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not Allowed")
}

let sum = parseInt(a) + parseInt(b)



function main(){
    
    let x = 2;
    
    try {
        console.log("The sum is ", sum * x)
        return true   
    } catch (error) {
        console.log("This is not Valid")
        return false
    }
    
    finally{
        console.log("Files Closed")
    }
}

let c = main()