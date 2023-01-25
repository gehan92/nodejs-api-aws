const routes = require('express').Router();

const userdata = require('./user/userDetails_route');
console.log("router index page-1 ");
routes.use('/myApp',userdata)


module.exports=routes