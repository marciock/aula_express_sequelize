const {Users} =require('../models');

module.exports={
    save:async(req,res)=>{

        const data={
            nome:req.body.nome,
            email:req.body.email,
            senha:req.body.senha
        };
        
        const results=await Users.create(data);

        console.log(results);
        res.redirect('/');

        //console.log(req.body.nome);
    } 
}