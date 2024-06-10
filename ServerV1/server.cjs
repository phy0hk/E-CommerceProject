const express = require('express');
const server = express();
const allHtmlPath = __dirname + "/Main/html/";
const HOSTNAME = "localhost";
const dbserver = 'mongodb+srv://admin:1234567890@test.fhbbggo.mongodb.net/';
const { MongoClient } = require('mongodb');
const client = new MongoClient(dbserver);
let ProductsData;
const PORT = 3000;


async function dbconnect() {
    console.log("Trying to ping the database...");
try{
    //This part will try to ping the database if it work or not
    await client.connect();
    await client.db('admin').command({ping:1});
    console.log("DB ping successfully!!!");
    //This part will return require file requested by user
    server.get('/', (req, res) => {
        res.sendFile(allHtmlPath + "index.html");//this is the home page
    })
    //this is the login page
    server.get('/login', (req, res) => {
        res.sendFile(allHtmlPath + "login.html");
    })
    //this is the register page
    server.get('/register', (req, res) => {
        res.sendFile(allHtmlPath + "register.html");
    })
    //this is the all products page that didn't finish
    server.get('/products', (req, res) => {//this is the all products page
        res.sendFile(allHtmlPath + "allProducts.html");
    })
    //this is the product page for each products without making multiple pages for each products backend is almost finish but frontend didn't finish
    server.get('/products/:productid', async(req, res) => {
        //this const will try to get the product id
        const reqparams = req.params.productid.substring(0,req.params.productid.length);
        //after name is got this part will try to find data from database
        try {
            console.log("Getting data from database....");
            await client.connect();//this command is need for every time we use database
            ProductsData = await client.db('products').collection('Products').findOne({id:`${reqparams}`});
            console.log("Data received..");
            console.log(ProductsData);
            console.log(reqparams);
            //I think you can understant this part
            if(ProductsData){
                res.sendFile(allHtmlPath + 'product.html');
            }else{
                res.send("Product didn't exist!!");
            }   
        } catch (error) {
            console.log(error);
            console.log("Error Occur!!");
        }
    })
    server.get('/productdata',async(req,res)=>{
        res.json(ProductsData);
    })
    const cssroute = require('./cssroute');
    const imgroute = require('./imgroute');
    const nodemodroute = require('./nodemodroute');
    const jsRoute = require('./jsroute')
    server.use('/css', cssroute);
    server.use('/Images', imgroute);
    server.use('/node_modules', nodemodroute);
    server.use('/js',jsRoute);
    server.listen(PORT, HOSTNAME, () => {
        console.log(`Server is listen to http://${HOSTNAME}:${PORT}`);
    })
}catch{
    console.log("!!Error Occur!!");
    console.log("Database has error occur Restart the server script again or Check the MongoDB server!!!");
}
finally{
    await client.close;
}
}
dbconnect();