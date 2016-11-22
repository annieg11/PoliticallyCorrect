'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    userName: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};