'use strict';
var bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    instanceMethods : {
      generateHash : function(password){
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
      },
      validPassword: function(password){
        return bcrypt.compareSync(password, this.password)               
      }

    }
  });

  User.hook('beforeCreate', function(user, options){
    user.password = user.generateHash(user.password);
  })
  return User;
};