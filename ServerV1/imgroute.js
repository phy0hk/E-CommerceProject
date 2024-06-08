const imgRoute = __dirname+"/Main/images";
const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    console.log(req.url);
    const imgfilePath = imgRoute+req.url;
    res.sendFile(imgfilePath);
})
module.exports = router;