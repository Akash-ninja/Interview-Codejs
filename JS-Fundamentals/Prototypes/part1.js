class Dog {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }

  bark() {
    return `${this.name} says woof!`
  }

  sleep() {
    return `${this.name} is sleeping!`
  }
}

const elton = new Dog("Elton", "Aussie")
// Dog {breed: 'Aussie', name: 'Elton', [[Prototype]]: Object}
// where is bark and sleep methods

const wyatt = new Dog("Wyatt", "Golden")

/* Constructor function */
function Dog2(name, breed) {
  this.name = name
  this.breed = breed

  this.bark = function () {
    return `${this.name} says woof!`
  }

  this.sleep = function () {
    return `${this.name} is sleeping!`
  }
}

const elton2 = new Dog2("Elton2", "Aussie2")
// Dog {bark: f(), breed: 'Aussie', name: 'Elton', sleep: f(), [[Prototype]]: Object}

const wyatt2 = new Dog2("Wyatt2", "Golden2")

elton2.bark === wyatt2.bark // false (created from constructor function)
// that means every object of Dog2 will have their own copy of methods

elton.bark === wyatt.bark // true (created from class)
// here class methods share the same reference in the memory
