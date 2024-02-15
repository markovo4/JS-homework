const altFlat = function (...arr) {
  if (arr.length > 1) {
    throw new Error(
      'Function accepts only 1 argument, too much arguments provided',
    );
  }
  const newArray = [];
  const flattener = function (array) {
    for (let i = 0; i < array.length; i += 1) {
      if (Array.isArray(array[i])) {
        flattener(array[i]);
      } else {
        newArray.push(array[i]);
      }
    }
    return newArray;
  };
  return flattener(arr);
};

const complexArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
];

console.log(altFlat(complexArray));
