const findByTestAttr = (component: any, attr: any) =>
  component.find(`[data-test='${attr}']`);

export default findByTestAttr;
