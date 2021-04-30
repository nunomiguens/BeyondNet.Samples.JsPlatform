const makeOptionApplication = ({optionRepository, moduleRepository, optionModel, coder}) => {
    return Object.freeze({
        findAll,
        findById,
        findBy,
        insert,
        update,
        remove,
    });

    async function findAll(id) {
        return await optionRepository.findAll(id);
    }

    async function findById(id) {
        return optionRepository.findById(id);
    }

    async function findBy(query = {}) {
        if (!Object.values(query).length) return coder.BadRequest(`Query: ${query} is invalid`);

        return await optionRepository.findBy(query);
    }

    async function commonValidation(module) {
        const moduleExists = await moduleRepository.findById(module);

        if (!moduleExists) return coder.BadRequest('Module does not exists');
    }

    async function insert(module, fields) {
        const {name} = fields;

        await commonValidation(module);

        let optionExists = await optionRepository.findByName(name, module);

        if (optionExists) return coder.BadRequest(`Name ${name} exists`);

        const option = optionModel({...fields, module});

        const {getBrokenRules, isValid, getId, getName, getModule, getStatus, getCreatedOn} = option;

        const brokenRules = getBrokenRules({name});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const optionToInsert = {
            id: getId(),
            name: getName(),
            module: getModule(),
            status: getStatus(),
            createdOn: getCreatedOn(),
        };

        return await optionRepository.insert({...optionToInsert});
    }

    async function update(id, fields) {
        const {name, module, status} = fields;

        await commonValidation(module);

        const option = optionModel({...fields});

        const {getBrokenRules, isValid, getModifiedOn} = option;

        const brokenRules = getBrokenRules({name, status});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const optionExists = await optionRepository.findById(id);

        const optionToUpdate = {...optionExists, name, module, modifiedOn: getModifiedOn()};

        return await optionRepository.update({...optionToUpdate});
    }

    async function remove(id) {
        const optionExists = await optionRepository.findById(id);

        if (!optionExists) return coder.BadRequest('Option does not exists');

        return await optionRepository.remove(id);
    }
};

module.exports = makeOptionApplication;
