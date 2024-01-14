'use strict';

function padString(str, length, symbol = '*', addRight = true){
    if(typeof str !== 'string') throw new Error("str is not the type of string");
    if(typeof length !== 'number') throw new Error("length is not the type of number");

    if(str.length === length) return str;
    if(str.length > length) return str.substring(0, length);

    if(typeof symbol !== 'string' || symbol.length !== 1) throw new Error("symbol is not the type of string or its length is not 1");
    if(typeof addRight !== 'boolean') throw new Error("addRight is not the type of boolean");

    const extension = symbol.repeat(length - str.length);
    return addRight ? str + extension : extension + str;
}


console.log(padString('Hello', 8,));
console.log(padString('Hello', 6,'*', false));
console.log(padString('Hello', 2));
