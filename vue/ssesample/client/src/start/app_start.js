// By requiring these files, the factories and services will be registered with the injector.
// You could just export the factory functions and register them all here, but this would mean
// separating the function from the array of dependencies it uses.
require('./constants');
require('./services');

