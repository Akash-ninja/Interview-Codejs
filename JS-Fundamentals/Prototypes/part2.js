const myObj = {
  color: "purple",
  score: 99,
  greet() {
    console.log("HIII")
  },
}

myObj.__proto__ // prints out JS own Object

function Dog(name, breed) {
  this.name = name
  this.breed = breed

  /* this.bark = function () {
    return `${this.name} says woof!`
  }

  this.sleep = function () {
    return `${this.name} is sleeping!`
  } */
}

// by doing below the bark and sleep method sits on the prototype of Dog and now
// any instance of Dog will have the same copy of these methods
Dog.prototype.bark = function () {
  return `${this.name} says woof!`
}

Dog.prototype.sleep = function () {
  return `${this.name} is sleeping!`
}

const pepper = new Dog("Pepper", "Schnoodle")
console.log(pepper)

const elton = new Dog("Elton", "Golden")

pepper.bark === elton.bark // true
