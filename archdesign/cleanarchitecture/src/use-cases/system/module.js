const makeModuleApplication = ({moduleRepository, systemRepository, moduleModel, coder}) => {
    return Object.freeze({
        findAll,
        findById,
        findBy,
        insert,
        update,
        remove,
    });

    async function findAll(systemId) {
        return await moduleRepository.findAll(systemId);
    }

    async function findById(id) {
        return moduleRepository.findById(id);
    }

    async function findBy(query = {}) {
        if (!Object.values(query).length) return coder.BadRequest(`Query: ${query} is invalid`);

        return await moduleRepository.findBy(query);
    }

    async function commonValidation(system) {
        const systemExists = await systemRepository.findById(system);

        if (!systemExists) return coder.BadRequest('System does not exists');
    }

    async function insert(system, fields) {
        const {name} = fields;

        await commonValidation(system);

        let moduleExists = await moduleRepository.findByName(name, system);

        if (moduleExists) return coder.BadRequest(`Name ${name} exists`);

        const module = moduleModel({...fields, system});

        const {getBrokenRules, isValid, getId, getName, getSystem, getStatus, getCreatedOn} = module;

        const brokenRules = getBrokenRules({name});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const moduleToInsert = {
            id: getId(),
            name: getName(),
            system: getSystem(),
            status: getStatus(),
            createdOn: getCreatedOn(),
        };

        return await moduleRepository.insert({...moduleToInsert});
    }

    async function update(id, fields) {
        const {name, system, status} = fields;

        await commonValidation(system);

        const module = moduleModel({...fields});

        const {getBrokenRules, isValid, getModifiedOn} = module;

        const brokenRules = getBrokenRules({name, status});

        if (!isValid()) return coder.BadRequest(brokenRules);

        moduleExists = await moduleRepository.findById(id);

        const moduleToUpdate = {...moduleExists, name, system, modifiedOn: getModifiedOn()};

        return await moduleRepository.update(moduleToUpdate);
    }

    async function remove(id) {
        const moduleExists = await moduleRepository.findById(id);

        if (!moduleExists) return coder.BadRequest('Module does not exists');

        const options = await moduleRepository.findOptions(id);

        if (options) return coder.BadRequest(`Module can not be removed due to has options`);

        return await moduleRepository.remove(id);
    }
};

module.exports = makeModuleApplication;
