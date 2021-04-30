const {Token, TokenTypes} = require('../../models');

const makeUserApplication = ({repository, authModel, coder, mailer}) => {
    return Object.freeze({
        findMe,
        forgotPassword,
        resetPassword,
        signUp,
        signIn,
        logOut,
    });

    async function findMe(id) {
        return await repository.findById(id);
    }

    async function signUp({name, email, password}) {
        const auth = authModel({name, email, password});

        const {
            getId,
            getName,
            getEmail,
            getStatus,
            getCreatedOn,
            getPassword,
            getAvatar,
            getToken,
            getBrokenRules,
            isValid,
        } = auth;

        const brokenRules = await getBrokenRules({name, email, password});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const user = await repository.findByEmail(email);

        if (user) return coder.BadRequest(`Email ${email} already exists`);

        const userToInsert = {
            id: getId(),
            name: getName(),
            email: getEmail(),
            password: await getPassword(),
            avatar: await getAvatar(),
            status: getStatus(),
            createdOn: getCreatedOn(),
        };

        const userPosted = await repository.insert({...userToInsert});

        return await getToken(userPosted.id);
    }

    async function signIn({email, password}) {
        const auth = authModel({email, password});

        const {isMatchedPassword, getBrokenRules, isValid, getToken} = auth;

        const brokenRules = await getBrokenRules({email, password});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const userExists = await repository.findByEmail(email);

        if (!userExists) return coder.Unauthorized('Email is not registered');

        const match = await isMatchedPassword(userExists.password);

        if (!match) return coder.Unauthorized('Password is not valid');

        return await getToken(userExists);
    }

    async function forgotPassword(email, protocol, host) {
        if (!email) return coder.NotFound('Email is required');

        const auth = authModel({email});

        const {getBrokenRules, getResetPassword, isValid, getModifiedOn} = auth;

        const brokenRules = await getBrokenRules({email});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const user = await repository.findByEmail(email);

        if (!user) return coder.NotFound(`Email ${email} does not exists`);

        const {publicToken, secretToken, expire} = await getResetPassword();

        await repository.updateTokenPassword({
            id: user.id,
            resetPasswordToken: secretToken,
            resetPasswordExpire: expire,
            modifiedOn: getModifiedOn(),
        });

        const resetUrl = `${protocol}://${host}/api/auth/reset/${publicToken}`;

        const message = `You are receiving this email because you (or someone else) has requested the reset of a password. Please make a PUT request to: \n\n ${resetUrl}`;

        await mailer.send({email: user.email, subject: 'Password reset token', message});

        return publicToken;
    }

    async function resetPassword(resetToken, password) {
        const auth = authModel({password});

        const {getBrokenRules, getToken, getTokenHashed, isValid, getPassword, getModifiedOn} = auth;

        const brokenRules = await getBrokenRules({password});

        if (!isValid()) return coder.BadRequest(brokenRules);

        const resetPasswordToken = await getTokenHashed(resetToken);

        const user = await repository.findByReset(resetPasswordToken);

        if (!user) return coder.BadRequest(`Invalid token ${resetToken}`);

        const userPosted = await repository.updatePassword({
            id: user.id,
            password: await getPassword(),
            modifiedOn: getModifiedOn(),
        });

        return await getToken(userPosted);
    }

    async function logOut() {
        if (process.env.JWT_TOKEN_MODE === TokenTypes.COOKIE) {
            return new Token(TokenTypes.COOKIE, 'umstoken', 'logout');
        }
        return {};
    }
};

module.exports = makeUserApplication;
