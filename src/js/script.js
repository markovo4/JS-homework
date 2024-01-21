const greetings = function () {
  console.log(`Hello, ${this.name}`);
};

const showAge = function () {
  console.log(`${this.name}, you are ${this.age} years old!`);
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
newUser1.greetings();
newUser1.showAge();

const newUser2 = createUser('Vova', 20);
newUser2.greetings();
newUser2.showAge();
