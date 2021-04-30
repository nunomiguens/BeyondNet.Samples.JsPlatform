const makeAddressApplication = ({repository, userRepository, addressModel, coder}) => {
    return Object.freeze({
        findAll,
        findById,
        findBy,
        insert,
        update,
        remove,
    });

    async function findAll(userId) {
        const userExists = userRepository.findById(userId);

        if (!userExists) return coder.BadRequest('User does not exists');

        return await repository.findAll(userId);
    }

    async function findById(id) {
        return repository.findById(id);
    }

    async function findBy(query = {}) {
        if (!Object.values(query).length) return coder.BadRequest(`Query: ${query} is invalid`);

        return await repository.findBy(query);
    }

    async function commonValidation(id) {
        const addressExists = await repository.findById(id);

        if (!addressExists) return coder.BadRequest('Address does not exists');

        return addressExists;
    }

    async function insert(userId, fields) {
        const {address} = fields;

        const addressObj = addressModel({...fields, user: userId, status: 1});

        const {getId, getUser, getAddress, getBrokenRules, isValid, getLocation, getStatus, getCreatedOn} = addressObj;

        const brokenRules = getBrokenRules({address});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const addressToInsert = {
            id: getId(),
            user: getUser(),
            address: getAddress(),
            location: await getLocation(),
            status: getStatus(),
            createdOn: getCreatedOn(),
        };

        return await repository.insert({...addressToInsert});
    }

    async function update(id, fields) {
        const {user, address, status} = fields;

        let addressExists = await commonValidation(id);

        const addressObj = addressModel({...fields});

        const {getBrokenRules, getModifiedOn, getLocation, isValid} = addressObj;

        const brokenRules = getBrokenRules({user, address, status});

        if (!isValid()) return coder.BadRequest(brokenRules);

        addressExists = await repository.findById(id);

        const addressToUpdate = {
            ...addressExists,
            address,
            location: await getLocation(),
            status,
            modifiedOn: getModifiedOn(),
        };

        return await repository.update({...addressToUpdate});
    }

    async function remove(id) {
        await commonValidation(id);

        return await repository.remove(id);
    }
};

module.exports = makeAddressApplication;
