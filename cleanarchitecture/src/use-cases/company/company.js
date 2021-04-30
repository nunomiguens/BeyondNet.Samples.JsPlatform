const makeCompanyApplication = ({repository, companyModel, coder, slugger}) => {
    return Object.freeze({
        findAll,
        findById,
        findByName,
        findBy,
        insert,
        update,
        remove,
    });

    async function findAll() {
        return await repository.findAll();
    }

    async function findBy(query = {}) {
        if (!Object.values(query).length) return coder.BadRequest(`Query: ${query} is invalid`);

        return await repository.findBy(query);
    }

    async function findById(id) {
        return await repository.findById(id);
    }

    async function findByName(name) {
        if (!name) return coder.BadRequest('Name does not exists');

        return await repository.findByName(name);
    }

    async function insert(fields) {
        const {name} = fields;

        const companyExists = await findByName(name);

        if (companyExists) return coder.BadRequest(`Name ${name} exists`);

        const company = companyModel({...fields});

        const {getId, getName, getStatus, getCreatedOn, getBrokenRules, isValid} = company;

        const brokenRules = getBrokenRules({name});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const companyToInsert = {
            id: getId(),
            name: getName(),
            slug: await slugger.provide(name),
            status: getStatus(),
            createdOn: getCreatedOn(),
        };

        return await repository.insert({...companyToInsert});
    }

    async function update(id, fields) {
        const {name, status} = fields;

        const company = companyModel({name});

        const {getModifiedOn, getBrokenRules, isValid} = company;

        const brokenRules = getBrokenRules({name});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const companyExists = await findById(id);

        if (!companyExists) return coder.BadRequest('Company does not exists');

        const companyToUpdate = {
            ...companyExists,
            name,
            slug: await slugger.provide(name),
            status,
            modifiedOn: getModifiedOn(),
        };

        return await repository.update({...companyToUpdate});
    }

    async function remove(id) {
        const company = await findById(id);

        if (!company) return coder.BadRequest('Company does not exists');

        const systems = await repository.findSystems(id);

        if (systems.length) return coder.BadRequest(`Company can not be removed due to has systems`);

        return await repository.remove(id);
    }
};

module.exports = makeCompanyApplication;
