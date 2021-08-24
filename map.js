const numbers = [5, 2, 6, 2, 15];
// const output = [];
const doubleIt = num => num * 2;

/* for (const number of numbers) {
    const result = doubleIt(number);
    output.push(result);
} */
// console.log(output);
// const output = numbers.map(doubleIt);
// const output = numbers.map(x => x * 2);
const square = numbers.map(x => x ** 2);
console.log(square);