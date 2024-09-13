// write a function that displays assignment8 in a pretty format

function calculateArithmetic(a, b, FinalFunction) {
  const ans = FinalFunction(a, b);
  console.log(`The answer is ${ans}`);
}

function sum(a, b) {
  return a + b;
}

const value = calculateArithmetic(5, 10, sum);
console.log(value);
