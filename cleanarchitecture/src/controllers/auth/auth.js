const makeAuthController = ({authApplication, coder}) => {
    return Object.freeze({
        getMe,
        forgotPassword,
        resetPassword,
        signIn,
        signUp,
        logOut,
    });

    async function getMe(httpRequest) {
        return coder.Ok({
            data: await authApplication.findMe(httpRequest.user.id),
        });
    }

    async function forgotPassword(httpRequest) {
        const {email} = httpRequest.body;

        return coder.Ok({
            data: await authApplication.forgotPassword(email, httpRequest.protocol, httpRequest.host),
        });
    }

    async function resetPassword(httpRequest) {
        const {password} = httpRequest.body;

        return coder.Ok({
            data: await authApplication.resetPassword(httpRequest.params.resettoken, password),
        });
    }

    async function signIn(httpRequest) {
        const {email, password} = httpRequest.body;

        return coder.Ok({
            data: await authApplication.signIn({email, password}),
        });
    }

    async function signUp(httpRequest) {
        const {name, email, password} = httpRequest.body;

        return coder.Created({
            data: await authApplication.signUp({name, email, password}),
        });
    }

    async function logOut() {
        return coder.Ok({
            data: await authApplication.logOut(),
        });
    }
};

module.exports = makeAuthController;
