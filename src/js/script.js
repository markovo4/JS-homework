'use strict';

function getPotato(volume = 1){

    if(isNaN(volume) || volume === 0 || typeof(Number)) return "Error";
    const potatoWeight = Math.ceil(((volume*4*75)/1000));
    const potatoPrice = potatoWeight*13;
    return `For ${volume} liter(s) of Soup, you will need ${potatoWeight} kg of potato which will cost you ${potatoPrice} UAH`;

}

const volume = +prompt("Please enter the volume of soup, ingredients for you would like to calculate: ")
alert(getPotato(volume))
console.log(getPotato(volume))