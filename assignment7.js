// write a program that reverses all the element in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let reverses = [];

for (let i = 0; i < numbers.length; i++) {
  reverses.push(numbers[numbers.length - i - 1]);
}

console.log(reverses);
