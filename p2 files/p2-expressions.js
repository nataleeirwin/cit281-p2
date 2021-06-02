/*
    CIT 281 Project 2
    Name: Natalee Irwin
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1,alphabet.length-1)];
}

console.log(result);

//getRandomLetter returns a single, random, lowercase letter
const getRandomLetter = function() {
    return Math.floor(Math.random() * alphabet.length);
}
let letter = "";

for (let i = 0; i < 1; i++) {
    letter += alphabet[getRandomLetter(0,alphabet.length-1)];
}
console.log(letter);


//getRandomString returns the random length string
const getRandomString = function(minLength, maxLength) {
    let length = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
    let randomString = "";

    for (let i = 0; i < length; i++) {
    randomString += alphabet[getRandomLetter(0,alphabet.length-1)];
}
return randomString
}
console.log(getRandomString(10,20));


//getSortedString returns a string in ascending order
const getSortedString = function(string) {return string.split("").sort().join("")};

//test function
console.log(getSortedString(result));
