const fs = require("fs")

// console.log(fs)

console.log("starting")
// fs.writeFileSync("harsh.txt", "Harsh is a bad boy")

fs.writeFile("harsh2.txt", "Harsh is a good boy", ()=>{
    console.log("done")
    fs.readFile("harsh2.txt",(error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("harsh.txt", " Harsh is a Macho man." , (e, d)=>{
    console.log()
})

console.log("ending")
