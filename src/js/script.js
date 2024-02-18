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
console.log(newUserMethod);

// Second Method
const myApply = function (func, context, args) {
  context.func = func;
  const result = context.func(...args);
  delete context.func;
  return result;
};
const customBind = function (func, context, args) {
  return function () {
    myApply(func, context, ...args);
  };
};

const newUserMethod2 = customBind(greetings, user, 'Hello');
console.log(newUserMethod2);
