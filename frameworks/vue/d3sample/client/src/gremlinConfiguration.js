import gremlins from 'gremlins.js/src/main'

function getGremlin (prohibited, element, changeType, changeLayout, resetZoom) {
  const horde = gremlins.createHorde()
    .gremlin(gremlins.species.clicker()
    .canClick((element) => {
      if (prohibited === element) {
        return false
      }
      switch (element.tagName) {
        case 'circle':
        case 'BUTTON':
        case 'text':
          return true

        case 'INPUT':
          return element.type === 'checkbox'
      }
      return false
    }).maxNbTries(15))
    .gremlin(function () {
      changeType()
    })
    .gremlin(function () {
      changeLayout()
    })
    .gremlin(function () {
      resetZoom()
    })
    .gremlin(function () {
      const circles = [...element.getElementsByClassName('node--internal')]
      if (circles.length === 0) {
        return
      }
      const idx = Math.round(Math.random() * (circles.length - 1))
      const circle = circles[idx]
      const evt = document.createEvent('MouseEvents')
      evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      circle.dispatchEvent(evt)
    })
    .strategy(gremlins.strategies.distribution()
      .delay(100)
      .distribution([
        0.8,
        0.04,
        0.04,
        0.04,
        0.08
      ])
    )

  return horde
}

export {
  getGremlin
}
