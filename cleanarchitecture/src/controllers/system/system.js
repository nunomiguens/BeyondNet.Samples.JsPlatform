const makeSystemController = ({systemApplication, coder}) => {
    return Object.freeze({
        get,
        getById,
        getBy,
        post,
        patch,
        remove,
        uploadPhoto,
    });

    async function get() {
        return coder.Ok({
            data: await systemApplication.findAll(),
        });
    }

    async function getById(httpRequest) {
        return coder.Ok({
            data: await systemApplication.findById(httpRequest.params.id),
        });
    }

    async function getBy(httpRequest) {
        return coder.Ok({
            data: await systemApplication.findBy(httpRequest.query),
        });
    }

    async function post(httpRequest) {
        return coder.Created({
            data: await systemApplication.insert(httpRequest.body),
        });
    }

    async function patch(httpRequest) {
        return coder.Ok({
            data: await systemApplication.update(httpRequest.params.id, httpRequest.body),
        });
    }

    async function remove(httpRequest) {
        return coder.Ok({
            data: await systemApplication.remove(httpRequest.params.id),
        });
    }

    async function uploadPhoto(httpRequest) {
        return coder.Ok({
            data: await systemApplication.uploadPhoto(httpRequest.params.id, httpRequest.files),
        });
    }
};

module.exports = makeSystemController;
