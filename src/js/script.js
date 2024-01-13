'use strict';

function generateKey(length, characters){
    let pick = '';
    while(pick.length < length){
        pick += characters[Math.floor(Math.random()*characters.length)];
    }

    return pick;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);

console.log(key)






