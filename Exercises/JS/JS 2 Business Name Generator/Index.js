// Create a business name generator by combining list of adjectives and shop name and another word

// Adjectives:
// Crazy
// Amazing
// Fire

// Shop Name:
// Engine
// Foods
// Garments

// Another Word:
// Bros
// Limited
// Hub

let random_1 = Math.random()
if (random_1 < 0.333){
    var a = "Crazy"
}
else if (random_1 > 0.333 && random_1 < 0.666) {
    var a = "Amazing"
} 
else {
    var a = "Fire"
}


let random_2 = Math.random()
if (random_2 < 0.333){
    var b = "Engine"
}
else if (random_2 > 0.333 && random_2 < 0.666) {
    var b = "Foods"
} 
else {
    var b = "Garments"
}


let random_3 = Math.random()
if (random_3 < 0.333){
    var c = "Bros"
}
else if (random_3 > 0.333 && random_3 < 0.666) {
    var c = "Limited"
} 
else {
    var c = "Hubs"
}

console.log(a, b, c)