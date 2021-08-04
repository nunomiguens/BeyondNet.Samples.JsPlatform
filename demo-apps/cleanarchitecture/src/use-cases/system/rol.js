const makeRolApplication = ({rolRepository, systemRepository, rolModel, coder}) => {
    return Object.freeze({
        findAll,
        findById,
        findBy,
        insert,
        update,
        remove,
    });

    async function findAll(systemId) {
        return await rolRepository.findAll(systemId);
    }

    async function findById(id) {
        return rolRepository.findById(id);
    }

    async function findBy(query = {}) {
        if (!Object.values(query).length) return coder.BadRequest(`Query: ${query} is invalid`);

        return await rolRepository.findBy(query);
    }

    async function commonValidations(system) {
        const systemExists = await systemRepository.findById(system);

        if (!systemExists) return coder.BadRequest('System does not exists');
    }

    async function insert(system, fields) {
        const {name} = fields;

        await commonValidations(system);

        let rolExists = await rolRepository.findByName(name, system);

        if (rolExists) return coder.BadRequest(`Rol ${name} exists`);

        const rol = rolModel({...fields, system});

        const {getBrokenRules, getId, getSystem, getName, getStatus, isValid, getCreatedOn} = rol;

        const brokenRules = getBrokenRules({name});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const rolToInsert = {
            id: getId(),
            name: getName(),
            system: getSystem(),
            status: getStatus(),
            createdOn: getCreatedOn(),
        };

        return await rolRepository.insert({...rolToInsert});
    }

    async function update(id, fields) {
        const {name, system, status} = fields;

        await commonValidations(system);

        const rol = rolModel({...fields});

        const {getBrokenRules, isValid, getModifiedOn} = rol;

        const brokenRules = getBrokenRules({name, status});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const rolExists = await rolRepository.findById(id);

        const rolToUpdate = {...rolExists, name, system, modifiedOn: getModifiedOn()};

        return await rolRepository.update({...rolToUpdate});
    }

    async function remove(id) {
        const rolExists = await rolRepository.findById(id);

        if (!rolExists) return coder.BadRequest('Rol does not exists');

        return await rolRepository.remove(id);
    }
};

module.exports = makeRolApplication;
