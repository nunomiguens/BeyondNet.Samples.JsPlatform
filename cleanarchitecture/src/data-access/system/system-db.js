const System = require('./system-schema');
const Module = require('./module-schema');
const Command = require('./command-schema');
const Rol = require('./rol-schema');
const Company = require('../company/company-schema');

const mongoose = require('mongoose');

const makeSystemDb = ({HttpError}) => {
    return Object.freeze({
        findAll,
        findById,
        findByName,
        findModules,
        findRoles,
        findCommands,
        findBy,
        uploadPhoto,
        insert,
        remove,
        update,
    });

    async function findAll() {
        try {
            let systems = await System.find({});

            return systems.map(system => system.toObject({getters: true}));
        } catch (err) {
            throw new HttpError(err.message, 500);
        }
    }

    async function findById(id) {
        try {
            let system = await System.findById(id);

            if (!system) return null;

            return system.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message), 500;
        }
    }

    async function findByName(name) {
        let system = await System.findOne({name});

        if (!system) return null;

        return system.toObject({getters: true});
    }

    async function findModules(systemId) {
        let modules = await Module.find({system: systemId});

        if (!modules.length) return null;

        return modules.map(module => module.toObject({getters: true}));
    }

    async function findRoles(systemId) {
        let roles = await Rol.find({system: systemId});

        if (!roles.length) return null;

        return roles.map(rol => rol.toObject({getters: true}));
    }

    async function findCommands(systemId) {
        let commands = await Command.find({system: systemId});

        if (!commands.length) return null;

        return commands.map(command => command.toObject({getters: true}));
    }

    async function findBy(query = {}) {
        let systems = await System.find(query);

        return systems.map(system => system.toObject({getters: true}));
    }

    async function insert({id, name, company, photo, averageCost, status, createdOn}) {
        try {
            const session = await mongoose.startSession();
            session.startTransaction();

            const systemToInsert = new System({
                id,
                name,
                company,
                photo,
                averageCost,
                status,
                createdOn,
            });

            await systemToInsert.save({session: session});
            let companyToUpdate = await Company.findById(company);
            companyToUpdate.systems.push(systemToInsert);
            await companyToUpdate.save({session: session});
            await session.commitTransaction();

            return systemToInsert.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function update({id, name, company, status, modifiedOn}) {
        try {
            const systemToUpdate = await System.findByIdAndUpdate(
                {_id: id},
                {
                    $set: {
                        name,
                        company,
                        status,
                        modifiedOn,
                    },
                },
                {new: true}
            );

            return systemToUpdate.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function uploadPhoto(id, fileName) {
        try {
            const systemToUpdate = await System.findByIdAndUpdate(
                {_id: id},
                {
                    $set: {
                        photo: fileName,
                    },
                },
                {new: true}
            );

            return systemToUpdate.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function remove(id) {
        try {
            let systemToDelete = await System.findById(id).populate('company');

            const session = await mongoose.startSession();
            session.startTransaction();
            await systemToDelete.remove({session: session});
            systemToDelete.company.systems.pull(systemToDelete);
            await systemToDelete.company.save({session: session});
            await session.commitTransaction();

            return systemToDelete.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }
};

module.exports = makeSystemDb;
