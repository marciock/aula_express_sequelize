'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Marcas',{
      id:{
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type:Sequelize.INTEGER
      },
      marca:{
        allowNull:false,
        type:Sequelize.STRING(60)
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
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Marcas');
  }
};
