const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define('Teachers', {
        teacher_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        teacher_name: {
          type: DataTypes.STRING(255),
          allowNull: false
        },
        hourly_rate: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false
        },
        teacher_password: {
          type: DataTypes.TEXT,
          allowNull: false
        }
      });
      return Teacher;
};
