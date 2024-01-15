'use strict';

const revRandNum = function(){

    const randomNum = Math.floor(Math.random()*150);
    const reverseNum = parseInt(randomNum
            .toString()
            .split('')
            .reverse()
            .join('')
        , 10);
    return reverseNum;
}

const arrayOfUniqueNum = [];


while(arrayOfUniqueNum.length !== 100){

    let num = revRandNum();
    if (!arrayOfUniqueNum.includes(num)) {
        arrayOfUniqueNum.push(num);
    }
}

console.log(arrayOfUniqueNum);






