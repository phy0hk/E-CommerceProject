const http = require("node:http");
const port = 8080;
const fs = require("fs");
const HtmlPath = ["../FrontEnd/Login/index/html","../FrontEnd/Register/register.html"]

const server = new http.createServer((req,res)=>{
    const url = req.url;
    if(url="/"){
        fs.readFile("index.html","utf-8",(err,data)=>{
            res.setHeader(200,{"Content-Type":"text/html"});
        })
    }

})
server.listen(port,()=>{
    console.log(`Server Listen to http://localhost:${port}`);
})