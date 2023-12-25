'use strict';


// Part 1
const student = {
    age: 15,
    grade: 10,
    name: "John"
};

student.grade = prompt("Please enter a number from 1 to 11",);
alert(student.grade)

student.course = "IPS1500";
alert(student.course)


// Part 2
const book = {
    title: "Life",
    author: "Vlad",
    year: 2003
};

book.publisher ={
    name: "John",
    location: "Edge-hill Lane road"
};

console.log(book);


// Part 3
const movie = {
    title: "Life",
    genre: "Autobiography",
    year: 2003,
    director: "Vlad"
};

for (let movieKey in movie) {
    const key= movieKey;
    const property = movie[movieKey];
    alert(`${key}: ${property}`);
}


// Part 4
const person1 = {
    title: "Death",
    genre: "Autobiography",
    year: 3002,
    director: "Vlad"
};

const person2 = {
    title: "Life",
    genre: "Autobiography",
    year: 2003,
    director: "Vlad"
};

alert("Are these objects identical?   Answer: " + (person1.toString() === person2.toString()))

const key1 = [];
const key2 = [];
const propertyKey1 = [];
const propertyKey2 = [];

for (let key in person1) {
    key1.push(key);
    propertyKey1.push(person1[key]);
}

for (let key in person2) {
    key2.push(key);
    propertyKey2.push(person2[key]);
}

alert("Are these objects' keys identical?   Answer: " + (key1.toString() === key2.toString()))
alert("What about keys' values?   Answer: " + (propertyKey1.toString() === propertyKey2.toString()))


// Part 5

const animals = [];

const tiger ={
    type: "cat",
    name: "White"
};

const hound ={
    type: "dog",
    name: "Willie"
};

animals.push(tiger)
animals.push(hound)

console.log(animals)