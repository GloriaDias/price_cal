const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define('Customers', {
        customer_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        customer_name: {
          type: DataTypes.STRING(255),
          allowNull: false
        },
        customer_email: {
          type: DataTypes.STRING(255),
          allowNull: false
        },
        customer_password: {
          type: DataTypes.TEXT,
          allowNull: false
        }
      });
      return Customer;
};