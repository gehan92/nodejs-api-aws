const routes = require('express').Router();

var userController = require('../../controllers/user/user.controller');

console.log("route-2")

routes.post('/add',userController.AddDetails)
routes.get('/get',userController.GetUserdetails)

module.exports=routes