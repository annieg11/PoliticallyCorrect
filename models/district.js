'use strict';
module.exports = function(sequelize, DataTypes) {
  var District = sequelize.define('District', {
    districtNum: DataTypes.INTEGER,
    zipCode: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return District;
};