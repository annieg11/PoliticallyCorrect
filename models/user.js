'use strict';
var bcrypt = require('bcryptjs');

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
    },
    //Hashes up the password for each user created. genSaltSync hashes password over 8 times
    instanceMethods : {
      generateHash : function(password){
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
      },
      validPassword: function(password){
        return bcrypt.compareSync(password, this.password)               
      }

    }
  });
      // hook added to hash the pasword before the user create is complete 
  User.hook('beforeCreate', function(user, options){
    user.password = user.generateHash(user.password);
  })
  return User;
};