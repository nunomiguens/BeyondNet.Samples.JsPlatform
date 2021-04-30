const normalize = (items, key) => {
  return items.reduce((obj, item) => {
    obj[item[key]] = item
    return obj
  }, {})
}

export default normalize
