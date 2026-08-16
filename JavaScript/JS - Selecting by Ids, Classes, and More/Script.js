console.log("Harsh")


// class selector using JS and in class selector always use .getElements
let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor = "pink"

// Id Selector using JS or id use .getElement
document.getElementById("skyblue").style.backgroundColor = "skyblue"

// this querySelector only style first element 
document.querySelector(".box").style.backgroundColor = "lightgreen"

// they can't style all element directly
console.log(document.querySelectorAll(".box"))

// when you style all query select to use "foreach" loop
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "purple"
})

// they return all div element
console.log(document.getElementsByTagName("div"))

// it can't use .style because they return HTML Collection
// document.getElementsByTagName("div").style.backgroundColor = "yellow" // they is wrong

e = document.getElementsByTagName("div")

// matches method check element match the given css selector and they give sonly boolean values
console.log(e[4].matches("#skyblue"))

// this method find closest ancestor
console.log(e[4].closest("#skyblue"))


console.log(document.querySelector(".container").contains(e[2]))