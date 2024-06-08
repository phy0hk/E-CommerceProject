const nodeRoute = __dirname+"/node_modules";
const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    console.log(req.url);
    const nodefilePath = nodeRoute+req.url;
    res.sendFile(nodefilePath);
})
module.exports = router;