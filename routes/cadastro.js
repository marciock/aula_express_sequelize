const express=require('express');
const router=express.Router();
require('dotenv').config();

router.get('/',(req,res)=>{
    const cook=req.headers.cookie;
    const parte1=cook.split('=');
    const parte=parte1[1];
    console.log(parte);
    res.render('cadastro',{title:process.env.NODE_ALFA});
})

module.exports=router;