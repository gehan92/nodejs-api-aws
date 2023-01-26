const routes = require('express').Router();
const userdata = require('./user/userDetails_route');

routes.use('/myApp',userdata)


module.exports=routes