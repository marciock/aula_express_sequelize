const express=require('express');
const router=express.Router();
const user=require('../controllers/update');


router.post('/',user.update);

module.exports=router;