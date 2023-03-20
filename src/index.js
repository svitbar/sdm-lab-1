const prompt = require('prompt-sync')();
const fs = require('fs');
const filename = process.argv[2];

const isNumber = (arg) => {
  const res = prompt(`\x1b[0m${arg} = \x1b[32m`);

  if (arg === 'a' && (res === '' || parseFloat(res) === 0)) {
    const error = `Error. A cannot be empty or 0`;
    console.log(`\x1b[0m${error}`);

    return isNumber(arg);
  }

  if (!isNaN(res)) return res;
  else {
    const error = `Error. Expected a valid real number, got ${res} instead`;
    console.log(`\x1b[0m${error}`);

    return isNumber(arg);
  }
};

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

const nonInteractive = () => {
  if (!fs.existsSync(filename)) {
    console.error(`Error. File ${filename} do not exists`);
    process.exit(1);
  }

  const data = fs.readFileSync(filename, 'utf8');
  const arg = data.split('\\n')[0].split('\\s');

  for (const i of arg) {
    if (isNaN(i)) {
      console.error('Error. Invalid file format');
      process.exit(1);
    }
  }

  if (parseFloat(arg[0]) === 0) {
    console.error('Error. A cannot be 0');
    process.exit(1);
  } else solveEquation(arg[0], arg[1], arg[2]);
};

const interactive = () => {
  const a = isNumber('a');
  const b = isNumber('b');
  const c = isNumber('c');

  solveEquation(a, b, c);
};

function start() {
  if (process.argv[2]) nonInteractive();
  else interactive();
}

start();
