const convert=(cook)=>{

    const parte1=cook.split('='); //login=Dulcelina > [login,Dulcelina]
    const parte=parte1[1];
   
    return parte;

}
module.exports=convert;