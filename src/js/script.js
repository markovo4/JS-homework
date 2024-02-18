// // Program 1
const array = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const filteredArr = array.filter((arr) => arr.length > 5);
console.log(filteredArr);

// // Program 2
const arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtArrOfNum = arrOfNum.filter((arr) => arr % 2 === 0);
const sumOfNum = (arrayOfNum) => {
  const newArrayOfNum = arrayOfNum;
  let sum = 0;
  for (let i = 0; i < newArrayOfNum.length; i += 1) {
    sum += newArrayOfNum[i];
  }
  return sum;
};

console.log(sumOfNum(filtArrOfNum));

// Program 3
const arrOfNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arraySum = arrOfNum2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);

console.log(arraySum);
