'use strict';
module.exports = function(sequelize, DataTypes) {
  var Representative = sequelize.define('Representative', {
    name: DataTypes.STRING,
    party: DataTypes.STRING,
    districtNum: DataTypes.INTEGER,
    phoneNum: DataTypes.STRING,
    url: DataTypes.STRING
  },{
      timestamps: false
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Representative;
};