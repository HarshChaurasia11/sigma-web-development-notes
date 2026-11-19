import fs from "fs/promises"

let a = await fs.readFile("harsh.txt")

let b = await fs.appendFile("harsh.txt", " This is an amazing promise.")
console.log(a.toString(), b)