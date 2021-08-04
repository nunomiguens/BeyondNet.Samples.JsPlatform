const express = require('express');
const {authController} = require('../controllers');
const {authHandler, callbackHandler} = require('../middleware');
const authRouter = express.Router({mergeParams: true});

authRouter.get('/me', authHandler, callbackHandler(authController.getMe));
authRouter.get('/logout', callbackHandler(authController.logOut));
authRouter.post('/forgot', callbackHandler(authController.forgotPassword));
authRouter.put('/reset/:resettoken', callbackHandler(authController.resetPassword));
authRouter.post('/signin', callbackHandler(authController.signIn));
authRouter.post('/signup', callbackHandler(authController.signUp));

module.exports = authRouter;
