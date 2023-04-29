const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const ConstVariables = sequelize.define('ConstVariables', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        TeacherHourlyRate: {
          type: DataTypes.INTEGER,       
          defaultValue: 40,
          allowNull: false
        },
        ExtraEachStudent: {
          type: DataTypes.INTEGER,
          defaultValue: 20,
          allowNull: false
        },
        Administrative_fees :{
            type: DataTypes.FLOAT,
            defaultValue: 15,
            allowNull: false 
        },
        Sales_tax: {
          type: DataTypes.FLOAT,
          defaultValue: 14.975,
          allowNull: false
        },
        RebateFor6: {
            type: DataTypes.FLOAT,
            defaultValue: 10,
            allowNull: false
        },
        RebateFor12: {
            type: DataTypes.FLOAT,
            defaultValue: 15,
            allowNull: false
        },

      });
      
      return ConstVariables;

};