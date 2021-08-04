const makeCommandController = ({commandApplication, coder}) => {
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
            data: await commandApplication.findAll(httpRequest.params.id),
        });
    }

    async function getById(httpRequest) {
        return coder.Ok({
            data: await commandApplication.findById(httpRequest.params.commandId),
        });
    }

    async function getBy(httpRequest) {
        return coder.Ok({
            data: await commandApplication.findBy(httpRequest.query),
        });
    }

    async function post(httpRequest) {
        return coder.Created({
            data: await commandApplication.insert(httpRequest.params.id, httpRequest.body),
        });
    }

    async function patch(httpRequest) {
        return coder.Ok({
            data: await commandApplication.update(httpRequest.params.commandId, httpRequest.body),
        });
    }

    async function remove(httpRequest) {
        return coder.Ok({
            data: await commandApplication.remove(httpRequest.params.commandId),
        });
    }
};

module.exports = makeCommandController;
