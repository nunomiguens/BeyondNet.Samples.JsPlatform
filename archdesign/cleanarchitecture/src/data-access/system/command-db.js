const Command = require('./command-schema');
const System = require('./system-schema');

const mongoose = require('mongoose');

const makeCommandDb = ({HttpError}) => {
    return Object.freeze({
        findAll,
        findById,
        findByName,
        findBy,
        insert,
        remove,
        update,
    });

    async function findAll(systemId) {
        try {
            let commands = await Command.find({system: systemId}).populate({
                path: 'system',
                select: 'name',
            });

            return commands.map(command => command.toObject({getters: true}));
        } catch (err) {
            throw new HttpError(err.message, 500);
        }
    }

    async function findById(id) {
        try {
            let command = await Command.findById(id).populate({
                path: 'system',
                select: 'name',
            });

            if (!command) return null;

            return command.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message), 500;
        }
    }

    async function findByName(name, systemId) {
        try {
            let command = await Command.findOne({$and: [{name}, {system: systemId}]});

            if (!command) return null;

            return command.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message), 500;
        }
    }

    async function findBy(query = {}) {
        let commands = await Command.find(query);

        return commands.map(command => command.toObject({getters: true}));
    }

    async function insert({id, name, system, status, createdOn}) {
        try {
            const session = await mongoose.startSession();
            session.startTransaction();

            const commandToInsert = new Command({
                id,
                name,
                system,
                status,
                createdOn,
            });

            await commandToInsert.save({session: session});
            let systemToUpdate = await System.findById(system);
            systemToUpdate.commands.push(commandToInsert);
            await systemToUpdate.save({session: session});
            await session.commitTransaction();

            return commandToInsert.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function update({id, name, status, modifiedOn}) {
        try {
            const commandToUpdate = await Command.findByIdAndUpdate(
                {_id: id},
                {$set: {name, status, modifiedOn}},
                {new: true, runValidators: true}
            );

            return commandToUpdate.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function remove(id) {
        try {
            let commandToDelete = await Command.findById(id).populate('system');

            const session = await mongoose.startSession();
            session.startTransaction();
            await commandToDelete.remove({session: session});
            commandToDelete.system.commands.pull(commandToDelete);
            await commandToDelete.system.save({session: session});
            session.commitTransaction();

            return commandToDelete.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }
};

module.exports = makeCommandDb;
