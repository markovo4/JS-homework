'use strict';


// part 1-2
const arr = [1, 2, 3, 4, 5]
let sum = 0;
let sumSquared = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
    sumSquared += arr[i]**2;
}
console.log(`Sum of all numbers from the 'arr' array: ${sum}\nSum of all numbers squared from the 'arr' array: ${sumSquared}`)

