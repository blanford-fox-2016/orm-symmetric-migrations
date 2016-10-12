'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    age: {
      type: DataTypes.INTEGER,
      min: 5
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true
    },
    phonenumber: {
      type: DataTypes.INTEGER,
      isDecimal: true,
      len: [10,15],
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getName: function(firstname) {
        Students.findAll({
          where: {
            firstname: firstname
          }
        })
      }
    }
  });
  return Student;
};
