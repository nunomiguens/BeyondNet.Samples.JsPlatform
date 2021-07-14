const System = require('./system-schema');
const Rol = require('./rol-schema');

const mongoose = require('mongoose');

const makeRolDb = ({HttpError}) => {
    return Object.freeze({
        findAll,
        findById,
        findByName,
        findBy,
        insert,
        remove,
        update,
        uploadPhoto,
    });

    async function findAll(systemId) {
        try {
            let roles = await Rol.find({system: systemId}).populate({path: 'system', select: 'name'});

            return roles.map(rol => rol.toObject({getters: true}));
        } catch (err) {
            throw new HttpError(err.message, 500);
        }
    }

    async function findById(id) {
        try {
            let rol = await Rol.findById(id).populate({path: 'system', select: 'name'});

            if (!rol) return null;

            return rol.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message), 500;
        }
    }

    async function findByName(name, systemId) {
        try {
            let rol = await Rol.findOne({$and: [{name}, {system: systemId}]});

            if (!rol) return null;

            return rol.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message), 500;
        }
    }

    async function findBy(query = {}) {
        let roles = await Rol.find(query);

        return roles.map(rol => rol.toObject({getters: true}));
    }

    async function insert({id, name, system, status, createdOn}) {
        try {
            const session = await mongoose.startSession();
            session.startTransaction();

            const rolToInsert = new Rol({
                id,
                name,
                system,
                status,
                createdOn,
            });

            await rolToInsert.save({session: session});
            let systemToUpdate = await System.findById(system);
            systemToUpdate.roles.push(rolToInsert);
            await systemToUpdate.save({session: session});
            await session.commitTransaction();

            return rolToInsert.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function update({id, name, status, modifiedOn}) {
        try {
            const rolToUpdate = await Rol.findByIdAndUpdate(
                {_id: id},
                {$set: {name, status, modifiedOn}},
                {new: true, runValidators: true}
            );

            return rolToUpdate.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function remove(id) {
        try {
            let rolToDelete = await Rol.findById(id).populate('system');

            const session = await mongoose.startSession();
            session.startTransaction();
            await rolToDelete.remove({session: session});
            rolToDelete.system.roles.pull(rolToDelete);
            await rolToDelete.system.save({session: session});
            await session.commitTransaction();

            return rolToDelete.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function uploadPhoto({id, fileName}) {
        try {
            const rolToUpdate = await Rol.findByIdAndUpdate({_id: id}, {$set: {photo: fileName}});

            return rolToUpdate.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }
};

module.exports = makeRolDb;
