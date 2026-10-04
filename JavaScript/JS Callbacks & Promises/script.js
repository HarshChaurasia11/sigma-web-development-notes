console.log("Harsh is a hacker")
console.log("Rahul is a hecker")


setTimeout(() => {
    console.log("I am inside set Timeout")
}, 2000);


console.log("The End")

const fn = () => {
  console.log("Nothing")
}


const callback  = (args, fn) => {
    console.log(args)  
    fn()
}


const loadScript = (src, callbacks) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Harsh", fn)
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)






