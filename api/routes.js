const express = require('express');
require('express-group-routes');

const UserController = require('./controllers/UserController');
const UserAddressController = require('./controllers/UserAddressController');
const TechnologyController = require('./controllers/TechnologyController');
const UserTechnologyController = require('./controllers/UserTechnologyController');

const routes = express();

routes.group("/users", (router) => {
    router.get("/", UserController.index);
    router.post('/', UserController.store);
    router.get('/:id', UserController.show);
    router.post('/:id/update', UserController.update);
    router.delete('/:id/delete', UserController.delete);
    
    router.get('/:userId/address', UserAddressController.index);
    router.get('/:userId/:id/address', UserAddressController.show);
    router.post('/:userId/address', UserAddressController.store);
    router.post('/:userId/:id/address/update', UserAddressController.update);
    router.delete('/:userId/:id/address/delete', UserAddressController.delete);
    
    router.get('/:userId/technology', UserTechnologyController.index);
    router.post('/:userId/technology', UserTechnologyController.store);
    router.delete('/:userId/:id/technology/delete', UserTechnologyController.delete); 
});

routes.group("/technologies", (router) => {
    router.get("/", TechnologyController.index);
    router.post('/', TechnologyController.store);
    router.get('/:id', TechnologyController.show);
    router.post('/:id/update', TechnologyController.update);
    router.delete('/:id/delete', TechnologyController.delete);
});


module.exports = routes;