const express = require('express');
const {
    systemController,
    moduleController,
    optionController,
    rolController,
    commandController,
} = require('../controllers');

const {authHandler, authorizeHandler, callbackHandler} = require('../middleware');

const systemRouter = express.Router({mergeParams: true});

systemRouter.all('*', authHandler);

systemRouter
    .route('/')
    .get(callbackHandler(systemController.get))
    .post(callbackHandler(systemController.post));

systemRouter.route('/query').get(callbackHandler(systemController.getBy));

systemRouter
    .route('/:id')
    .get(callbackHandler(systemController.getById))
    .patch(callbackHandler(systemController.patch))
    .delete(callbackHandler(systemController.remove));

systemRouter.route('/:id/photo').put(authorizeHandler('admin'), callbackHandler(systemController.uploadPhoto));

systemRouter
    .route('/:id/module')
    .get(callbackHandler(moduleController.get))
    .post(callbackHandler(moduleController.post))
    .patch(callbackHandler(moduleController.patch));

systemRouter.route('/:id/module/query').get(callbackHandler(moduleController.getBy));

systemRouter
    .route('/:id/module/:moduleId')
    .get(callbackHandler(moduleController.getById))
    .delete(callbackHandler(moduleController.remove));

systemRouter
    .route('/:id/module/:moduleId/option')
    .get(callbackHandler(optionController.get))
    .post(callbackHandler(optionController.post))
    .patch(callbackHandler(optionController.patch));

systemRouter.route('/:id/module/:moduleId/option/query').get(callbackHandler(optionController.getBy));

systemRouter
    .route('/:id/module/:moduleId/option/:optionId')
    .delete(callbackHandler(optionController.remove))
    .get(callbackHandler(optionController.getById));

systemRouter
    .route('/:id/rol')
    .get(callbackHandler(rolController.get))
    .post(callbackHandler(rolController.post))
    .patch(callbackHandler(rolController.patch));

systemRouter.route('/:id/rol/query').get(callbackHandler(rolController.getBy));

systemRouter
    .route('/:id/rol/:rolId')
    .get(callbackHandler(rolController.getById))
    .delete(callbackHandler(rolController.remove));

systemRouter
    .route('/:id/command')
    .get(callbackHandler(commandController.get))
    .post(callbackHandler(commandController.post))
    .patch(callbackHandler(commandController.patch));

systemRouter.route('/:id/command/query').get(callbackHandler(commandController.getBy));

systemRouter
    .route('/:id/command/:commandId')
    .delete(callbackHandler(commandController.remove))
    .get(callbackHandler(commandController.getById));

module.exports = systemRouter;
