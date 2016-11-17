'use strict';
module.exports = function(sequelize, DataTypes) {
  var Representatives = sequelize.define('Representatives', {
    name: DataTypes.STRING,
    partyName: DataTypes.STRING,
    districtNum: DataTypes.INTEGER,
    phoneNum: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Representatives;
};