const prompt = require('prompt-sync')();

const isNumber = (arg) => {
  const res = prompt(`\x1b[0m${arg} = \x1b[32m`);

  if (!isNaN(res)) return res;
  else {
    const error = `Error. Expected a valid real number, got ${res} instead`;
    console.log(`\x1b[0m${error}`);

    return isNumber(arg);
  }
};

const a = isNumber('a');
const b = isNumber('b');
const c = isNumber('c');

const solveEquation = (a, b, c) => {
  console.log(`\x1b[0mEquation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);

  const disc = b ** 2 - 4 * a * c;

  let x1 = 0;
  let x2 = 0;

  if (disc < 0) console.log('There are 0 roots');
  else if (disc === 0) {
    x1 = -b / (2 * a);
    console.log(`There are 1 root\nx1 = ${x1}`);
  } else {
    x1 = (-b + Math.sqrt(disc)) / (2 * a);
    x2 = (-b - Math.sqrt(disc)) / (2 * a);

    console.log(`There are 2 roots\nx1 = ${x1}\nx2 = ${x2}`);
  }
};

solveEquation(a, b, c);
