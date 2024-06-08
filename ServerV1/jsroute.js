const jsRoute = __dirname+"/Main/js";
const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    console.log(req.url);
    const jsfilePath = jsRoute+req.url;
    res.sendFile(jsfilePath);
})
module.exports = router;