const arrayOfUniqueNum = [];

const revRandNum = function () {
  let randNum = Math.floor(Math.random() * 101);
  if (!arrayOfUniqueNum.includes(randNum)) {
    arrayOfUniqueNum.push(randNum);
    return randNum;
  }
  while (arrayOfUniqueNum.includes(randNum)) {
    randNum = Math.floor(Math.random() * 101);
  }
  arrayOfUniqueNum.push(randNum);
  return randNum;
};

for (let i = 0; i < 100; i += 1) {
  console.log(revRandNum());
}
