const User = require('./user-schema');
const Address = require('./address-schema');
const mongoose = require('mongoose');

const makeAddressDb = ({HttpError}) => {
    return Object.freeze({
        findAll,
        findById,
        findByRadius,
        findByAddress,
        findBy,
        insert,
        remove,
        update,
    });

    async function findAll(userId) {
        try {
            let addresses = await Address.find({user: userId}).populate({path: 'user', select: 'name email'});

            return addresses.map(address => address.toObject({getters: true}));
        } catch (err) {
            throw new HttpError(err.message, 500);
        }
    }

    async function findById(id) {
        try {
            let address = await Address.findById(id).populate({path: 'user', select: 'name email'});

            if (!address) return null;

            return address.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message), 500;
        }
    }

    async function findByAddress(addressToFind, userId) {
        try {
            let address = await Address.findOne({$and: [{address: addressToFind}, {user: userId}]});

            if (!address) return null;

            return address.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message), 500;
        }
    }

    async function findByRadius(location) {
        try {
            const addresses = Address.find({location}).populate({path: 'user', select: 'name email'});

            return addresses.map(address => address.toObject({getters: true}));
        } catch (err) {
            return new HttpError(err.message), 500;
        }
    }

    async function findBy(query = {}) {
        let addresses = await Address.find(query);

        return addresses.map(address => address.toObject({getters: true}));
    }

    async function insert({user, address, location, status, createdOn}) {
        try {
            const session = await mongoose.startSession();
            session.startTransaction();

            const addressToInsert = new Address({
                user,
                address,
                location,
                status,
                createdOn,
            });

            await addressToInsert.save();
            let userToUpdate = await User.findById(user);
            userToUpdate.addresses.push(addressToInsert);
            await userToUpdate.save({session: session});
            await session.commitTransaction();

            return addressToInsert.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function update({id, address, location, status, modifiedOn}) {
        try {
            const addressUpdated = await Address.findByIdAndUpdate(
                {_id: id},
                {
                    $set: {
                        address,
                        location,
                        status,
                        modifiedOn,
                    },
                },
                {new: true}
            );

            return addressUpdated.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }

    async function remove(id) {
        try {
            let addressToDelete = await Address.findById(id).populate('user');

            const session = await mongoose.startSession();
            session.startTransaction();
            await addressToDelete.remove({session: session});
            addressToDelete.user.addresses.pull(addressToDelete);
            await addressToDelete.user.save({session: session});
            await session.commitTransaction();

            return addressToDelete.toObject({getters: true});
        } catch (err) {
            return new HttpError(err.message, 500);
        }
    }
};

module.exports = makeAddressDb;
