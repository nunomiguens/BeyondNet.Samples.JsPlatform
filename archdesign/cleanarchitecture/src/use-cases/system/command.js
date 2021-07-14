const makeCommandApplication = ({commandRepository, systemRepository, commandModel, coder}) => {
    return Object.freeze({
        findAll,
        findById,
        findBy,
        insert,
        update,
        remove,
    });

    async function findAll(systemId) {
        return await commandRepository.findAll(systemId);
    }

    async function findById(id) {
        return commandRepository.findById(id);
    }

    async function findBy(query = {}) {
        if (!Object.values(query).length) return coder.BadRequest(`Query: ${query} is invalid`);

        return await commandRepository.findBy(query);
    }

    async function commonValidation(system) {
        const systemExists = await systemRepository.findById(system);

        if (!systemExists) return coder.BadRequest('System does not exists');
    }

    async function insert(system, fields) {
        const {name} = fields;

        await commonValidation(system);

        let commandExists = await commandRepository.findByName(name, system);

        if (commandExists) return coder.BadRequest(`Name ${name} exists`);

        const command = commandModel({...fields, system});

        const {getBrokenRules, isValid, getId, getName, getSystem, getStatus, getCreatedOn} = command;

        const brokenRules = getBrokenRules({name});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const commandToInsert = {
            id: getId(),
            name: getName(),
            system: getSystem(),
            status: getStatus(),
            createdOn: getCreatedOn(),
        };

        return await commandRepository.insert({...commandToInsert});
    }

    async function update(id, fields) {
        const {name, system, status} = fields;

        await commonValidation(system);

        const command = commandModel({...fields});

        const {getBrokenRules, isValid, getModifiedOn} = command;

        const brokenRules = getBrokenRules({name, status});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const commandExists = await commandRepository.findById(id);

        const commandToUpdate = {...commandExists, name, system, modifiedOn: getModifiedOn()};

        return await commandRepository.update(commandToUpdate);
    }

    async function remove(id) {
        const commandExists = await commandRepository.findById(id);

        if (!commandExists) return coder.BadRequest('Command does not exists');

        return await commandRepository.remove(id);
    }
};

module.exports = makeCommandApplication;
