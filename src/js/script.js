'use strict';

const userFirstName = prompt("Please enter your first name: ");
const userLastName = prompt("Please enter your last name: ");
const userAge = prompt("Please enter your age: ");

alert("Hello" + " " + userFirstName + " " + userLastName + " " + "you are" + " " + userAge + " " + "years old!");

// OR

// alert("Hello " + userFirstName + " " + userLastName + " you are " + userAge + " years old!");

const fiveDigitNumber = prompt("Please enter a five digit number: ");

const firstNumberRemainder = (fiveDigitNumber % 10000);
const firstNumber = (Math.floor(fiveDigitNumber / 10000));

const secondNumberRemainder = (firstNumberRemainder % 1000);
const secondNumber = (Math.floor(firstNumberRemainder / 1000));

const thirdNumberRemainder = (secondNumberRemainder % 100);
const thirdNumber = (Math.floor(secondNumberRemainder / 100));

const fourthNumber = (Math.floor(thirdNumberRemainder / 10));
const fifthNumber = (thirdNumberRemainder % 10);

alert(firstNumber + " " + secondNumber + " " + thirdNumber + " " + fourthNumber + " " + fifthNumber)