const makeSystemDb = require('./system-db');
const makeModuleDb = require('./module-db');
const makeOptionDb = require('./option-db');
const makeCommandDb = require('./command-db');
const makeRolDb = require('./rol-db');

module.exports = {
    makeSystemDb,
    makeModuleDb,
    makeOptionDb,
    makeCommandDb,
    makeRolDb,
};
