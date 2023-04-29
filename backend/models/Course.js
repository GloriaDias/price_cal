const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define('Courses', {
        course_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        course_name: {
          type: DataTypes.STRING(255),
          allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Categories',
                key: 'category_id'
            }
        },
        studio_rent: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false
        },
        minimum_participants: {
          type: DataTypes.INTEGER,
          allowNull: false
        },        
        sales_tax: {
          type: DataTypes.DECIMAL(4, 2),
          allowNull: false
        },
        administrative_fee: {
          type: DataTypes.DECIMAL(4, 2),
          allowNull: false
        },        
      });
      return Course;
};