function Dog(name, breed) {
  this.name = name
  this.breed = breed
}

Dog.prototype.bark = function () {
  return `${this.name} says woof!`
}

Dog.prototype.sleep = function () {
  return `${this.name} is sleeping!`
}

const elton = new Dog("Elton", "Golden")

const bilbo = new elton.constructor("Bilbo", "pug") // creates a new instance of Dog

bilbo.bark() // Bilbo says woof!
