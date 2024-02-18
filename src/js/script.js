// Program 1
const products = [
  { name: 'Apple', price: 10 },
  { name: 'Pear', price: 10 },
  { name: 'Banana', price: 10 },
];

const discount = (obj) => {
  const newPrices = obj.map((object) => ({
    ...object,
    price: object.price * 0.9,
  }));

  return newPrices;
};
console.log(discount(products));

// Program 2
const students = [
  { name: 'Vova', grade: 100 },
  { name: 'Vlad', grade: 50 },
  { name: 'Ihor', grade: 100 },
];

const marks = (stud) => {
  const passedStudents = stud.filter((object) => object.grade > 90);

  return passedStudents;
};
console.log(marks(students));
