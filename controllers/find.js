const {Users} =require('../models');
require('dotenv').config;
const jwt=require('jsonwebtoken');

module.exports={

    show:async(req,res)=>{
        const results=await Users.findAll({
            where:{ativo:true},
            attributes:['id','nome','email']
        });

        //console.log(results);
        res.json(results);
        

    },
    view:async (req,res)=>{
       
           
            const cook=req.headers.cookie;
            const parte1=cook.split('='); //login=Dulcelina > [login,Dulcelina]
            const parte=parte1[1];
           

            const secretKey= await jwt.sign({login:parte},process.env.SECRET_KEY);

            

        const results=await Users.findAll({
            where:{ativo:true},
            attributes:['id','nome','email']
        });

        res.render('index',{data:results,login:secretKey});
    }
}