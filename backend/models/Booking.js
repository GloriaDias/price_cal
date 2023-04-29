const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const Booking = sequelize.define('Bookings', {
        booking_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        customer_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Customers',
            key: 'customer_id'
          }
        },
        noOfTeacher: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //   model: 'Teachers',
            //   key: 'teacher_id'
            // }
        },        
        course_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        topic_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'Topics',
              key: 'topic_id'
            }
        },
        num_students: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        start_time: {
          type: DataTypes.DATE,
          primaryKey: true,
          allowNull:false
        },
        end_time: {
          type: DataTypes.DATE,
          allowNull:false
        }
      });
      return Booking;
};