const friends = ['Tom Cruise', 'Tamjid', 'Minhaj', 'Rokib', 'Hasan', 'Ibrahim'];
const friendsLength = friends.map(friend => friend.length);
// console.log(friendsLength);

const product = [
    { name: 'Phone', price: 15000, color: 'Black' },
    { name: 'Watch', price: 3000, color: 'Black' },
    { name: 'Mouse', price: 350, color: 'Silver' },
    { name: 'Laptop', price: 40000, color: 'Black' }
]

const productName = product.map(product => product.name);
const productPrice = product.map(product => product.price);
const productColor = product.map(product => product.color);
// console.log(productName, productPrice, productColor);
// const allProduct = product.map(product => console.log(product));
// const prod = product.forEach(product => console.log(product));
// product.forEach(product => console.log(product));


