const makeRolController = ({rolApplication, coder}) => {
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
            data: await rolApplication.findAll(httpRequest.params.id),
        });
    }

    async function getById(httpRequest) {
        return coder.Ok({
            data: await rolApplication.findById(httpRequest.params.rolId),
        });
    }

    async function getBy(httpRequest) {
        return coder.Ok({
            data: await rolApplication.findBy(httpRequest.query),
        });
    }

    async function post(httpRequest) {
        return coder.Created({
            data: await rolApplication.insert(httpRequest.params.id, httpRequest.body),
        });
    }

    async function patch(httpRequest) {
        return coder.Ok({
            data: await rolApplication.update(httpRequest.params.rolId, httpRequest.body),
        });
    }

    async function remove(httpRequest) {
        return coder.Ok({
            data: await rolApplication.remove(httpRequest.params.rolId),
        });
    }
};

module.exports = makeRolController;
