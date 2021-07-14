import R from "ramda";

export const getPath = (path, obj) => {
  const value = R.path(path, obj);

  console.log(value);
};
