'use strict';


// part 1
let output= "";

for(let i = 20; i < 30; i += 0.5){
    output += ` ${i}`;
}
console.log(output);

//part 2
const dollars = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for(let i = 0; i < 10; i++){
    console.log(`$${dollars[i]} * 27 = ${dollars[i]* 27} UAH`);
}


// part 3
const n = +prompt("Please enter a number for n:", "");

for (let i = 1; i < 101; i++){
    if(i**2 > n){
        continue;
    } else if(i**2 < n){
        console.log(i);
    }
}


// part 4
const n =  +prompt("Please enter a number for n:", "");

for(let i = 0; i <= n; i++){
    if(i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0){
        console.log(`Simple number: ${i}`);
    } else{
        console.log(`NOT a simple number: ${i}`);
    }
}


// part 5
const anyNum =  +prompt("Please enter a number:", "");

for (let i = 0; i < 20; i++){
    for (let j = 0; j < 20; j++){
        if(anyNum === i**j){
            console.log(`Yes: ${i}**${j} = ${i**j}`)
        }
    }
}
