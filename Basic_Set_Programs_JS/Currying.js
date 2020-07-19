/* Currying simply means copying a function
Currying in JS can be done by 2 ways -
1. using 'bind' keyword  2. Closures */

// using 'bind'
let multiply = function (x, y) {
  console.log(x * y);
};

let multilplyByTwo = multiply.bind(this, 2);
multilplyByTwo(5);

let multilplyByThree = multiply.bind(this, 3);
multilplyByThree(5);

// using Closures
let multiply_v2 = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multilplyByTwo_v2 = multiply_v2(2);
multilplyByTwo_v2(6);

let multilplyByThree_v2 = multiply_v2(3);
multilplyByThree_v2(6);
