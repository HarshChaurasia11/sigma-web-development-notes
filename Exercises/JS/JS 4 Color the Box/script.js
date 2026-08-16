// let a = document.body.getElementsByClassName("box")[0]
// let b = document.body.getElementsByClassName("box")[1]
// let c = document.body.getElementsByClassName("box")[2]
// let d = document.body.getElementsByClassName("box")[3]
// let e = document.body.getElementsByClassName("box")[4]

// let rand_1 = Math.floor(Math.random() * 5) + 1
// console.log(rand_1)
// if (rand_1 == 1) {
//     console.log(a.style.backgroundColor = "aqua")
//     console.log(b.style.backgroundColor = "lightgreen")
//     console.log(c.style.backgroundColor = "pink")
//     console.log(d.style.backgroundColor = "skyblue")
//     console.log(e.style.backgroundColor = "yellow")
// }
// else if(rand_1 == 2){
//     console.log(b.style.backgroundColor = "aqua")
//     console.log(c.style.backgroundColor = "lightgreen")
//     console.log(d.style.backgroundColor = "pink")
//     console.log(e.style.backgroundColor = "skyblue")
//     console.log(a.style.backgroundColor = "yellow")
// }
// else if(rand_1 == 3){
//     console.log(c.style.backgroundColor = "aqua")
//     console.log(d.style.backgroundColor = "lightgreen")
//     console.log(e.style.backgroundColor = "pink")
//     console.log(a.style.backgroundColor = "skyblue")
//     console.log(b.style.backgroundColor = "yellow")
// }
// else if(rand_1 == 4){
//     console.log(d.style.backgroundColor = "aqua")
//     console.log(e.style.backgroundColor = "lightgreen")
//     console.log(a.style.backgroundColor = "pink")
//     console.log(b.style.backgroundColor = "skyblue")
//     console.log(c.style.backgroundColor = "yellow")
// }
// else {
//     console.log(e.style.backgroundColor = "aqua")
//     console.log(a.style.backgroundColor = "lightgreen")
//     console.log(b.style.backgroundColor = "pink")
//     console.log(c.style.backgroundColor = "skyblue")
//     console.log(d.style.backgroundColor = "yellow")
// }



// let rand_2 = Math.floor(Math.random() * 5)+1
// console.log(rand_2)
// if(rand_2 == 1){
//     console.log(a.style.color = "red")
//     console.log(b.style.color = "darkblue")
//     console.log(c.style.color = "green")
//     console.log(d.style.color = "brown")
//     console.log(e.style.color = "purple")
// }
// else if(rand_2 == 2){
//     console.log(b.style.color = "red")
//     console.log(c.style.color = "darkblue")
//     console.log(d.style.color = "green")
//     console.log(e.style.color = "brown")
//     console.log(a.style.color = "purple")
// }
// else if(rand_2 == 3){
//     console.log(c.style.color = "red")
//     console.log(d.style.color = "darkblue")
//     console.log(e.style.color = "green")
//     console.log(a.style.color = "brown")
//     console.log(b.style.color = "purple")
// }
// else if(rand_2 == 4){
//     console.log(d.style.color = "red")
//     console.log(e.style.color = "darkblue")
//     console.log(a.style.color = "green")
//     console.log(b.style.color = "brown")
//     console.log(c.style.color = "purple")
// }
// else{
//     console.log(e.style.color = "red")
//     console.log(a.style.color = "darkblue")
//     console.log(b.style.color = "green")
//     console.log(c.style.color = "brown")
//     console.log(d.style.color = "purple")
// }



// using loop
let boxes = document.body.getElementsByClassName("box")

let bgcolor = ["aqua", "lightgreen", "pink", "skyblue", "yellow"];

let textcolor = ["red", "darkblue", "green", "brown", "purple"];

for (let i = 0; i < boxes.length; i++) {
    let bgrandom = Math.floor(Math.random() * bgcolor.length);
    let textrandom = Math.floor(Math.random() * textcolor.length);

    boxes[i].style.backgroundColor = bgcolor[bgrandom];
    boxes[i].style.color = textcolor[textrandom];
}