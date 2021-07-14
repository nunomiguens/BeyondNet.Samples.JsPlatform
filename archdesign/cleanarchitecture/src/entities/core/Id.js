const cuid = require('cuid');

const IdBuilder = Object.freeze({
    makeId: cuid,
    isValidId: cuid.isCuid,
});

module.exports = IdBuilder;
