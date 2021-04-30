const makeSystemApplication = ({repository, systemModel, coder, filePath}) => {
    return Object.freeze({
        findAll,
        findById,
        findBy,
        insert,
        update,
        remove,
        uploadPhoto,
    });

    async function findAll() {
        return await repository.findAll();
    }

    async function findById(id) {
        return await repository.findById(id);
    }

    async function findBy(query = {}) {
        if (!Object.values(query).length) return coder.BadRequest(`Query: ${query} is invalid`);

        return await repository.findBy(query);
    }

    async function insert(fields) {
        const {name, company} = fields;

        const systemExists = repository.findByName(name);

        if (!systemExists) return coder.BadRequest(`Name ${name} exists`);

        const system = systemModel({...fields});

        const {
            getBrokenRules,
            isValid,
            getId,
            getName,
            getCompany,
            getPhoto,
            getAverageCost,
            getStatus,
            getCreatedOn,
        } = system;

        const brokenRules = getBrokenRules({name});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const systemToInsert = {
            id: getId(),
            name: getName(),
            company: getCompany(),
            photo: getPhoto(),
            averageCost: getAverageCost(),
            status: getStatus(),
            createdOn: getCreatedOn(),
        };

        return await repository.insert({...systemToInsert});
    }

    async function update(id, fields) {
        const {name, company, status} = fields;

        const system = systemModel({...fields});

        const {getBrokenRules, isValid, getModifiedOn} = system;

        const brokenRules = getBrokenRules({name, status});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const systemExists = await repository.findById(id);

        const systemToUpdate = {...systemExists, name, company, modifiedOn: getModifiedOn()};

        return await repository.update({...systemToUpdate});
    }

    async function remove(id) {
        const systemExists = await findById(id);

        if (!systemExists) return coder.BadRequest('System does not exists');

        const modules = await repository.findModules(id);

        if (modules) return coder.BadRequest(`System can not be removed due to has modules`);

        const roles = await repository.findRoles(id);

        if (roles) return coder.BadRequest(`System can not be removed due to has roles`);

        const commands = await repository.findCommands(id);

        if (commands) return coder.BadRequest(`System can not be removed due to has commands`);

        return await repository.remove(id);
    }

    async function uploadPhoto(id, files) {
        const systemExists = await findById(id);

        if (!systemExists) return coder.BadRequest('System does not exists');

        if (!files) return coder.BadRequest('Please, upload a file');

        const file = files.file;

        if (!file.mimetype.startsWith('image')) return coder.BadRequest('Please, upload an image file');

        if (!file.size > process.env.FILE_MAX_UPLOAD)
            return coder.BadRequest(`Please, upload an image less then ${process.env.FILE_MAX_UPLOAD}`);

        file.name = `photo_${id}${filePath.parse(file.name).ext}`;

        const uploadPath = `${process.env.FILE_UPLOAD_PATH}/${file.name}`;

        file.mv(uploadPath, async err => {
            if (err) {
                return coder.InternalServerError('Problem trying to upload the file');
            }

            return await repository.uploadPhoto(id, file.name);
        });

        return {fileName: file.name};
    }
};

module.exports = makeSystemApplication;
