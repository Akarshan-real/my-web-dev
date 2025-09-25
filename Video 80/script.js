// let obj = {
//     a: 1 , 
//     b: "Akarshan"
// }
// console.log(obj) ;
// let animal = {
//     eats: "fruit"
// } ;
// let rabbit = {
//     jumps: true 
// } ;
// rabbit.__proto__ = animal ; // sets rabbit.[[Prototype]] = animal ;
// console.log(rabbit.eats) ;

class Animal {
    constructor(name){
        this.name = name ; 
        console.log("Object is created") ;
    }

    eats(){
        console.log("Kha rha hai") ;
    }

    jumps(){
        console.log("Kud rha hai") ;
    }
}
// let a = new Animal("Bunny") ;
// console.log(a) ;

class Lion extends Animal{
    constructor (name) {
        super(name) ;
        console.log(`Object is created and his name is ${name}`) ;
    }
    eats() {
        super.eats();
        console.log("Kha rha hai Roar") ;
    }
}

let l = new Lion("Sher");
console.log(l) ;