const express = require('express');
const app = express();
const fs = require('fs');
const productsData = JSON.stringify('/Database/products.json');
const HOSTNAME = 'localhost';
const PORT = 8080;
const mongodb = require('mongodb');
const dbserver = '';
const Router = require('router');

app.get('/',(req,res)=>{
    console.log(productsData);
    res.sendFile(__dirname+"/Main/html/index.html");
})
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/Main/html/login.html')
})
app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/Main/html/register.html')
})

app.use((req,res,next)=>{
    console.log(req.url);
    next();
})
const imgRoute = require('./imgRoutes');
const cssRoute = require('./cssRoutes');
const productsRoute = require('./products.js');
app.use('/css',cssRoute,(req,res,next)=>{console.log(req.url);next();});
app.use('/Images',imgRoute,(req,res,next)=>{console.log(req.url);next();});
app.use('/products',productsRoute,(req,res,next)=>{console.log(req.url);next();});
app.listen(PORT,HOSTNAME,()=>{
    console.log(`Server Listen to http://${HOSTNAME}:${PORT}`);
})