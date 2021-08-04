const Profile = require('./profile-schema');
const Assignment = require('./assignment-schema');
const User = require('../user/user-schema');

const mongoose = require('mongoose');

const makeProfileDb = ({HttpError}) => {
    return Object.freeze({
        findAll,
        findById,
        findAssignments,
        findBy,
        insert,
        remove,
        update,
    });

    async function findAll() {
        try {
            let profiles = await Profile.find()
                .populate({path: 'user', select: 'name email'})
                .populate({path: 'system', select: 'name'})
                .populate({path: 'rol', select: 'name'});

            return profiles.map(profile => profile.toObject({getters: true}));
        } catch (err) {
            throw new HttpError(err.message, 500);
        }
    }

    async function findById(id) {
        try {
            let profile = await Profile.findById(id)
                .populate({path: 'user', select: 'name email'})
                .populate({path: 'system', select: 'name'})
                .populate({path: 'rol', select: 'name'});

            if (!profile) return null;

            return profile.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message), 500;
        }
    }

    async function findAssignments(profileId) {
        try {
            let assignments = await Assignment.find({profile: profileId});

            return assignments.map(assignment => assignment.toObject({getters: true}));
        } catch (err) {
            throw new HttpError(err.message, 500);
        }
    }

    async function findBy(query = {}) {
        let profiles = await Profile.find(query);

        return profiles.map(profile => profile.toObject({getters: true}));
    }

    async function insert({user, system, rol, description, current, status, createdOn}) {
        try {
            const session = await mongoose.startSession();
            session.startTransaction();

            const profileToInsert = new Profile({
                user,
                system,
                rol,
                description,
                current,
                createdOn,
                status,
            });

            await profileToInsert.save({session: session});
            let userToUpdate = await User.findById(user);
            userToUpdate.profiles.push(profileToInsert);
            await userToUpdate.save({session: session});
            await session.commitTransaction();

            return profileToInsert.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function update({id, user, system, rol, description, current, status, modifiedOn}) {
        try {
            const profileToUpdate = await Profile.findByIdAndUpdate(
                {_id: id},
                {$set: {user, system, rol, description, current, status, modifiedOn}},
                {new: true, runValidators: true}
            );

            return profileToUpdate.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function remove(id) {
        try {
            let profileToDelete = await Profile.findById(id).populate('user');

            const session = await mongoose.startSession();
            session.startTransaction();
            await profileToDelete.remove({session: session});
            profileToDelete.user.profiles.pull(profileToDelete);
            await profileToDelete.user.save({session: session});
            await session.commitTransaction();

            return profileToDelete.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }
};

module.exports = makeProfileDb;
