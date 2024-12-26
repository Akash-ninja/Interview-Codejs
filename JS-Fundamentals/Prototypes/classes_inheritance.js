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

class GuideDog extends Dog {
  constructor(name, breed, owner) {
    super(name, breed)
    this.owner = owner
  }

  dangerAlert() {
    return `${this.name} alerts you to danger. Good dog!`
  }
}

const chaco = new GuideDog("Chaco", "Lab", "Maggie")

chaco.dangerAlert() // works (on its own class)
chaco.bark() // works (on Dog class)

chaco.toString() // works (on js object)
