const _items = new WeakMap()

class Stack {
  constructor() {
    _items.set(this, [])
  }

  get count() {
    return _items.get(this)
  }

  push(value) {
    _items.get(this).push(value)
  }

  peek() {
    const items = _items.get(this)

    if (items.length === 0) throw new Error('Stack cannot be empty')

    return items[items.length - 1]
  }

  pop() {
    const items = _items.get(this)

    if (items.length === 0) throw new Error('Stack cannot be empty')

    return items.pop()
  }

  get count() {
    return _items.get(this).length
  }
}

const s = new Stack()
