document.title = "Inserting & Removng Element using JS"


console.log(document.querySelector(".box"))


// find innerHTML of container element 
console.log(document.querySelector(".container").innerHTML)


// find outer element of container element 
console.log(document.querySelector(".container").outerHTML)


// inner element shows as a text 
console.log(document.querySelector(".box").innerText)


// its shows element name 
console.log(document.querySelector(".box").tagName)


// shows inside text of an Element
console.log(document.querySelector(".box").textContent)


// // they hide element to the browser
// console.log(document.querySelector(".container").hidden = true)


// they change html content inside element 
document.querySelector(".box").innerHTML = "Hey I am not a div"


// they tells given attribute like("style") present or not in this div
console.log(document.querySelector(".box").hasAttribute("style"))


// they say what inside in this particuler attribute
console.log(document.querySelector(".box").getAttribute("style"))


// .set method has change or give properties to given element
console.log(document.querySelector(".box").setAttribute("style" , "display : inline"))


// .removeattribute method actually remove attribute to a element 
document.querySelector(".box").removeAttribute("style")


// when you use dataset "data-" will be ignore and other data will be stored
console.log(document.querySelector(".box").dataset)



/*

// Insertion method


// insert an element using js
let div = document.createElement("div")
div.innerHTML = "I am inserted by harsh"
// give class to an inserting element
div.setAttribute("class", "created")
// when i use .append method to add add element they allways add at last of that container
document.querySelector(".container").append(div)
// Insert at the beginning of node
document.querySelector(".container").prepend(div)
// Insert before node
document.querySelector(".container").before(div)
// Insert after node 
document.querySelector(".container").after(div)
// this method replace .container to created
document.querySelector(".container").replaceWith(div)


*/


// Insert Adjustment HTML/Text/Element

let cont = document.querySelector(".container")
// Insert HTML immediatily before element
cont.insertAdjacentHTML("beforebegin", "<b> I am under the water, Please help me here to much raining.... iuuuoooooo </b>")

// remove first element inside .box
document.querySelector(".box").remove()

// they give class list
console.log(document.querySelector(".box").classList)

// using class name they give value of class
console.log(document.querySelector(".box").className)

// this method add class "harsh"
console.log(document.querySelector(".box").classList.add("harsh"))

// this method remove class 
console.log(document.querySelector(".box").classList.remove("red"))

// when I use toggle "Agar class hai to remove ho jaya or nahi hai to lag jaya"
console.log(document.querySelector(".box").classList.toggle("red"))


