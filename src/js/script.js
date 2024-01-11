'use strict';

function padString(str, length, symbol = '*', addRight = true){
    if(typeof str !== 'string' || typeof length !== 'number' || typeof symbol !== 'string' || typeof addRight !== 'boolean') return "Error";

    if(str.length < length){
        const symbolRepeat = symbol.repeat(length - str.length);
        return addRight ? str + symbolRepeat : symbolRepeat + str;
    } else if(str.length > length){
        return str.substr(0, length);
    } else {
        return str;
    }
}

console.log(padString('Hello', 8,));
console.log(padString('Hello', 6,'*', false));
console.log(padString('Hello', 2));
