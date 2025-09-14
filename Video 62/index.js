function BusinessNameGenerator() {
    let first = {
        1:"Crazy",
        2:"Amazing",
        3:"Fire"
    }
    let second = {
        1:"Engine",
        2:"Foods",
        3:"Garments"
    }
    let third = {
        1:"Bros",
        2:"Limited",
        3:"Hub"
    }
    return first[Math.floor(Math.random() * 3) + 1]
    +" "+
    second[Math.floor(Math.random() * 3) + 1]
    +" "+
    third[Math.floor(Math.random() * 3) + 1] ;
}