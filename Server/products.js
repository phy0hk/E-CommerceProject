const express = require('express');
const router = express.Router();
const fs = require('fs');
let name;
router.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Main/html/products.html');
    console.log(database);
})
router.get('/products.js',(req,res)=>{
    res.sendFile(__dirname+"/Main/js/products.js");
})
router.get('/products.json',(req,res)=>{
    res.sendFile(__dirname+"/Main/js/products.js");
})
router.get('/shoes/:name',(req,res)=>{
    res.send(`Get Product ${req.params.name}`)
})
module.exports = router;