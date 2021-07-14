const Assignment = require('./assignment-schema');
const Profile = require('./profile-schema');

const mongoose = require('mongoose');

const makeAssignmentDb = ({HttpError}) => {
    return Object.freeze({
        findAll,
        findById,
        findBy,
        insert,
        remove,
        update,
    });

    async function findAll(profileId) {
        try {
            let assignments = await Assignment.find({profile: profileId})
                .populate({path: 'module', select: 'name'})
                .populate({path: 'option', select: 'name'})
                .populate({path: 'command', select: 'name'});

            return assignments.map(assignment => assignment.toObject({getters: true}));
        } catch (err) {
            throw new HttpError(err.message, 500);
        }
    }

    async function findById(id) {
        try {
            let assignment = await Assignment.findById(id)
                .populate({path: 'module', select: 'name'})
                .populate({path: 'option', select: 'name'})
                .populate({path: 'command', select: 'name'});

            if (!assignment) return null;

            return assignment.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function findBy(query = {}) {
        let assignments = await Assignment.find(query);

        return assignments.map(assignment => assignment.toObject({getters: true}));
    }

    async function insert({profile, module, option, command, canAccess, canExecute, status, createdOn}) {
        try {
            const session = await mongoose.startSession();
            session.startTransaction();

            const assignmentToInsert = new Assignment({
                profile,
                module,
                option,
                command,
                canAccess,
                canExecute,
                status,
                createdOn,
            });

            await assignmentToInsert.save({session: session});
            let profileToUpdate = await Profile.findById(profile);
            profileToUpdate.assignments.push(assignmentToInsert);
            await profileToUpdate.save({session: session});
            await session.commitTransaction();

            return assignmentToInsert.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function update({id, canAccess, canExecute, status, modifiedOn}) {
        try {
            const assignmentToUpdate = await Assignment.findByIdAndUpdate(
                {_id: id},
                {$set: {canAccess, canExecute, status, modifiedOn}},
                {new: true, runValidators: true}
            );

            return assignmentToUpdate.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function remove(id) {
        try {
            let assignmentToDelete = await Assignment.findById(id).populate('profile');

            const session = await mongoose.startSession();
            session.startTransaction();
            await assignmentToDelete.remove({session: session});
            assignmentToDelete.profile.assignments.pull(assignmentToDelete);
            await assignmentToDelete.profile.save({session: session});
            await session.commitTransaction();

            return assignmentToDelete.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }
};

module.exports = makeAssignmentDb;
