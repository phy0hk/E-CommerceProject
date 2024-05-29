const http = require("node:http");
const port = 8080;
const fs = require("fs");
const mime = require('mime-types');
const HtmlPath = ["../FrontEnd/Pages/login.html","../FrontEnd/Pages/register.html"]
const defaultResPath = "../FrontEnd";
const server = new http.createServer((req,res)=>{
    const url = req.url;
    const ReqType = mime.lookup(url);
    console.log(url);
    console.log(ReqType);
    if(url=="/"){
        fs.readFile("../FrontEnd/Pages/index.html","utf-8",(err,data)=>{
            if(err) throw err;
            else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(data);
            }
        })
    }else if(url.toLowerCase()==="/login" || url.toLowerCase()==="/login/"){
        fs.readFile(HtmlPath[0],"utf-8",(err,data)=>{
            if(err) throw err;
            else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
            }
        })
    }
    else if(url.toLowerCase()=="/register" || url.toLowerCase()==="/register/"){
        fs.readFile(HtmlPath[1],"utf-8",(err,data)=>{
            if(err) throw err;
            else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
            }
        })
    }
    else if(url.toLowerCase()=="/favicon.ico"){
        fs.readFile("../FrontEnd/Resources/favicon.ico","utf-8",(err,data)=>{
            if(err) throw err;
            else{
            res.writeHead(200,{"Content-Type":ReqType});
            res.write(data);
            res.end();
            }
        })
    }
    else if(ReqType == "text/html"){
        fs.readFile(defaultResPath+url,"utf-8",(err,data)=>{
            if(err) {res.writeHead(404,{"Content-Type":"text/html"})
                res.write("<h1 align='center'>!!404 Not Found!!</h1>")
                res.end();}
            else{
            res.writeHead(200,{"Content-Type":ReqType});
            res.write(data);
            res.end();
            }
        })
    }else if(ReqType == "image/jpeg" || ReqType == "image/png"){
        fs.readFile(defaultResPath+url,"utf-8",(err,data)=>{
            if(err) throw err;
            else{
            res.writeHead(200,{"Content-Type":ReqType});
            res.write(data);
            res.end();
            }
        }) 
    }else if(ReqType == "text/css"){
        fs.readFile(defaultResPath+url,"utf-8",(err,data)=>{
            if(err) throw err;
            else{
            res.writeHead(200,{"Content-Type":ReqType});
            res.write(data);
            res.end();
            }
        }) 
    }
    
})
server.listen(port,()=>{
    console.log(`Server Listen to http://localhost:${port}`);
})