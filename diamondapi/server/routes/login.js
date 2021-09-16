const express =require('express');
const routes = express.Router();
const controller = require('../controller/usercontroller')

routes.post("/signin",controller.usersignin);
routes.post("/signup",controller.usersignup);

module.exports =routes