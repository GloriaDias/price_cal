const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const PricingConfig = sequelize.define('PricingConfig', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        NbOfProf: {
          type: DataTypes.INTEGER,          
          allowNull: false
        },
        NbOfStudents: {
          type: DataTypes.INTEGER,          
          allowNull: false
        },
        NbOfHrs:{
            type: DataTypes.DOUBLE,            
            allowNull: false 
        },
        ExtraForAdditionalStudents: {
          type: DataTypes.DOUBLE,
          allowNull: false
        },
        SubTotal:{
          type: DataTypes.DOUBLE,            
          allowNull: false 
        },
        AdminFee: {
          type: DataTypes.DOUBLE,
          allowNull: false
        },
        Rebate: {
          type: DataTypes.DOUBLE,
          allowNull: false
        },
        SubTotal2: {
          type: DataTypes.DOUBLE,
          allowNull: false
        },
        SalesTax: {
          type: DataTypes.DOUBLE,
          allowNull: false
        },
        Total: {
          type: DataTypes.DOUBLE,
          allowNull: false
        },
        TotalRounded: {
          type: DataTypes.DOUBLE,
          allowNull: false
        },
        PricePerHourPerStudent: {
          type: DataTypes.DOUBLE,
          allowNull: false
        },
        PricePerStudent: {
          type: DataTypes.DOUBLE,
          allowNull: false
        },
        Benefit: {
          type: DataTypes.DOUBLE,
          allowNull: false
        },
      });
      return PricingConfig;
};