const makeModuleController = ({moduleApplication, coder}) => {
    return Object.freeze({
        get,
        getById,
        getBy,
        post,
        patch,
        remove,
    });

    async function get(httpRequest) {
        return coder.Ok({
            data: await moduleApplication.findAll(httpRequest.params.id),
        });
    }

    async function getById(httpRequest) {
        return coder.Ok({
            data: await moduleApplication.findById(httpRequest.params.moduleId),
        });
    }

    async function getBy(httpRequest) {
        return coder.Ok({
            data: await moduleApplication.findBy(httpRequest.query),
        });
    }

    async function post(httpRequest) {
        return coder.Created({
            data: await moduleApplication.insert(httpRequest.params.id, httpRequest.body),
        });
    }

    async function patch(httpRequest) {
        return coder.Ok({
            data: await moduleApplication.update(httpRequest.params.moduleId, httpRequest.body),
        });
    }

    async function remove(httpRequest) {
        return coder.Ok({
            data: await moduleApplication.remove(httpRequest.params.moduleId),
        });
    }
};

module.exports = makeModuleController;
