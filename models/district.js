'use strict';
module.exports = function(sequelize, DataTypes) {
  var Districts = sequelize.define('Districts', {
    districtNum: DataTypes.INTEGER,
    zipCode: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        District.belongsToOne(models.Representative);
      }
    }
   
  });
  return Districts;
};