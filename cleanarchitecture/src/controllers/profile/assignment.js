const makeAssignmentController = ({assignmentApplication, coder}) => {
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
            data: await assignmentApplication.findAll(httpRequest.params.id),
        });
    }

    async function getById(httpRequest) {
        return coder.Ok({
            data: await assignmentApplication.findById(httpRequest.params.assignmentId),
        });
    }

    async function getBy(httpRequest) {
        return coder.Ok({
            data: await assignmentApplication.findBy(httpRequest.query),
        });
    }

    async function post(httpRequest) {
        return coder.Created({
            data: await assignmentApplication.insert(httpRequest.params.id, httpRequest.body),
        });
    }

    async function patch(httpRequest) {
        return coder.Ok({
            data: await assignmentApplication.update(httpRequest.params.assignmentId, httpRequest.body),
        });
    }

    async function remove(httpRequest) {
        return coder.Ok({
            data: await assignmentApplication.remove(httpRequest.params.assignmentId),
        });
    }
};

module.exports = makeAssignmentController;
