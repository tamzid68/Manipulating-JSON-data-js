const express = require('express');
const app = express();
const port = 4000;
const routes = require('./routes/rou_product');

const rateLimit = require('./middLeware/mid_rateLimit');
const checkUser = require('./middLeware/mid_checkUser');


app.use(express.json());

app.use(rateLimit);

app.use('/api', checkUser, routes);


app.get('/', checkUser, (req,res)=>{
    res.json({
        message: "Hello World"
    });
});



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});