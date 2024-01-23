const greetings = function () {
  return `Hello, ${this.name}`;
};

const showAge = function () {
  return `${this.name}, you are ${this.age} years old!`;
};

const createUser = function (name, age) {
  const user = {
    name,
    age,
  };

  user.greetings = greetings;

  user.showAge = showAge;

  return user;
};

const newUser1 = createUser('Vlad', 20);
console.log(newUser1.greetings());
console.log(newUser1.showAge());

const newUser2 = createUser('Vova', 20);
console.log(newUser2.greetings());
console.log(newUser2.showAge());
