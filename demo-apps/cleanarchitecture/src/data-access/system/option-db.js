const Option = require('./option-schema');
const Module = require('./module-schema');

const mongoose = require('mongoose');

const makeOptionDb = ({HttpError}) => {
    return Object.freeze({
        findAll,
        findById,
        findByName,
        findBy,
        insert,
        remove,
        update,
    });

    async function findAll(moduleId) {
        try {
            let options = await Option.find({module: moduleId}).populate({path: 'module', select: 'name'});

            return options.map(option => option.toObject({getters: true}));
        } catch (err) {
            throw new HttpError(err.message, 500);
        }
    }

    async function findById(id) {
        try {
            let option = await Option.findById(id).populate({path: 'module', select: 'name'});

            if (!option) return null;

            return option.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message), 500;
        }
    }
    async function findByName(name, moduleId) {
        try {
            let option = await Option.findOne({$and: [{name}, {module: moduleId}]}).populate({
                path: 'module',
                select: 'name',
            });

            if (!option) return null;

            return option.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message), 500;
        }
    }

    async function findBy(query = {}) {
        let options = await Option.find(query);

        return options.map(option => option.toObject({getters: true}));
    }

    async function insert({id, name, module, status, createdOn}) {
        try {
            const session = await mongoose.startSession();
            session.startTransaction();

            const optionToInsert = new Option({
                id,
                name,
                module,
                status,
                createdOn,
            });

            await optionToInsert.save({session: session});
            let moduleToUpdate = await Module.findById(module);
            moduleToUpdate.options.push(optionToInsert);
            await moduleToUpdate.save({session: session});
            await session.commitTransaction();

            return optionToInsert.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function update({id, name, status, modifiedOn}) {
        try {
            const optionToUpdate = await Option.findByIdAndUpdate(
                {_id: id},
                {$set: {name, status, modifiedOn}},
                {new: true, runValidators: true}
            );

            return optionToUpdate.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function remove(id) {
        try {
            let optionToDelete = await Option.findById(id).populate('module');

            const session = await mongoose.startSession();
            session.startTransaction();
            await optionToDelete.remove({session: session});
            optionToDelete.module.options.pull(optionToDelete);
            await optionToDelete.module.save({session: session});
            await session.commitTransaction();

            return optionToDelete.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }
};

module.exports = makeOptionDb;
