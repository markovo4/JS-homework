'use strict';

const revRandNum = function(){

    //Generates a random number
    const randomNum = Math.floor(Math.random()*101);

    //Converts a random number into a string, splits the string, then reverses it, joins it back together, and converting it back into a number.
    const reverseNum = parseInt(randomNum
            .toString()
            .split('')
            .reverse().join('')
        , 10);
    return reverseNum;
}

for (let i = 0; i < 100; i++){
    console.log(revRandNum());
}



