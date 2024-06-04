const express = require('express');
const router = express.Router();
const fs = require('fs');
// const {MongoClient} = require('mongodb');
// const dbserver = 'mongodb+srv://admin:1234567890@test.fhbbggo.mongodb.net/';
// const client = new MongoClient(dbserver);
// async function dbconnect(){
//     try {
//       await client.connect();
//       await client.db('products').command({ping:1});
//       console.log("Connect successfully!!");  
//       console.log(client.db('admin').collection("products").find({name:"GG"}));
//     } finally{
//         await client.close();
//     }
// }
// dbconnect().catch(console.dir);
var current;
router.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Main/html/products.html');
})
router.get('/products.js',(req,res)=>{
    res.sendFile(__dirname+"/Main/js/products.js");
})
router.get('/shoes/:name',(req,res)=>{
    res.sendFile(__dirname+'/Main/html/products.html');
    current = req.params.name;
})
router.get('/data',(req,res)=>{
const data = ({nikeshoes:{id:"nikeshoes",name:"Nike Shoes",type:"Sport",instock:"10"},nikeshoes2:{id:"nikeshoes2",name:"Nike Shoes2",type:"Sport Shoes",instock:""}});
res.json(data.nikeshoes);
console.log(data);
})
module.exports = router;