const normalize = (items: any[], key: string) => {
  return items.reduce((obj, item) => {
    obj[item[key]] = item;
    return obj;
  }, {});
};

export default normalize;
