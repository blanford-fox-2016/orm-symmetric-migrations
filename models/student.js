'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Student;
};
