const createSingleton = (createInstance) => {
  let instance = null;

  function getExistingInstance() {
    if (typeof createInstance === "function" && 
        instance === null) {
      instance = createInstance()
    }
    return instance
  }

  return Object.freeze ({
      Instance: () => getExistingInstance()
  })
};

export default createSingleton