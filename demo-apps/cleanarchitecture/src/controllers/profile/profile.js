const makeProfileController = ({profileApplication, coder}) => {
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
            data: await profileApplication.findAll(),
        });
    }

    async function getById(httpRequest) {
        return coder.Ok({
            data: await profileApplication.findById(httpRequest.params.id),
        });
    }

    async function getBy(httpRequest) {
        return coder.Ok({
            data: await profileApplication.findBy(httpRequest.query),
        });
    }

    async function post(httpRequest) {
        return coder.Created({
            data: await profileApplication.insert(httpRequest.body),
        });
    }

    async function patch(httpRequest) {
        return coder.Ok({
            data: await profileApplication.update(httpRequest.params.id, httpRequest.body),
        });
    }

    async function remove(httpRequest) {
        return coder.Ok({
            data: await profileApplication.remove(httpRequest.params.id),
        });
    }
};

module.exports = makeProfileController;
