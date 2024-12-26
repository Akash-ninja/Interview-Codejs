// POJO
const person = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    return `${this.name} sings LA LA LA`
  },
}

const pSing = person.sing() // 'Conan LA LA LA'

const psing2 = person.sing
psing2() // ' LA LA LA' what's going on
// --------------------

/* Case 2: Case 1 replication with classes */
class Cat {
  constructor(firstName) {
    this.firstName = firstName
  }

  dance(style = "tango") {
    return `Meow, I am ${this.firstName}` + `and I like to ${style}`
  }
}

const fluffy = new Cat("fluffy")
fluffy.dance()

const fDance = fluffy.dance
fDance() // error

function greet() {
  return "Hi there!!!"
}

greet() // 'hi there' (called on window object)

// console.log() --> window.console.log()

// -------------------left of the dot rule---------------------------------
function whatIsThis() {
  console.log("The value of this is: ", this.color)
}

const myFirstObj = {
  color: "purple",
  age: 2,
  whatIsThis,
}

whatIsThis() // this will point to window obj
myFirstObj.whatIsThis() // this will point to myFirstObj

// ---------------------this and classes--------------------------------

class Cat {
  constructor(firstName) {
    this.firstName = firstName
  }

  static getRandomCat() {
    console.log("THIS IS: ", this) // points to this class
  }

  dance(style = "tango") {
    console.log("THIS is: ", this)
    return `Meow, I am ${this.firstName}` + ` and I like to ${style}`
  }
}

const blue = new Cat("blue")
// blue.dance()

const blueDance = blue.dance
// blueDance() --> error

blueDance.call(blue)

const kitty = new Cat("kitty")
blueDance.call(kitty)

blueDance.call(blue, "salsa")

// ----------------------call, apply--------------------------------------- //

const conan = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    console.log("THIS is: ", this)
    return `${this.name} sings LA LA LA`
  },
}

const lata = {
  name: "Lata Mangashekar",
  city: "Mumbai",
}

conan.sing.call(lata) // here the code says dont call the sing() on conan rather call on lisa
/* Reuse object methods from another object --> function borrowing 
    Share the objects if I wanted to and 
    give JS a particular object to call a function on*/

// ------------------------------------------------------------- //

const ringo = {
  firstName: "Ringo",
  greet: function (greeting) {
    console.log(`${this.firstName} says ${greeting}`)
  },
}

const george = {
  firstName: "George",
  lastName: "Harrison",
}

ringo.greet.call(george, "Namaste")
ringo.greet.apply(george, ["Namaste"]) // takes args as ArrayLike list

// eg. 2
const nums = [1, 5, 2, 100, 3, 5]

Math.max(2, 3, 10, 5) //  10
Math.max(nums) // error

Math.max(...nums) // ok
Math.max.apply(null, nums) // ok (null here rep. this value does not matter)

function maximum() {
  console.log(arguments) // arguments are ArrayLike object and not an array
  return Math.max.apply(null, arguments) // before ES6 era
  // return Math.max(..arguments)
}

console.log(maximum(1, 2, 3, 4)) // arguments gets printed

// ------------------------------------------------------------- //
