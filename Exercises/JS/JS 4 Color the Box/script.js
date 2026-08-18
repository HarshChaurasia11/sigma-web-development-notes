
// // using loop
// let boxes = document.body.getElementsByClassName("box")

// let bgcolor = ["aqua", "lightgreen", "pink", "skyblue", "yellow"];

// let textcolor = ["red", "darkblue", "green", "brown", "purple"];

// for (let i = 0; i < boxes.length; i++) {
//     let bgrandom = Math.floor(Math.random() * bgcolor.length);
//     let textrandom = Math.floor(Math.random() * textcolor.length);

//     boxes[i].style.backgroundColor = bgcolor[bgrandom];
//     boxes[i].style.color = textcolor[textrandom];
// }


let boxes = document.getElementsByClassName("box")
console.log(boxes)


function getRandomColor(){
    let val_1 = Math.ceil(0 + Math.random()* 255);
    let val_2 = Math.ceil(0 + Math.random()* 255);
    let val_3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val_1}, ${val_2}, ${val_3})`
}

Array.from(boxes).forEach(e =>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})

