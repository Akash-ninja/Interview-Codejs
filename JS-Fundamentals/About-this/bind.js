/* bind returns new copy of a function where we can bind in a value for this */
/* bind() is a method on functions that returns a bound copy of the function */

function applySalesTax(taxRate, price) {
  return price + price * taxRate
}

const applyWBSalesTax = applySalesTax.bind(null, 0.2)
applyWBSalesTax(1000) // 1200

const applyMHSalesTax = applySalesTax.bind(null, 0.25)
applyMHSalesTax(1000) // 1250

function multiply(a, b) {
  return a * b
}

// we bind one argument here which is 2
const double = multiply.bind(null, 2)
console.log(double(5)) // 10

const triple = multiply.bind(null, 3)
console.log(triple(5)) // 15

const alwaysNine = multiply.bind(null, 3, 3)
alwaysNine() // 9
