const http = require("node:http");
const port = 8080;
const fs = require("fs");
const mime = require('mime-types');
const HtmlPath = ["./Main/Pages/login.html", "./Main/Pages/register.html"]
const defaultResPath = "./Main";
const server = new http.createServer((req, res) => {
    const url = req.url;
    const ReqType = mime.lookup(url);
    console.log(url);
    if (url == "/") {
        fs.readFile("./Main/Pages/index.html", "utf-8", (err, data) => {
            if (err) throw err;
            else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                res.end();
            }
        })
    }
    if (url.toLowerCase() === "/login" || url.toLowerCase() === "/login/") {
        fs.readFile(HtmlPath[0], "utf-8", (err, data) => {
            if (err) throw err;
            else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                res.end();
            }
        })
    }
    if (url.toLowerCase() == "/register" || url.toLowerCase() === "/register/") {
        fs.readFile(HtmlPath[1], "utf-8", (err, data) => {
            if (err) throw err;
            else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                res.end();
            }
        })
    }
    if (url == "/favicon") {
        fs.readFile("Main/Images/favicon.png", "utf-8", (err, data) => {
            if (err) throw err;
            else {
                res.writeHead(200, { "Content-Type": "image/png" })
                res.write("Main/Images/favicon.png");
                res.end();
            }
        });
    }
    if (ReqType == "text/css") {
        fs.readFile(defaultResPath + url, "utf-8", (err, data) => {
            if (err) throw err;
            else {
                res.writeHead(200, { "Content-Type": ReqType });
                res.write(data);
                res.end();
            }
        })
    }
})
server.listen(port, () => {
    console.log(`Server Listen to http://localhost:${port}`);
})