class CounterGame {
  constructor(initialCount, buttonElement) {
    this.count = initialCount
    this.button = buttonElement
    this.button.addEventListener("click", () => this.incrementCount())
  }

  incrementCount() {
    console.log(this.count)
    this.count += 1
  }
}

const btn = document.querySelector("#clickMe")
const counter = new CounterGame(10, btn)

const btn2 = document.querySelector("#clickMe2")
const counter2 = new CounterGame(100, btn2)
