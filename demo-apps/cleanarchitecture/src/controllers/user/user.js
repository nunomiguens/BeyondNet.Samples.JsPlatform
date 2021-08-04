const makeUserController = ({userApplication, coder}) => {
    return Object.freeze({
        get,
        getById,
        getBy,
        post,
        patch,
        remove,
    });

    async function get() {
        return coder.Ok({
            data: await userApplication.findAll(),
        });
    }

    async function getById(httpRequest) {
        return coder.Ok({
            data: await userApplication.findById(httpRequest.params.id),
        });
    }

    async function getBy(httpRequest) {
        return coder.Ok({
            data: await userApplication.findBy(httpRequest.query),
        });
    }

    async function post(httpRequest) {
        return coder.Created({
            data: await userApplication.insert(httpRequest.body),
        });
    }

    async function patch(httpRequest) {
        return coder.Ok({
            data: await userApplication.update(httpRequest.params.id, httpRequest.body),
        });
    }

    async function remove(httpRequest) {
        return coder.Ok({
            data: await userApplication.remove(httpRequest.params.id),
        });
    }
};

module.exports = makeUserController;
