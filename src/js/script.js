// EXAMPLE: 1
// RESULT: undefined
// EXPLANATION: var declarations, wherever they occur in a script,
// are processed before any code within the script is executed.
// Declaring a variable anywhere in the code is equivalent to declaring it at the top.
// Since it was declared but not defined, it explains the reason behind the UNDEFINED output.
// console.log(a);
// var a = 10;

// EXAMPLE: 2
// RESULT: Hello, world!
// EXPLANATION: functions delcared using FUNCTION-DECLARATION method are processed
// before any code within the script is executed. Similar to the previous example with var
// this means that this function can be called anywhere in the code.
myFunction();

function myFunction() {
  console.log('Hello, world!');
}

// EXAMPLE: 3
// RESULT: Uncaught ReferenceError: Cannot access 'b' before initialization
// EXPLANATION: unlike previous examples, declaring variable with LET
// sends the variable to the Temporal Dead Zone before it was initialized.
// This is done to prevent it becoming a global property of an object WINDOW.
// To prevent global accessibility of an object and optimizing RAM memory usage
// in the operating PC system.
console.log(b);
let b = 5;

// EXAMPLE: 4
// RESULT: Hello from arrow function
// EXPLANATION: function works as intended, despite the fact that it is an arrow function,
// it still follows FUNCTION-EXPRESSION method. Therefore, calling it
// before function initialization would cause an
// ERROR: Uncaught ReferenceError: Cannot access 'myArrowFunction' before initialization
// since it is sent straight to the TDZ before initialization.
const myArrowFunction = () => {
  console.log('Hello from arrow function');
};

myArrowFunction();

// PROGRAM:1 SUCCESSFUL (HOISTING)
print();

function print() {
  console.log('Hello World');
}

// PROGRAM:2 UNSUCCESSFUL (HOISTING)
const y = 10;
const a = 10;
sum(a, y);

const sum = function (x, z) {
  console.log(`${x} + ${z}`);
};

// EXPLANATION: functions that were declared using FUNCTION-EXPRESSION method,
// cannot be called before their initialization. As mentioned before they get
// trapped into TDZ before their initialization
