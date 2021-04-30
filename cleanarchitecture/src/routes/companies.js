const express = require('express');
const {companyController} = require('../controllers');
const {authHandler, callbackHandler} = require('../middleware');

const companyRouter = express.Router({mergeParams: true});

companyRouter.all('*', authHandler);

companyRouter
    .route('/')
    .get(callbackHandler(companyController.get))
    .post(callbackHandler(companyController.post));

companyRouter.route('/query').get(callbackHandler(companyController.getBy));

companyRouter
    .route('/:id')
    .get(callbackHandler(companyController.getById))
    .patch(callbackHandler(companyController.patch))
    .delete(callbackHandler(companyController.remove));

module.exports = companyRouter;
