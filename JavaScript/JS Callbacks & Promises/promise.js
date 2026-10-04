console.log('This is Promise');


let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("NO! Rendom Number is not supporting You!")
    }
    else {
        setTimeout(() => {
            console.log('Yes I am done');
            resolve("Harsh")
        }, 3000)
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("NO! Rendom Number is not 2 supporting You!")
    }
    else {
        setTimeout(() => {
            console.log('Yes I am done 2');
            resolve("Harsh 2")
        }, 1000)
    }
})


let p3 = Promise.all([prom1, prom2])
p3.then((a) => {
    console.log(a)
}).catch(err=>{
    console.log(err)
})


// prom1.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })