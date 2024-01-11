'use strict';

function getPositiveArray(array){

    const positiveArray = [];
    if(array.length === 0) return "Array is empty";

    for(let i = 0; i < array.length; i++){
        if(array[i] >= 0) positiveArray.push(array[i]);
    }

    return positiveArray.length !== 0 ? positiveArray : null;

}

//Regular way to call arrays
const array = [1, 2, 3, -3, -2, -1];
const array1 = [-3, -2, -1];
const array2 = [];

console.log(getPositiveArray(array));
console.log(getPositiveArray(array1));
console.log(getPositiveArray(array2));


//Shorter way to call arrays
const arrays = [[1, 2, 3, -3, -2, -1], [-3, -2, -1], []];
for(let i = 0; i < arrays.length; i++){
    console.log(getPositiveArray(arrays[i]));
}
