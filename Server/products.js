const express = require('express');
const router = express.Router();
const fs = require('fs');
const { MongoClient } = require('mongodb');
const dbserver = 'mongodb+srv://admin:1234567890@test.fhbbggo.mongodb.net/';
const client = new MongoClient(dbserver);
let current;
let reqProduct;
let data;
async function dbconnect() {
    try {
        await client.connect();
        await client.db('products').command({ ping: 1 });
        console.log("Connect successfully!!");
        console.log(await client.db('products').collection('Products').countDocuments());
            data = await client.db('products').collection('Products').findOne({id:reqProduct});
        router.get('/', async (req, res) => {
            await client.connect();
            data = await client.db('products').collection('Products').findOne({id:"SH001"});
            res.sendFile(__dirname + '/Main/html/allProducts.html');
        })
        router.get('/allProducts.js',async (req, res) => {
            res.sendFile(__dirname + '/Main/js/allProducts.js');
        })
        router.get('/allProducts',(req,res)=>{
            res.json(data);
        })
        router.get('/eachProducts.js', (req, res) => {
            res.sendFile(__dirname + "/Main/js/eachProducts.js");
        })
        router.get('/shirts/:name', async (req, res) => {
            current = req.params.name;
            reqProduct = current.substring(0,current.length);
            await client.connect();
            data = await client.db('products').collection('Products').findOne({id:reqProduct});
            if(data){
                res.sendFile(__dirname + '/Main/html/eachProducts.html');
            }else{
                res.send("404 Not Found")
            }     
        })
        router.get('/productdata', async (req, res) => {
            console.log(current.substr(0,current.length));
             res.json(data);
        })
    } finally {
        await client.close();
    }
}
dbconnect().catch(console.dir);
function substring(data){
    return data.substr(0,data.length);
}
module.exports = router;