const express = require('express');
const app = express();
const PORT = 8080;
const Router = require('router');

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/Main/html/index.html");
})
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/Main/html/login.html')
})
app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/Main/html/register.html')
})
// app.get('/products/shoes/:name',(req,res)=>{
//     res.send(`Get Product ${res.parems.name}`)
// })

// app.use((req,res,next)=>{
//     console.log(req.url);
//     next();
// })
const imgRoute = require('./imgRoutes');
const cssRoute = require('./cssRoutes');
const productsRoute = require('./products');
app.use('/css',cssRoute,(req,res,next)=>{console.log(req.url);next();});
app.use('/Images',imgRoute,(req,res,next)=>{console.log(req.url);next();});
app.use('/products',productsRoute,(req,res,next)=>{console.log(req.url);next();});
app.listen(PORT,()=>{
    console.log(`Server Listen to http://localhost:${PORT}`);
})