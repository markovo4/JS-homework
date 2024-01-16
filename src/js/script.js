'use strict';

const arrayOfUniqueNum = [];

const revRandNum = function() {

    let randNum = Math.floor(Math.random() * 101);

    if (!arrayOfUniqueNum.includes(randNum)) {
        arrayOfUniqueNum.push(randNum);
        return randNum;
    } else while (arrayOfUniqueNum.includes(randNum)) {
        randNum = Math.floor(Math.random() * 101);
    }

    arrayOfUniqueNum.push(randNum);
    return randNum;

}

for (let i = 0; i < 100; i++){
    console.log(revRandNum());
}





























// 'use strict';
//
// const revRandNum = function(){
//
//     const randomNum = Math.floor(Math.random()*101);
//     const reverseNum = parseInt(randomNum
//             .toString()
//             .split('')
//             .reverse()
//             .join('')
//         , 10);
//     return reverseNum;
// }
//
// const arrayOfUniqueNum = [];
//
//
// while(arrayOfUniqueNum.length !== 100){
//     let num = revRandNum();
//     if (!arrayOfUniqueNum.includes(num)) {
//         arrayOfUniqueNum.push(num);
//     }
// }
//
// console.log(arrayOfUniqueNum);






