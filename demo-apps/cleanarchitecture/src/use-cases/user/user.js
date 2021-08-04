const makeUserApplication = ({repository, userModel, coder}) => {
    return Object.freeze({
        findAll,
        findById,
        findByEmail,
        findBy,
        insert,
        update,
        remove,
        exists,
    });

    async function findAll() {
        return await repository.findAll();
    }

    async function findById(id) {
        return await repository.findById(id);
    }

    async function findByEmail(email) {
        if (!email) return coder.BadRequest('Email is not valid');

        return await repository.findByEmail(email);
    }

    async function findBy(query = {}) {
        if (!query || !Object.values(query).length) return coder.BadRequest(`Query is not valid`);

        return await repository.findBy(query);
    }

    async function exists(email) {
        if (!email) return coder.BadRequest('Email is not valid');

        const user = await findByEmail(email);

        return user ? true : false;
    }

    async function commonValidation(id) {
        const userExists = await findById(id);

        if (!userExists) return coder.BadRequest(`User does not exists`);

        return userExists;
    }

    async function insert(fields) {
        const {name, email, password, phone, skills} = fields;

        let userExists = await exists(email);

        if (userExists) return coder.BadRequest(`Email ${email} exists`);

        const user = userModel({...fields});

        const {
            getId,
            getReferenceKey,
            getName,
            getEmail,
            getPassword,
            getPhone,
            getActivePeriod,
            getAvatar,
            getSocial,
            getStatus,
            getCreatedOn,
            getBrokenRules,
            getSkills,
            isValid,
        } = user;

        const brokenRules = getBrokenRules({name, email, password, phone});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const userToInsert = {
            id: getId(),
            referenceKey: getReferenceKey(),
            name: getName(),
            email: getEmail(),
            password: await getPassword(),
            phone: getPhone(),
            activePeriod: getActivePeriod(),
            skills: getSkills(skills),
            avatar: await getAvatar(),
            social: getSocial(),
            status: getStatus(),
            createdOn: getCreatedOn(),
        };

        return await repository.insert({...userToInsert});
    }

    async function update(id, fields) {
        const {referenceKey, name, phone, skills, social, status} = fields;

        let userExists = await commonValidation(id);

        const user = userModel({...fields});

        const {getBrokenRules, getSkills, isValid, getActivePeriod, getModifiedOn} = user;

        const brokenRules = getBrokenRules({name, phone});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const userToUpdate = {
            ...userExists,
            referenceKey,
            name,
            phone,
            activePeriod: getActivePeriod(),
            skills: getSkills(skills),
            social,
            status,
            modifiedOn: getModifiedOn(),
        };

        return await repository.update({...userToUpdate});
    }

    async function remove(id) {
        await commonValidation(id);

        const profiles = await repository.findProfiles(id);

        if (profiles.length) return coder.BadRequest(`User can not be removed due to has profiles`);

        return await repository.remove(id);
    }
};

module.exports = makeUserApplication;
