const {ValidationError} = require('sequelize');
function logError (err,req,res,next) {
    console.error(err);
    next(err);
    console.log("logError")
}   

function ErrHandler(err,req,res,next){
    console.log("ErrHandler")
    res.status(500).json({
        message : err.message,
        stack : err.stack
    });
}

function BoomErrHandler(err,req,res,next){
    console.log("isBoom err")
    if (err.isBoom){
        const {output} = err;
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
}
function OrmErrHandler(err,req,res,next){
    console.log("ORM err")
    if (err instanceof ValidationError){
        res.status(409).json({
            statusCode: 409,
            message: err.name,
            errors: err.errors
            
        })
    }
    next(err);
}


module.exports = {logError,ErrHandler,BoomErrHandler,OrmErrHandler};
