const Module = require('./module-schema');
const Option = require('./option-schema');
const System = require('./system-schema');

const mongoose = require('mongoose');

const makeModuleDb = ({HttpError}) => {
    return Object.freeze({
        findAll,
        findById,
        findByName,
        findOptions,
        findBy,
        insert,
        remove,
        update,
    });

    async function findAll(systemId) {
        try {
            let modules = await Module.find({system: systemId}).populate({path: 'system', select: 'name'});

            return modules.map(module => module.toObject({getters: true}));
        } catch (err) {
            throw new HttpError(err.message, 500);
        }
    }

    async function findById(id) {
        try {
            let module = await Module.findById(id).populate({path: 'system', select: 'name'});

            if (!module) return null;

            return module.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message), 500;
        }
    }

    async function findByName(name, systemId) {
        try {
            let module = await Module.findOne({$and: [{name}, {system: systemId}]}).populate({
                path: 'system',
                select: 'name',
            });

            if (!module) return null;

            return module.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message), 500;
        }
    }

    async function findOptions(moduleId) {
        let options = await Option.find({module: moduleId});

        if (!options.length) return null;

        return options.map(option => option.toObject({getters: true}));
    }

    async function findBy(query = {}) {
        let modules = await Module.find(query);

        return modules.map(module => module.toObject({getters: true}));
    }

    async function insert({id, name, system, status, createdOn}) {
        try {
            const session = await mongoose.startSession();
            session.startTransaction();

            const moduleToInsert = new Module({
                id,
                name,
                system,
                status,
                createdOn,
            });

            await moduleToInsert.save({session: session});
            let systemToUpdate = await System.findById(system);
            systemToUpdate.modules.push(moduleToInsert);
            await systemToUpdate.save({session: session});
            await session.commitTransaction();

            return moduleToInsert.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function update({id, name, status, modifiedOn}) {
        try {
            const moduleToUpdate = await Module.findByIdAndUpdate(
                {_id: id},
                {$set: {name, status, modifiedOn}},
                {new: true, runValidators: true}
            );

            return moduleToUpdate.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function remove(id) {
        try {
            let moduleToDelete = await Module.findById(id).populate('system');

            const session = await mongoose.startSession();
            session.startTransaction();
            await moduleToDelete.remove({session: session});
            moduleToDelete.system.modules.pull(moduleToDelete);
            await moduleToDelete.system.save({session: session});
            await session.commitTransaction();

            return moduleToDelete.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }
};

module.exports = makeModuleDb;
