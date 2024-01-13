'use strict';

function defWordEnding(userAge){

    if(isNaN(userAge) || userAge === null || userAge === 0){
        return 'Error';
    } else if(userAge % 10 === 1 && userAge % 100 !== 11){
        return `${userAge} год`;
    } else if(userAge % 10 >= 2 && userAge % 10 <= 4 && userAge % 100 !== 12  && userAge % 100 !== 13 && userAge % 100 !== 14) {
        return `${userAge} года`;
    } else {
        return `${userAge} лет`;
    }

}
const userAge = +prompt("Please enter your age: ", );
alert(defWordEnding(userAge))