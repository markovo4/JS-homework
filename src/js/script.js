'use strict';

const x = prompt("Please enter the first number", );
const y = prompt("Please enter the second number", );

const mathOp = prompt("Please chose the operation, 1-Addition;  2-Subtraction;  3-Multiplication;  4-Division", );

if(+mathOp === 1){
    alert(`${x} + ${y} = ${+x + +y}`);
}
else if(+mathOp === 2){
    alert(`${x} - ${y} = ${x - y}`);
}
else if(+mathOp === 3){
    alert(`${x} * ${y} = ${+x * +y}`);
}
else if(+mathOp === 4){
    alert(`${x} / ${y} = ${+x / +y}`);
}
