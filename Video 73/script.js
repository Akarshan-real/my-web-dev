createCard("JavaScript Variables, Data Types & Objects | Sigma Web Development Course - Tutorial #55",
    "CodeWithHarry",
    9524467,
    20,
    "20:21",
    "https://i.ytimg.com/vi/HGCDMJXS1cc/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLApmu9ohWJ5R0ImcTMsKYK7QX1OUA");

// function createCard(title, cName, views, monthsOld, duration, thumbnail) {
//     document.title = String(title);

//     let details = document.querySelectorAll(".details")[0] ;
//     details.querySelectorAll("div")[0].innerText = title ;
//     details.querySelectorAll("div")[1].querySelectorAll("span")[0].innerText = cName ;
//     details.querySelectorAll("div")[1].querySelectorAll("span")[1].innerText = views ;
//     details.querySelectorAll("div")[1].querySelectorAll("span")[2].innerText = monthsOld ;

//     document.querySelectorAll(".thumbnail")[0].style.backgroundImage = `url(${thumbnail})` ;
//     document.querySelectorAll(".thumbnail")[0].querySelectorAll("span")[0].innerText = duration ;
    
// }
function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    document.title = String(title);
    let details = document.getElementsByClassName("details")[0] ;
    details.children[0].textContent = String(title);

    details.children[1].children[0].textContent = cName;
    details.children[1].children[1].textContent = getViews(views);
    details.children[1].children[2].textContent = getMonth(monthsOld);

    document.getElementsByClassName("thumbnail")[0].style.backgroundImage = `url("${thumbnail}")`;
    document.getElementById("duration").textContent = duration;
}

function getMonth(n) {
    let i = 1;
    while (n > Math.pow(12, i)) {
        i++;
    }
    if (i != 1) {
        return `${i - 1} years ago`;
    }
    else {
        return `${i} months ago`;
    }
}
function getViews(n) {
    let i = 1;
    let mul = 1 ; 
    while (n > (1000 * mul)) {
        i++;
        mul *= 10 ; 
    }
    if (i === 1) { //555
        return `${n} views`;
    }
    else if (i === 2) { // 5k -> 5698
        n = Number((n / Math.pow(10, i + 1).toFixed(1)));
        return `${n}k views`;
    }
    else if (i === 3) { // 56k -> 56789
        n = Number((n / Math.pow(10, i)).toFixed(1));
        return `${n}k views`;
    }
    else if (i === 4) { // 122k -> 122455
        n = Math.floor(n / Math.pow(10, i - 1));
        return `${n}k views`;
    }
    else if (i === 5) { // 3M -> 3213456 
        n = Number((n / Math.pow(10, i + 1)).toFixed(1));
        return `${n}M views`;
    }
    else if (i === 6) { // 98M -> 98431835
        n = Math.floor(n / Math.pow(10, i));
        return `${n}M views`;
    }
    else if (i === 7) { // 983M -> 983431835
        n = Math.floor(n / Math.pow(10, i - 1));
        return `${n}M views`;
    }
    else if (i === 8) { // 3B = 398343183
        n = Number((n / Math.pow(10, i + 1)).toFixed(1));
        return `${n}B views`;
    }
    else { // 16B = 1698343183
        n = Math.floor(n / Math.pow(10, 8));
        return `${n}B views`;
    }
}