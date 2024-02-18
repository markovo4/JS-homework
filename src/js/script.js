// Program 1
const a = 10;
const b = 10;
const sum = (x, y) => x + y;

console.log(sum(a, b));

// Program 2
const word = 'Hello';
const wordLength = (aString) => aString.length;

console.log(wordLength(word));

// Program 3
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrIncrement = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i]++;
  }
  return array;
};

console.log(arrIncrement(arr));
