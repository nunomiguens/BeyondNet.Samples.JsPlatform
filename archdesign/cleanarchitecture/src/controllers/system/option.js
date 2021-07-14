const makeOptionController = ({optionApplication, coder}) => {
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
            data: await optionApplication.findAll(httpRequest.params.moduleId),
        });
    }

    async function getById(httpRequest) {
        return coder.Ok({
            data: await optionApplication.findById(httpRequest.params.optionId),
        });
    }

    async function getBy(httpRequest) {
        return coder.Ok({
            data: await optionApplication.findBy(httpRequest.query),
        });
    }

    async function post(httpRequest) {
        return coder.Created({
            data: await optionApplication.insert(httpRequest.params.moduleId, httpRequest.body),
        });
    }

    async function patch(httpRequest) {
        return coder.Ok({
            data: await optionApplication.update(httpRequest.params.optionId, httpRequest.body),
        });
    }

    async function remove(httpRequest) {
        return coder.Ok({
            data: await optionApplication.remove(httpRequest.params.optionId),
        });
    }
};

module.exports = makeOptionController;
