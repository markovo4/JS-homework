Function.prototype.myApply = function (context, argsArray) {
  const args = [];

  const uniqueKey = Symbol('temporaryElement');
  context[uniqueKey] = this;

  for (let i = 0; i < argsArray.length; i += 1) {
    args.push(`argsArray[${i}]`);
  }

  const customCall = `context[uniqueKey](${args.join(',')})`;
  const result = eval(customCall);
  delete context[uniqueKey];

  return result;
};

const user = {
  name: 'Vova',
};

const greetings = function (prefix) {
  return `${prefix} ${this.name}`;
};

console.log(greetings.myApply(user, ['Hi']));

// Second Method

const customApply = function (func, context, args) {
  context.func = func;
  const result2 = context.func(...args);
  delete context.func;
  return result2;
};

console.log(customApply(greetings, user, ['Hi']));
