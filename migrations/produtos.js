'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Produtos',{
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
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Produtos')
  }
};
