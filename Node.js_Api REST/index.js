const express = require('express');
const routerApi = require('./routes');
const {logError,ErrHandler} = require('./Middleware/error.handler');



const app = express();
const port = 3000;

//for recive json file
app.use(express.json());


routerApi(app);

app.use(logError);
//app.use(BoomErrHandler);
app.use(ErrHandler);


app.get("/",(req,res)=>{
   
    res.send('this is the main page in this app');

});
app.listen(port,(err)=>{

    if(err){
        Console.log("There's a problem in this app");
    }
    console.log("this is server in 3000");
    console.log('200 ok');
})
















 






