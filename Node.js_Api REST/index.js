const express = require('express');
const routerApi = require('./routes');
const {checkApiKey} = require('./middleware/auth.handler');

const {logError,ErrHandler,BoomErrHandler,OrmErrHandler} = require('./Middleware/error.handler');


const app = express();
const port = 3000;


app.use(express.json());





app.get("/",async (req,res)=>{
   
    res.send('this is the main page in this app');

});

app.get('/nueva-Ruta', checkApiKey,(req, res)=>{
    res.send('Esta es una nueva ruta');
    
    
});

require('./utils/auth/index');

routerApi(app);

app.use(logError);
app.use(OrmErrHandler);
app.use(BoomErrHandler);
app.use(ErrHandler);



app.listen(port,(err)=>{

    if(err){
        Console.log("There's a problem in this app");
    }
    console.log(`this is server in localhost:${port}/api/v1/`);
    console.log('200 ok');
})







/*
    modules

    @hapi/boom
    express
    npm i faker@5.5.3 -S
    joi
    mysql
    bcrypt
    passport
    ////strategy
     passport-local
     jsonwebtoken
     passport-jwt
*/


