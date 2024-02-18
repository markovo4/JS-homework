const parseJSON = (sTring) => {
  try {
    return JSON.parse(sTring);
  } catch (error) {
    return 'Invalid JSON string';
  }
};

console.log(parseJSON('{"name": "John", "age": 30}'));
console.log(parseJSON('{"name": "John", "age":'));
