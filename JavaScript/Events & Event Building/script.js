let button = document.getElementById("btn")


// Its Event an Listioner this listener is used to change content when I double click to "Change Content." 
button.addEventListener("dblclick", () =>{
    document.querySelector(".box").innerHTML = "<b> Hey you were clicked </b> Enjoy your click!"
})

// When I can right click on button they send me a alert 
button.addEventListener("contextmenu", () =>{
    alert("Don't Right Click please!")
})

// this listener is used on body when i press any key They print into in console window
document.addEventListener("keydown", (e) =>{
    console.log(e, e.key, e.keyCode)
})