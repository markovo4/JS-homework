'use strict';

function defWordEnding(userAge){
    switch(true){
        case userAge === null || userAge === 0:
            return 'Error';
            break;
        case userAge % 10 === 1 && userAge % 100 !== 11:
            return `Вам ${userAge} год!`;
            break;
        case userAge % 10 >= 2 && userAge % 10 <= 4 && userAge % 100 !== 12  && userAge % 100 !== 13 && userAge % 100 !== 14:
            return `Вам ${userAge} года!`;
            break;
        default:
            return `Вам ${userAge} лет!`;
            break
    }
}
const userAge = +prompt("Please enter your age: ", );
alert(defWordEnding(userAge))

