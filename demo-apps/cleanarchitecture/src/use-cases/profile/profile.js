const makeProfileApplication = ({
    profileRepository,
    userRepository,
    systemRepository,
    rolRepository,
    profileModel,
    coder,
}) => {
    return Object.freeze({
        findAll,
        findById,
        findBy,
        insert,
        update,
        remove,
    });

    async function findAll() {
        return await profileRepository.findAll();
    }

    async function findById(id) {
        return await profileRepository.findById(id);
    }

    async function findBy(query = {}) {
        if (!Object.values(query).length) return coder.BadRequest(`Query: ${query} is invalid`);

        return await profileRepository.findBy(query);
    }

    async function commonValidation(user, system, rol) {
        const userExists = await userRepository.findById(user);

        if (!userExists) return coder.BadRequest(`User does not exists`);

        const systemExists = await systemRepository.findById(system);

        if (!systemExists) return coder.BadRequest(`System does not exists`);

        const rolExists = await rolRepository.findById(rol);

        if (!rolExists) return coder.BadRequest(`Rol does not exists`);
    }

    async function insert(user, fields) {
        const {system, rol} = fields;

        commonValidation(user, system, rol);

        const profile = profileModel({...fields, user});

        const {
            getBrokenRules,
            isValid,
            getId,
            getUser,
            getSystem,
            getRol,
            getDescription,
            getCurrent,
            getCreatedOn,
        } = profile;

        const brokenRules = getBrokenRules({...fields});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const profileToInsert = {
            id: getId(),
            user: getUser(),
            system: getSystem(),
            rol: getRol(),
            description: getDescription(),
            current: getCurrent(),
            createdOn: getCreatedOn(),
        };

        return await profileRepository.insert({...profileToInsert});
    }

    async function update(id, fields) {
        const {user, system, rol, description, current, status} = fields;

        commonValidation(user, system, rol);

        const profileExists = profileRepository.findById(id);

        const profile = profileModel({...fields});

        const {getBrokenRules, isValid, getModifiedOn} = profile;

        const brokenRules = getBrokenRules({system, rol, description, current});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const profileToUpdate = {
            ...profileExists,
            id,
            user,
            system,
            rol,
            description,
            current,
            status,
            modifiedOn: getModifiedOn(),
        };

        return await profileRepository.update(profileToUpdate);
    }

    async function remove(id) {
        const profileExists = await this.findById(id);

        if (!profileExists) return coder.BadRequest(`Profile does not exists`);

        const assignments = await profileRepository.findAssignments(id);

        if (assignments.lenght) return coder.BadRequest(`Profile can not be removed due to has assignments`);

        return await profileRepository.remove(id);
    }
};

module.exports = makeProfileApplication;
