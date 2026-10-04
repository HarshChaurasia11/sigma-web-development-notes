function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewStr
    if(views < 1000){
        viewStr = views
    }
    else if(views > 1000000){
        viewStr = views/1000000 + "M";
    }
    else{
        viewStr = views/1000 + "K"
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="thumbnail">
                <p class="duration">${duration}</p>
            </div>
            <div class="text">
                <h2>${title}</h2>
                <p>${cName} • ${viewStr} views • ${monthsOld} months old</p>

            </div>
        </div>`
        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Sigma web Development #2", "CodeWithHarry", 560000, 7 , "31:22", "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAQ9PuM1Zn58x2U9MLhbV7nPC70NQ")

