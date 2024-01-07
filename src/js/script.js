'use strict';

const num = +prompt("Please enter your number: ", '');
let smallestDiv = 0;
Outer:
for(let i = 2; i <= num; i++){
    if(num % i === 0){
        smallestDiv = i;
        break Outer;
    }
}
console.log(`Smallest divisor: ${smallestDiv}`)
