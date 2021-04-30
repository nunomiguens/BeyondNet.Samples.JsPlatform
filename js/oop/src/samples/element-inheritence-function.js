function HtmlElement() {
  this.Click = () => {
    console.log('Clicked')
  }
}

HtmlElement.prototype.focus = () => {
  console.log('Focused')
}

function HtmlSelectElement(items = []) {
  this.items = items

  this.addItem = (value) => {
    this.items.push(value)
  }

  this.removeItem = (index) => {
    this.items[index].remove()
  }
}

HtmlSelectElement.prototype = new HtmlElement()

const e = new HtmlElement()
const s = new HtmlSelectElement()
