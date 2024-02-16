Function.prototype.myBind = function (context, ...args) {
  const originalFunc = this;

  return function (...innerArgs) {
    return originalFunc.apply(context, args.concat(innerArgs));
  };
};

const user = {
  name: 'Vova',
};

const greetings = function (greet) {
  return `${greet} ${this.name}`;
};

const newUserMethod = greetings.myBind(user, 'Hello');
const newUserMethod2 = greetings.myBind(user, 'Hello');

console.log(greetings === greetings);
console.log(newUserMethod === greetings);
console.log(newUserMethod === newUserMethod2);
