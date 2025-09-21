
console.log(document.querySelectorAll(".details")[0]) ;
console.log(document.querySelectorAll(".details")[0].querySelectorAll("div")[0].innerText = "hello") ;
console.log(document.querySelectorAll(".details")[0].querySelectorAll("span")[1].innerText = "lmao") ;

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    document.title = String(title);

    let details = document.querySelectorAll(".details")[0] ;
    details.querySelectorAll("div")[0].innerText = title ;
    details.querySelectorAll("div")[1].querySelectorAll("span")[0].innerText = cName ;
    details.querySelectorAll("div")[1].querySelectorAll("span")[1].innerText = views ;
    details.querySelectorAll("div")[1].querySelectorAll("span")[2].innerText = monthsOld ;

    document.querySelectorAll(".thumbnail")[0].style.backgroundImage = `url(${thumbnail})` ;
    document.querySelectorAll(".thumbnail")[0].querySelectorAll("span")[0].innerText = duration ;
    
}