// write a program to print largest number in the array

let numbers = [1, 2, 3, 4, 5, 6, 7, 97, 8, 9, 10];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log(largest);
