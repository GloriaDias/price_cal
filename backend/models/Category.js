const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define('Categories', {
        category_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        category_name: {
          type: DataTypes.STRING(255),
          allowNull: false
        }
      });
      return Category;
};
