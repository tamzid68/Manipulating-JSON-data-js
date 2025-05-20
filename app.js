const express = require('express');
const app = express();
const port = 4000;

const rateLimit = require('./middLeware/mid_rateLimit');
const checkUser = require('./middLeware/mid_checkUser');


app.use(express.json());

app.use(rateLimit);

app.get('/', checkUser, (req,res)=>{
    res.json({
        message: "Hello World"
    });
});



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});