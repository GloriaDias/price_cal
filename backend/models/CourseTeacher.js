const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const CourseTeacher = sequelize.define('CourseTeacher', {
        course_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey:true,
          references: {
            model: 'Courses',
            key: 'course_id',
          },
        },
        teacher_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey:true,
          references: {
            model: 'Teachers',
            key: 'teacher_id',
          },
        },
      });
      return CourseTeacher;
};