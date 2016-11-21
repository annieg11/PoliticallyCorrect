'use strict';
module.exports = function(sequelize, DataTypes) {
  var Districts = sequelize.define('Districts', {
    districtNum: DataTypes.INTEGER,
    zipCode: DataTypes.INTEGER
  }, {
      timestamps: false
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Districts;
};