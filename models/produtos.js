const { Sequelize } = require("sequelize/types");

module.exports=(Sequelize,DataType)=>{
    const Produtos=Sequelize.define('Produtos',{
        id:{
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
            type:Sequelize.INTEGER
          },
          produto:{
            allowNull:false,
            style:Sequelize.STRING(80)
          },
          marca_id:{
            allowNull:false,
            style:Sequelize.INTEGER
          },
          descricao:{
            allowNull:true,
            style:Sequelize.TEXT
          },
          ativo:{
            allowNull:false,
            type:Sequelize.BOOLEAN
          },
          createdAt:{
            allowNull:false,
            type:Sequelize.DATE
          },
          updatedAt:{
            allowNull:false,
            type:Sequelize.DATE
          },
    },{});

    Produtos.associate=(models)=>{
        Produtos.belongsTo(models.Marcas,{
            foreingKey:'marca_id',
            targetKey:'id',
            as:'m'
        })
    };

    return Produtos;
}