'use strict';


// part 1
const x = 10, y = 7;

alert(x > y ? "x greater than y": "y greater than x");


// part 3
const wholeNum = prompt("Please enter a whole number", '');
let wholeNegOrPosNum = "Positive";
let wholeNegOrPosNumLen;

if(+wholeNum < 0){
    wholeNegOrPosNumLen = wholeNum.length - 1;
    wholeNegOrPosNum = "Negative"
} else{
    wholeNegOrPosNumLen = wholeNum.length;
}

switch (wholeNegOrPosNumLen){
    case 1:
        alert(`Number ${+wholeNum} single digit ${wholeNegOrPosNum}`)
        break;
    case 2:
        alert(`Number ${+wholeNum} double digit ${wholeNegOrPosNum}`)
        break;
    case 3:
        alert(`Number ${+wholeNum} triple digit ${wholeNegOrPosNum}`)
        break;
    case 4:
        alert(`Number ${+wholeNum} quadruple digit ${wholeNegOrPosNum}`)
        break;
    case 5:
        alert(`Number ${+wholeNum} five digit ${wholeNegOrPosNum}`)
        break;
    case 6:
        alert(`Number ${+wholeNum} six digit ${wholeNegOrPosNum}`)
        break;
    case 7:
        alert(`Number ${+wholeNum} seven digit ${wholeNegOrPosNum}`)
        break;
    default:
        alert( "Too many digits");
}


// part 4
const firstNum = +prompt("Please enter the first number:", '');
const secondNum = +prompt("Please enter the second number:", '');
const thirdNum = +prompt("Please enter the third number:", '');

if(firstNum > secondNum){
    if(firstNum > thirdNum){
        alert(`Max number ${firstNum}`);
    } else if(firstNum < thirdNum){
        alert(`Max number ${thirdNum}`);
    }
} else if(firstNum < secondNum){
    if(secondNum > thirdNum){
        alert(`Max number ${secondNum}`);
    } else if(secondNum < thirdNum){
        alert(`Max number ${thirdNum}`);
    }
}


// part 5
const a = +prompt("Please enter the first number:", '');
const b = +prompt("Please enter the second number:", '');
const c = +prompt("Please enter the third number:", '');

if(a + b > c && a + c > b && b + c > a){
    alert("Triangle exists!");
} else{
    alert("Triangle doesn't exist!");
}
