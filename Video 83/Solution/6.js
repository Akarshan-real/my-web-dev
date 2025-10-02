// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.


function checker(ss) {
    let vowels = "aeiou" ;
    let count = 0 ; 
    for (const i of ss){
        if (vowels.includes(i) || vowels.toUpperCase().includes(i)) {
            count++; 
        }
    }
    return count ;
}