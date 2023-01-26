const productsRouter = require('./products.router');
const usersRouter = require('./user.router');
const customersRouter = require('./customers.router');
const categoryRouter = require('./category.router');
const orderRouter = require('./orders.router');
const authRouter = require('./auth.ruter');
const express = require('express');


function routerApi(app){
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/categories',categoryRouter);
    router.use('/products', productsRouter);
    router.use('/user',usersRouter);
    router.use('/customers',customersRouter);
    router.use('/orders',orderRouter);
    router.use('/auth',authRouter);
   
}

module.exports = routerApi;


