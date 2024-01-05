'use strict';

// part 1
// const a = prompt("Please input a number: ", '');
//
//
// alert(+a === 0 ? "Correct": "Wrong");
// alert(+a > 0 ? "Correct": "Wrong");
// alert(+a < 0 ? "Correct": "Wrong");
// alert(+a >= 0 ? "Correct": "Wrong");
// alert(+a <= 0 ? "Correct": "Wrong");
// alert(+a !== 0 ? "Correct": "Wrong");
// alert(+a > 0 ? "Correct": "Wrong");
// alert(a === "test" ? "Correct": "Wrong");
// alert(+a === 1 && typeof(+a) === typeof(1) ? "Correct": "Wrong");
// alert(+a > 0 && +a < 5 ? "Correct": "Wrong");
// alert(+a === 0 || +a === 2 ? +a + 7: +a/10);


// part 2
// const a = prompt("Please input a number: ", '');
// const b  = prompt("Please input a number: ", '');
//
// alert(+a <= 1 && +b >= 3? +a + +b : a - b);
// alert(+a > 2 && +a < 11 || +b >= 6 && +b < 14? "Correct" : "Wrong");


// part 3
const num  = +prompt("Please enter a number in between 1-4 included:", '')
let result;
switch (num){
    case 1:
        result = "Winter";
        alert(result);
        break;
    case 2:
        result = "Spring";
        alert(result);
        break;
    case 3:
        result = "Summer";
        alert(result);
        break;
    case 4:
        result = "Autumn";
        alert(result);
        break;
    default:
        result = "aKu-Na MA TATA";
        alert(result);
}

















