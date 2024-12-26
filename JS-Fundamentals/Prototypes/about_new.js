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

// SIMILAR TO below function =>

/* Constructor function */
function Dog(name, breed) {
  console.log("THIS is: ", this)

  this.name = name
  this.breed = breed
}

function User(username, email) {
  this.username = username
  this.email = email
  this.isAdmin = false
}

Dog("Elton", "Golden") // 'this' points to window object and does not make any object

new Dog("Wyatt", "German Shipered") // 'this' points to Dog object (follows 'new' rules of 4 points)
