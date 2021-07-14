const Company = require('./company-schema');
const System = require('../system/system-schema');

const makeCompanyDb = ({HttpError}) => {
    return Object.freeze({
        findAll,
        findById,
        findByName,
        findSystems,
        findBy,
        insert,
        remove,
        update,
    });

    async function findAll() {
        try {
            const companies = await Company.find();

            return companies.length ? companies.map(company => company.toObject({getters: true})) : [];
        } catch (err) {
            throw new HttpError('ValidationError', err.message, 400);
        }
    }

    async function findById(id) {
        try {
            const company = await Company.findById(id);

            return company ? company.toObject({getters: true}) : null;
        } catch (err) {
            throw new HttpError('ValidationError', err.message, 400);
        }
    }

    async function findByName(name) {
        try {
            const company = await Company.findOne({name});

            return company ? company.toObject({getters: true}) : null;
        } catch (err) {
            throw new HttpError('ValidationError', err.message, 400);
        }
    }

    async function findSystems(companyId) {
        try {
            const systems = await System.find({company: companyId});

            return systems.length ? systems.map(system => system.toObject({getters: true})) : [];
        } catch (err) {
            throw new HttpError('ValidationError', err.message, 400);
        }
    }

    async function findBy(query = {}) {
        try {
            const companies = Company.find(query);

            return companies.length ? companies.map(company => company.toObject({getters: true})) : [];
        } catch (err) {
            throw new HttpError('ValidationError', err.message, 400);
        }
    }

    async function insert({id, name, slug, status, createdOn}) {
        try {
            const company = new Company({
                id,
                name,
                slug,
                status,
                createdOn,
            });

            return await company.save();
        } catch (err) {
            throw new HttpError('ValidationError', err.message, 400);
        }
    }

    async function update({id, name, slug, status, modifiedOn}) {
        try {
            return await Company.findByIdAndUpdate({_id: id}, {$set: {name, slug, status, modifiedOn}}, {new: true});
        } catch (err) {
            throw new HttpError('ValidationError', err.message, 400);
        }
    }

    async function remove(id) {
        try {
            return await Company.findByIdAndDelete(id);
        } catch (err) {
            throw new HttpError('ValidationError', err.message, 400);
        }
    }
};

module.exports = makeCompanyDb;
