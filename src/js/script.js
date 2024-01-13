'use strict';

function defWordEnding(userAge){

    if(userAge === null || userAge === 0){
        return 'Error';
    } else if(userAge % 10 === 1 && userAge % 100 !== 11){
        return `год`;
    } else if(userAge % 10 >= 2 && userAge % 10 <= 4 && userAge % 100 !== 12  && userAge % 100 !== 13 && userAge % 100 !== 14) {
        return `года`;
    } else {
        return `лет`;
    }

}
const userAge = +prompt("Please enter your age: ", );
alert(`Вам ${userAge} ${defWordEnding(userAge)}!`)

