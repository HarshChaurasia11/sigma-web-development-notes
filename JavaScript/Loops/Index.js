console.log("It is a loops")


for (let i = 1; i <= 10; i++) {
    console.log(i)
    
}


// Example of for in loop

let obj = {
    name : "Harsh",
    role : "Programmer",
    company : "Audic"
}

for (const key in obj) {    
    const element = obj[key];
    console.log(key, element)
}


// for of loops almost use in itrate(array, string)

for (const c of "Harsh") {
    console.log(c);
}

let i = 1;
while (i < 15) {
    console.log(i);
    i++;
}


let a = 10;
do {
    console.log(a);
    a++;
} while (a < 10);
