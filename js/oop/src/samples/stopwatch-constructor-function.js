function StopWatch() {
  let started = false
  let timer

  let duration = 0

  this.start = function () {
    if (started) throw new Error('The watch can not be started twice')
    timer = setInterval(() => this.duration++, 1000)
    started = true
  }

  this.stop = function () {
    if (!started) throw new Error('The watch can not be stopped twice')
    clearInterval(timer)
    started = false
  }

  this.reset = function () {
    this.duration = 0
  }

  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration
    },
  })
}

const sw = new StopWatch()
