const makeCompanyController = ({companyApplication, coder}) => {
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
            data: await companyApplication.findAll(),
        });
    }

    async function getById(httpRequest) {
        return coder.Ok({
            data: await companyApplication.findById(httpRequest.params.id),
        });
    }

    async function getBy(httpRequest) {
        return coder.Ok({
            data: await companyApplication.findBy(httpRequest.query),
        });
    }

    async function post(httpRequest) {
        return coder.Created({
            data: await companyApplication.insert(httpRequest.body),
        });
    }

    async function patch(httpRequest) {
        return coder.Ok({
            data: await companyApplication.update(httpRequest.params.id, httpRequest.body),
        });
    }

    async function remove(httpRequest) {
        return coder.Ok({
            data: await companyApplication.remove(httpRequest.params.id),
        });
    }
};

module.exports = makeCompanyController;
