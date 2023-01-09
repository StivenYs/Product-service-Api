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
    if (err.isBoom){
        const {output} = err;
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
}

module.exports = {logError,ErrHandler};
