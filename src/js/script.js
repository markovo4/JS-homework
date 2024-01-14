'use strict';

//Please pick the one that is easier to read


//Version 1
const revRandNum = function(){

    //Generates a random number
    let randomNum = Math.floor(Math.random()*101);

    //Converts a random number into a string, splits the string, then reverses it, joins it back together, and converting it back into a number.
    let reverseNum = parseInt(randomNum
            .toString()
            .split('')
            .reverse().join('')
        , 10);
    return reverseNum;
}

for (let i = 0; i < 100; i++){
    console.log(revRandNum());
}






//Version 2
const revRandNum2 = function() {

    //Generates a random number, converts it into a string, splits the string, then reverses it, joins it back together, and converting it back into a number.
    let reverseNum2 = parseInt(Math.floor(Math.random() * 101)
            .toString()
            .split('')
            .reverse().join('')
        , 10);
    return reverseNum2;

}

let i = 0;
while(i < 100){
    console.log(revRandNum2());
    i++;
}



