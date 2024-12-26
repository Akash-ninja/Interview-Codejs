class Counter {
  constructor(startingNum = 0, incrementNum = 1) {
    this.count = startingNum
    this.incrementNum = incrementNum
  }

  start() {
    console.log(this)

    setInterval(this.incrementAndPrint, 1000)
    // we'll lose the value of this inside the func and this.count will be undefined
    // since setInterval is called on window object so this refers to window obj,
    // to fix this below is the resolution

    setInterval(this.incrementAndPrint.bind(this), 1000)
  }

  incrementAndPrint() {
    console.log(this.count)
    this.count += this.incrementNum
  }
}

const counter = new Counter()

// counter.start()
