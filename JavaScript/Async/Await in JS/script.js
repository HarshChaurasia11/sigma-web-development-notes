// settle means resolve or reject
// resolve means promise has settled
// reject means promise has not been settled



// async function getData(){
//     // simulate getting data from the server
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(455)
//         }, 3500)
//     })
// }

async function getData(){
    // simulate getting data from the server
    let x =await fetch('https://jsonplaceholder.typicode.com/posts/1')
    // let data = await x.json()
    let data = await x.text()
    console.log(data)
    return 555
}

async function main(){

    console.log("Loading Modules")
    
    console.log("Do SomeThing Else")
    
    console.log("Load Data")

    let data = await getData()
    
    console.log(data)
    
    console.log("Process Data")
    
    console.log("Task 2")
}

main()


// 1) Method to this I have use callback function

// data.then((v)=>{
    //     console.log(data)
    
    //     console.log("Process Data")
    
    //     console.log("Task 2")
    // })
