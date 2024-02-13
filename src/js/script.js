const altFlat = function (...arr) {
  if (arr.length > 1) {
    throw new Error(
      'Function accepts only 1 argument, too much arguments provided',
    );
  }
  const newArray = [];
  const flattener = function (array) {
    for (const element of array) {
      if (Array.isArray(element)) {
        flattener(element);
      } else {
        newArray.push(element);
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
