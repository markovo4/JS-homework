'use strict';

let oddSum = 0;
Outer:
for(let i = 1; i <= 20; i++){
    if(i % 2 !== 0){
        oddSum += i;
    } else{
        alert(`Sum of Odd numbers is: ${oddSum}`);
        break Outer;
    }
}