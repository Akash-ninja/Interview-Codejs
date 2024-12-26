class Timer {
  constructor() {
    this.tick = 0
    this.timerId = null
  }

  start() {
    this.timerId = setInterval(() => {
      console.log(this.tick++)

      if (this.tick === 5) this.stop()
    }, 1000)
  }

  stop() {
    clearInterval(this.timerId)
    console.log("Timer stopped!")
  }
}

const timer = new Timer()

timer.start() // 0 1 2 3 4 Timer stopped!
