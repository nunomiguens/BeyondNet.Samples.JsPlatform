const express = require('express');
const {profileController, assignmentController} = require('../controllers');
const {authHandler, callbackHandler} = require('../middleware');

const profileRouter = express.Router({mergeParams: true});

profileRouter.all('*', authHandler);

profileRouter
    .route('/')
    .get(callbackHandler(profileController.get))
    .post(callbackHandler(profileController.post));

profileRouter.route('/query').get(callbackHandler(profileController.getBy));

profileRouter
    .route('/:id')
    .get(callbackHandler(profileController.getById))
    .patch(callbackHandler(profileController.patch))
    .delete(callbackHandler(profileController.remove));

profileRouter
    .route('/:id/assignment')
    .get(callbackHandler(assignmentController.get))
    .post(callbackHandler(assignmentController.post));

profileRouter.route('/:id/assignment/query').get(callbackHandler(assignmentController.getBy));

profileRouter
    .route('/:id/assignment/:assignmentId')
    .get(callbackHandler(assignmentController.getById))
    .patch(callbackHandler(assignmentController.patch))
    .delete(callbackHandler(assignmentController.remove));

module.exports = profileRouter;
