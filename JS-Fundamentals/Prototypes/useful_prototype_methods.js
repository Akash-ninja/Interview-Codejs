const person = {
  sing() {
    return "LA LA LA"
  },
  isHuman: true,
}

Object.create(person) // {}
// --> creates an empty object but it sets the person object on its prototype

const tom = Object.create(person)
tom.sing() // LA LA LA

tom.firstName = "Latham"
tom // {firstName: Latham}

Object.create(null) // {} --> creates empty object with no prototype

// --------------------------------------- //
Object.getPrototypeOf(tom) // prints person object, similar to tom.__proto__

Object.setPrototypeOf(tom, { isHuman: false })

const gukesh = Object.create(person)

person.isPrototypeOf(gukesh) // true
gukesh.isPrototypeOf(gukesh) // false
gukesh.isPrototypeOf(person) // false
person.isPrototypeOf(tom) // true if setPrototypeOf is not applied before, // false if it is applied
