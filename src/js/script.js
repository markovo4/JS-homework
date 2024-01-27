const createUser = function (name, age) {
  const greetings = function () {
    return `Hello ${this.name}!`;
  };

  const showAge = function () {
    return `${this.name}, you are ${this.age} years old!`;
  };

  const user = {
    name,
    age,
    greetings,
    showAge,
  };

  return user;
};

const newUser1 = createUser('Vlad', 20);

console.log(newUser1.greetings());
console.log(newUser1.showAge());

const newUser2 = createUser('Vova', 20);

console.log(newUser2.greetings());
console.log(newUser2.showAge());

if (newUser2.showAge() === newUser1.showAge()) {
  console.log('True');
} else {
  console.log('False');
}
