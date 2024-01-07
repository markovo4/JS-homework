'use strict';


// part 1
let output = '';
for(let i = 10; i < 21; ++i){
    output += ` ${i},`
}
console.log(output);


// part 2
for(let i = 10; i < 21; ++i){
    console.log(i**2);
}


// part 3
for(let i = 1; i < 11; i++){
    console.log(`7 * ${i} = ${7*i}`);
}


// part 4
let sum = 0;
for(let i = 1; i < 16; i++){
    sum += i;
}
console.log(`Sum of numbers from 1 t 15 = ${sum}`);


// part 5
let multiTotal = 1;
for(let i = 15; i < 36; i++){
    multiTotal *= i;
}
console.log(`Sum of numbers from 1 t 15 = ${multiTotal}`);


// part 6
let sum = 0;
let evenSum = 0;
for(let i = 1; i <= 500; i++){
    if(i % 2 === 0){
        sum += 1;
        evenSum += i;
    }
}
console.log(`Mean number: ${evenSum/sum}`)


// part 7
let evenSum = 0;
for(let i = 30; i <= 80; i++){
    if(i % 2 === 0){
        evenSum += i;
    }
}
console.log(`Even number sum: ${evenSum}`)


// part 8
let evenSum = '';
for(let i = 100; i <= 300; i++){
    if(i % 3 === 0){
        evenSum += `${i}, `;
    }
}
console.log(evenSum)


// part 9-11
const naturNum = +prompt("Please enter a natural number", '');
let naturNumDiv = '';
let evenDivNum = 0;
let evenDivSum = 0;
for (let i = 0; i <= naturNum; i++){
    if(naturNum % i === 0){
        naturNumDiv += `${i}, `
        if(naturNum % i === 0 && i % 2 === 0){
            evenDivNum += 1;
            evenDivSum += i;
        }
    }
}
console.log(`All divisors of number ${naturNum}: ${naturNumDiv}\nAnd number of even divisors is: ${evenDivNum}\nAnd the sum of even divisors is ${evenDivSum}`);


// part 12
let tableValue = '';
for(let i = 1; i < 11; i++){
    tableValue += `\n`
    for(let j = 1; j < 11; j++){
        tableValue += `${i} * ${j} = ${i*j}\n`
    }
}
console.log(tableValue);