Function.prototype.myApply = function (context, argsArray) {
  let newContext = context;
  const args = [];
  if (context === 'null' || context === 'undefined') {
    newContext = window;
  }

  const uniqueKey = Symbol('temporaryElement');
  newContext[uniqueKey] = this;

  for (let i = 0; i < argsArray.length; i += 1) {
    args.push(`argsArray[${i}]`);
  }

  const customCall = `newContext[uniqueKey](${args.join(',')})`;
  const result = eval(customCall);

  delete newContext[uniqueKey];

  return result;
};

const user = {
  name: 'Vova',
};

const greetings = function (prefix) {
  return `${prefix} ${this.name}`;
};

console.log(greetings.myApply(user, ['Hi']));
