const solveEquation = (a, b, c) => {
  console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);

  const disc = b ** 2 - 4 * a * c;

  const x1 = 0;
  const x2 = 0;

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
