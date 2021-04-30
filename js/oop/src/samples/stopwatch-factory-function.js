function StopWatch() {
  let duration = 0

  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration
    },
    set: function (value) {
      duration = value
    },
  })
}

const sw = new StopWatch()
