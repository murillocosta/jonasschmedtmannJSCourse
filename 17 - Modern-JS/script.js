// Importing module
console.log('Importing Module');
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';

// addToCart('Car', 1);
// console.log(price, totalQuantity);

// importing everything from a module
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart.apply('bread', 5);

// import default
// import add from './shoppingCart.js';

import add, { cart } from './shoppingCart.js';

add('grape', 1);
add('bread', 5);
add('pizza', 4);
add('apples', 10);

/////// top level await

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
