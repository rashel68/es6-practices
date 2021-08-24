// filter return an array || on the other hand || Find return a first object //

const number = [4, 7, 2, 15, 32, 2, 45, 10];
const largestNumber = number.filter(num => num >= 10);
const lowestNumber = number.filter(num => num < 10);
// console.log(largestNumber, lowestNumber);

const product = [
    { name: 'Phone', price: 15000, color: 'Black' },
    { name: 'Watch', price: 3000, color: 'Black' },
    { name: 'Mouse', price: 350, color: 'Silver' },
    { name: 'Laptop', price: 40000, color: 'Black' }
];

const highPrice = product.filter(product => product.price > 3000);
const lowPrice = product.filter(product => product.price <= 3000);
let getBlack = product.filter(product => product.color == 'Black');

/* const replaceColor = getBlack.filter(getBlack => getBlack.color = 'blue');
console.log(replaceColor); */

// console.log(highPrice);
// console.log(lowPrice);
// console.log(getBlack);


const findBlack = product.find(product => product.color = 'Black');
// console.log(findBlack);