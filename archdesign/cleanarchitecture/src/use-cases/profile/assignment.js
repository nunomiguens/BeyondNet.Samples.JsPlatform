const makeAssignmentApplication = ({assignmentRepository, profileRepository, assignmentModel, coder}) => {
    return Object.freeze({
        findAll,
        findById,
        findBy,
        insert,
        update,
        remove,
    });

    async function findAll(profileId) {
        return await assignmentRepository.findAll(profileId);
    }

    async function findById(id) {
        return await assignmentRepository.findById(id);
    }

    async function findBy(query = {}) {
        if (!Object.values(query).length) return coder.BadRequest(`Query: ${query} is invalid`);

        return await assignmentRepository.findBy(query);
    }

    async function commonValidation(profile) {
        const profileExists = await profileRepository.findById(profile);

        if (!profileExists) return coder.BadRequest(`Profile does not exists`);
    }

    async function insert(profile, fields) {
        await commonValidation(profile);

        const assignment = assignmentModel({...fields, profile});

        const {
            getBrokenRules,
            isValid,
            getId,
            getProfile,
            getModule,
            getCommand,
            getOption,
            getCanAccess,
            getCanExecute,
            getCreatedOn,
        } = assignment;

        const brokenRules = getBrokenRules({...fields});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const assignmentToInsert = {
            id: getId(),
            profile: getProfile(),
            module: getModule(),
            option: getOption(),
            command: getCommand(),
            canAccess: getCanAccess(),
            canExecute: getCanExecute(),
            createdOn: getCreatedOn(),
        };

        return await assignmentRepository.insert({...assignmentToInsert});
    }

    async function update(id, fields) {
        const {profile, canAccess, canExecute, status} = fields;

        await commonValidation(profile);

        const assignmentExists = await assignmentRepository.findById(id);

        const assignment = assignmentModel({...fields, id});

        const {getBrokenRules, isValid, getModifiedOn} = assignment;

        const brokenRules = getBrokenRules({...fields});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const assignmentToUpdate = {
            ...assignmentExists,
            canAccess,
            canExecute,
            status,
            modifiedOn: getModifiedOn(),
        };

        return await assignmentRepository.update(assignmentToUpdate);
    }

    async function remove(id) {
        const assignmentExists = await this.findById(id);

        if (!assignmentExists) return coder.BadRequest(`Assignment does not exists`);

        return await assignmentRepository.remove(id);
    }
};

module.exports = makeAssignmentApplication;
