const express = require('express');
const {userController, addressController} = require('../controllers');
const {authHandler, callbackHandler} = require('../middleware');

const userRouter = express.Router({mergeParams: true});

userRouter.all('*', authHandler);

userRouter
    .route('/')
    .get(callbackHandler(userController.get))
    .post(callbackHandler(userController.post));

userRouter
    .route('/:id')
    .get(callbackHandler(userController.getById))
    .patch(callbackHandler(userController.patch))
    .delete(callbackHandler(userController.remove));

userRouter.route('/query').get(callbackHandler(userController.getBy));

userRouter
    .route('/:id/address')
    .get(callbackHandler(addressController.get))
    .post(callbackHandler(addressController.post));

userRouter
    .route('/:id/address/:addressId')
    .patch(callbackHandler(addressController.patch))
    .delete(callbackHandler(addressController.remove))
    .get(callbackHandler(addressController.getById));

userRouter.route('/:id/address/query').get(callbackHandler(addressController.getBy));

module.exports = userRouter;
