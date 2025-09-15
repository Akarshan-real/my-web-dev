const coloring = () => {
    let color = ["#FF6633", "#FFB399","#FF33FF","#FFFF99","#00B3E6","#E6B333","#3366E6",
        "#999966","#809980","#E6FF80","#1AFF33","#999933","#FF3380",
        "#CCCC00","#66E64D","#4D80CC","#FF4D4D","#99E6E6","#6666FF","#000000ff","#ffffffff"] ;

    let a = document.getElementsByClassName("box") ;
    let length = color.length - 1 ;

    for (let i = 0 ; i < a.length ; i++) {
        a[i].style.color = color[randomPick(length)] ;
        a[i].style.backgroundColor = color[randomPick(length)] ;
    }   
}

const randomPick = (n) => {
    return Math.floor(Math.random() * (n+1)) ;
}

coloring() ;