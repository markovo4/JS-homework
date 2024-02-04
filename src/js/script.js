// // IndexOf
// const indexOf = function (array, element) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === element) {
//       return i;
//     }
//   }
//   return -1;
// };
//
// const arr = ['Maria', 'Masha', 'Alex', 'Alex', 'Alex'];
// console.log(indexOf(arr, 'Alex'));

// // lastIndexOf
// const lastIndexOf = function (array, element) {
//   for (let i = array.length; i >= 0; i -= 1) {
//     if (array[i] === element) {
//       return i;
//     }
//   }
//   return -1;
// };
//
// const arr = ['Maria', 'Masha', 'Alex', 'Alex', 'Alex'];
// console.log(lastIndexOf(arr, 'Alex'));

// // find
// const find = function (array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (callback(array[i], i, array)) {
//       return array[i];
//     }
//   }
//   return undefined;
// };
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = find(arr, (element) => element > 5);
// console.log(result);
//
// // findIndex
// const findIndex = function (array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (callback(array[i], i, array)) {
//       return i;
//     }
//   }
//   return -1;
// };
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = findIndex(arr, (element) => element % 3 === 0);
// console.log(result);
//
// // includes
// const includes = function (array, element, fromIndex = 0) {
//   const startIndex = fromIndex >= 0 ? fromIndex : array.length + fromIndex;
//   for (let i = startIndex; i < array.length; i += 1) {
//     if (array[i] === element) return true;
//   }
//   return false;
// };
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(includes(arr, 5, 2));
//
// // every
// const every = function (array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (!callback(array[i], i, array)) {
//       return false;
//     }
//   }
//   return true;
// };
//
// const arr = [5, 6];
// const result = every(arr, (element) => element > 0);
// console.log(result);

// some
// const some = function (array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (callback(array[i], i, array)) {
//       return true;
//     }
//   }
//   return false;
// };
//
// const arr = [-1, -2, -3, -4];
// const result = some(arr, (element) => element < 0);
// console.log(result);
