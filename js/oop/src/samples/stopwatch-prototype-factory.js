function StopWatch() {
  let timer
  let started = false
  let duration = 0

  Object.defineProperty(this, 'timer', {
    get: function () {
      return timer
    },
    set: function (value) {
      this.timer = value
    },
  })

  Object.defineProperty(this, 'started', {
    get: function () {
      return started
    },
    set: function (value) {
      started = value
    },
  })
  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration
    },
    set: function (value) {
      duration = value
    },
  })
}

StopWatch.prototype.start = function () {
  if (this.started) throw new Error('The watch can not be started twice')
  timer = setInterval(() => this.duration++, 1000)
  this.started = true
}

StopWatch.prototype.stop = function () {
  if (!this.started) throw new Error('The watch can not be stopped twice')
  clearInterval(timer)
  this.started = false
}

StopWatch.prototype.reset = function () {
  this.duration = 0
}

const sw = new StopWatch()
