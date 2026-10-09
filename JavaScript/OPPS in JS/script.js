// let obj = {
//     a : 1,
//     b : "Harsh"
// }

// console.log(obj)

// let animal = {
//     eats : true
// }

// let rabbit = {
//     jump : true
// }


// rabbit.__proto__ = animal // set rabbit.[[Prototype]] = animal


class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is Created...")
    }

    eats(){
        console.log("Kha raha hoon")
    }

    jumps(){
        console.log("Its jumping")
    }
} 

class Lion extends Animal{
    constructor(name) {
        super(name)
        this.name = name
        console.log("Object is Created & They can allso roar...")
    }

    eats(){
        console.log("Kha raha hoon roar")
    }
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("Shera")
console.log(l)