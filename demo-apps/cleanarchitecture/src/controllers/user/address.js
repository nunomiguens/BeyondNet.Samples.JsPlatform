const makeAddressController = ({addressApplication, coder}) => {
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
            data: await addressApplication.findAll(httpRequest.params.id),
        });
    }

    async function getById(httpRequest) {
        return coder.Ok({
            data: await addressApplication.findById(httpRequest.params.addressId),
        });
    }

    async function getBy(httpRequest) {
        return coder.Ok({
            data: await addressApplication.findBy(httpRequest.query),
        });
    }

    async function post(httpRequest) {
        return coder.Created({
            data: await addressApplication.insert(httpRequest.params.id, httpRequest.body),
        });
    }

    async function patch(httpRequest) {
        return coder.Ok({
            data: await addressApplication.update(httpRequest.params.addressId, httpRequest.body),
        });
    }

    async function remove(httpRequest) {
        return coder.Ok({
            data: await addressApplication.remove(httpRequest.params.addressId),
        });
    }
};

module.exports = makeAddressController;
