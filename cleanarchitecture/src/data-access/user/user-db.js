const User = require('./user-schema');
const Profile = require('../profile/profile-schema');

const makeDbUser = ({HttpError}) => {
    return Object.freeze({
        findAll,
        findById,
        findByEmail,
        findProfiles,
        findByReset,
        findBy,
        insert,
        update,
        remove,
        updatePassword,
        updateTokenPassword,
    });

    async function findAll() {
        try {
            const users = await User.find({}).select('-password');

            return users.length ? users.map(user => user.toObject({getters: true})) : [];
        } catch (err) {
            throw new HttpError(err.message, 500);
        }
    }

    async function findById(id) {
        try {
            const user = await User.findById(id)
                .select('-password')
                .populate('addresses');

            return user ? user.toObject({getters: true}) : null;
        } catch (err) {
            return new HttpError(err.message), 500;
        }
    }

    async function findByEmail(email) {
        try {
            let user = await User.findOne({email});

            return user ? user.toObject({getters: true}) : null;
        } catch (err) {
            return new HttpError(err.message), 500;
        }
    }

    async function findByReset(resetPassword) {
        try {
            const user = await User.findOne({
                resetPasswordToken: resetPassword,
                resetPasswordExpire: {$gt: Date.now()},
            });

            return user ? user.toObject({getters: true}) : null;
        } catch (err) {
            return new HttpError(err.message), 500;
        }
    }

    async function findProfiles(userId) {
        try {
            const users = await Profile.find({user: userId});

            return users.length ? users.map(user => user.toObject({getters: true})) : [];
        } catch (err) {
            throw new HttpError(err.message, 500);
        }
    }

    async function findBy(query = {}) {
        try {
            const users = await User.find(query);

            return users.length ? users.map(user => user.toObject({getters: true})) : [];
        } catch (err) {
            throw new HttpError(err.message, 500);
        }
    }

    async function insert({
        referenceKey,
        name,
        email,
        password,
        phone,
        activePeriod,
        skills,
        avatar,
        social,
        addresses,
        profiles,
        status,
        createdOn,
        modifiedOn,
    }) {
        try {
            const userCreated = new User({
                referenceKey,
                name,
                email,
                password,
                phone,
                activePeriod,
                skills,
                avatar,
                social,
                addresses,
                profiles,
                status,
                createdOn,
                modifiedOn,
            });

            return await userCreated.save();
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function update({
        id,
        referenceKey,
        name,
        phone,
        activePeriod,
        skills,
        social,
        status,
        createdOn,
        modifiedOn,
    }) {
        try {
            return await User.findByIdAndUpdate(
                {_id: id},
                {
                    $set: {
                        referenceKey,
                        name,
                        phone,
                        activePeriod,
                        skills,
                        social,
                        status,
                        createdOn,
                        modifiedOn,
                    },
                },
                {new: true}
            );
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function updateTokenPassword({id, resetPasswordToken, resetPasswordExpire, modifiedOn}) {
        try {
            return await User.findByIdAndUpdate(
                {_id: id},
                {
                    $set: {
                        resetPasswordToken,
                        resetPasswordExpire,
                        modifiedOn,
                    },
                },
                {new: true}
            );
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function updatePassword({id, password, modifiedOn}) {
        try {
            const resetPasswordToken = undefined;
            const resetPasswordExpire = undefined;

            return await User.findByIdAndUpdate(
                {_id: id},
                {
                    $set: {
                        password,
                        resetPasswordToken,
                        resetPasswordExpire,
                        modifiedOn,
                    },
                },
                {new: true}
            );
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function remove(id) {
        try {
            await User.findByIdAndDelete(id);
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }
};

module.exports = makeDbUser;
