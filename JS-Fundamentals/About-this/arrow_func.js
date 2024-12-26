class Cat {
  constructor(firstName) {
    this.firstName = firstName
  }

  superGreet() {
    console.log(`#1: I am ${this.firstName}`) // works, obvs

    setTimeout(function () {
      console.log(`#2: I am ${this.firstName}`) // error, fetches this value as window.firstName
    }, 500)

    setTimeout(() => {
      console.log(`#3 I am ${this.firstName}`) // works, fetches correct value of this.firstName
    })
  }
}

let kitty = new Cat("Kitty")
kitty.superGreet()
