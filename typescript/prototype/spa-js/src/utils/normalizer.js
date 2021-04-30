const normalize = (items, key) =>
  items.reduce((obj, item) => {
    // eslint-disable-next-line no-param-reassign
    obj[item[key]] = item
    return obj
  }, {})

export default normalize
