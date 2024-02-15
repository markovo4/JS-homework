const myApply = function (context, argsArray) {
  if (context === 'null' || context === 'undefined') {
    let globalContext = context;
    globalContext = window;
  }
  if (typeof context !== 'function') throw new Error('Object does not have an apply method');
};
