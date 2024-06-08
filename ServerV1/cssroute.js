const cssRoute = __dirname+"/Main/css";
const express = require('express');
const router = express.Router();

router.use(async(req,res,next)=>{
    console.log(req.url);
    const cssfilePath = cssRoute+req.url;
    await res.sendFile(cssfilePath);
})
module.exports = router;