// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

function main() {
    let Gryffindor = [] ;
    let Hufflepuff = [] ;
    let Ravenclaw = [] ;
    let Slytherin = [] ;
    let names = ['Aarav', 'Vihaan', 'Ishita', 'Kabir', 'Ananya', 'Rohan', 'Meera', 'Siddharth', 'Tara', 'Arjun'] ; 
    assigns(names,Gryffindor,Hufflepuff,Ravenclaw,Slytherin) ;
    console.log(Gryffindor) ;
    console.log(Hufflepuff) ;
    console.log(Ravenclaw) ;
    console.log(Slytherin) ;
}
main() ;

function assigns(array,g,h,r,s) {
    for (const i of array) {
        let length = i.length ;
        if (length < 6) {
            g.push(i) ;
            continue;
        }
        if (length < 8) {
            h.push(i) ;
            continue;
        }
        if (length < 12) {
            r.push(i) ;
            continue;
        }
        else {
            s.push(i) ;
        }
    }
}
