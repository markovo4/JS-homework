'use strict';


// part 1
// const dateOfBirth = +prompt("When were you born? please specify the year", '');
// const city = prompt("Which city you live in?", '');
// const favSport = prompt("What is your favourite sport?", '');
//
//
// if(city === "Kiev"){
//     alert(`You are ${2023 - dateOfBirth} years old! You live in ${city}, which is capital of Ukraine! And your favourite sport is ${favSport}.`);
// }
//
// else if(city === "Washington"){
//     alert(`You are ${2023 - dateOfBirth} years old! You live in ${city}, which is capital of USA! And your favourite sport is ${favSport}.`);
// }
//
// else if(city === "London") {
//     alert(`You are ${2023 - dateOfBirth} years old! You live in ${city}, which is capital of Great Britain! And your favourite sport is ${favSport}.`);
// }
//
// else{
//     alert(`You are ${2023 - dateOfBirth} years old! You live in ${city}, which is a great city! And your favourite sport is ${favSport}.`);
// }


// part 2
const favSport = prompt("What is your favourite sport?", '');
const city = prompt("Which city you live in?", '');
const dateOfBirth = +prompt("When were you born? please specify the year", '');

if(favSport) {
    if(city) {
        if(dateOfBirth){
            if (favSport === "Figure Skating") {
                alert(`You are ${2023 - dateOfBirth} years old! You live in ${city}, which is a great city! Cool! you wanna be like Shoma Uno in ${favSport}?`);
            } else if (favSport === "Wrestling") {
                alert(`You are ${2023 - dateOfBirth} years old! You live in ${city}, which is a great city! Cool! you wanna be like Zaurbek Sidakov in ${favSport}?`);
            } else if (favSport === "Soccer") {
                alert(`You are ${2023 - dateOfBirth} years old! You live in ${city}, which is a great city! Cool! you wanna be like Cristiano Ronaldo in ${favSport}?`);
            } else if (favSport) {
                alert(`You are ${2023 - dateOfBirth} years old! You live in ${city}, which is a great city! And your favourite sport is ${favSport}.`);
            }
        } else if(dateOfBirth === 0){
            if (favSport === "Figure Skating"){
                alert(`Sorry,but you left the "age" field empty! You live in ${city}, which is a great city! Cool! you wanna be like Shoma Uno in ${favSport}?`);
            } else if (favSport === "Wrestling") {
                alert(`Sorry,but you left the "age" field empty! You live in ${city}, which is a great city! Cool! you wanna be like Zaurbek Sidakov in ${favSport}?`);
            } else if (favSport === "Soccer") {
                alert(`Sorry,but you left the "age" field empty! You live in ${city}, which is a great city! Cool! you wanna be like Cristiano Ronaldo in ${favSport}?`);
            } else if (favSport) {
                alert(`Sorry,but you left the "age" field empty! You live in ${city}, which is a great city! And your favourite sport is ${favSport}.`);
            }
        }
    } else if(city === null){
        if (dateOfBirth){
            if (favSport === "Figure Skating") {
                alert(`You are ${2023 - dateOfBirth} years old!  Sorry,but you left the "city" field empty! Cool! you wanna be like Shoma Uno in ${favSport}?`);
            } else if (favSport === "Wrestling") {
                alert(`You are ${2023 - dateOfBirth} years old!  Sorry,but you left the "city" field empty! Cool! you wanna be like Zaurbek Sidakov in ${favSport}?`);
            } else if (favSport === "Soccer") {
                alert(`You are ${2023 - dateOfBirth} years old!  Sorry,but you left the "city" field empty! Cool! you wanna be like Cristiano Ronaldo in ${favSport}?`);
            } else if (favSport) {
                alert(`You are ${2023 - dateOfBirth} years old!  Sorry,but you left the "city" field empty! And your favourite sport is ${favSport}.`);
            }
        } else if(dateOfBirth === 0){
            if (favSport === "Figure Skating"){
                alert(`Sorry,but you left the "age" field empty!  Sorry,but you left the "city" field empty! Cool! you wanna be like Shoma Uno in ${favSport}?`);
            } else if (favSport === "Wrestling") {
                alert(`Sorry,but you left the "age" field empty!  Sorry,but you left the "city" field empty! Cool! you wanna be like Zaurbek Sidakov in ${favSport}?`);
            } else if (favSport === "Soccer") {
                alert(`Sorry,but you left the "age" field empty!  Sorry,but you left the "city" field empty! Cool! you wanna be like Cristiano Ronaldo in ${favSport}?`);
            } else if (favSport) {
                alert(`Sorry,but you left the "age" field empty!  Sorry,but you left the "city" field empty! And your favourite sport is ${favSport}.`);
            }
        }
    }
}
else if(favSport === null){
    if(city) {
        if(dateOfBirth){
            alert(`You are ${2023 - dateOfBirth} years old! You live in ${city}, which is a great city! Sorry,but you left the "sport" field empty `);
        }
    }
    else if(city === null){
        if(dateOfBirth){
            alert(`You are ${2023 - dateOfBirth} years old! Sorry,but you left the "city" field empty! Sorry,but you left the "sport" field empty `);
        }
        else if(dateOfBirth === 0){
            alert(`Sorry,but you left the "age" field empty! Sorry,but you left the "city" field empty! Sorry,but you left the "sport" field empty `);
        }
    }
}