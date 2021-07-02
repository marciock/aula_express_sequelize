const {Users} =require('../models');
const bcrypt=require('bcryptjs');
require('dotenv').config;
const convert=require('./lib/convert');

const jwt=require('jsonwebtoken');


module.exports={
    save:async(req,res)=>{

        const cook=req.headers.cookie;
        const login=convert(cook);
        const secret=process.env.SECRET_KEY;

        

        const permission=jwt.verify(login,secret,(err,result)=>{

            console.log(result);
        });

       

       


        let senhaLimpa=req.body.senha;
        const salt=bcrypt.genSaltSync(10);
        const senha=bcrypt.hashSync(senhaLimpa,salt);

        //console.log(senha);
        
        const data={
            nome:req.body.nome,
            email:req.body.email,
            senha:senha,
            ativo:true
        };
        
        const results=await Users.create(data);

        console.log(results);
        res.redirect('/');

        //console.log(req.body.nome);
    } 
}