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
        Representative.hasMany(models.Districts);
      }
    }

     representative.hook('afterCreate',function(representative,option){
      representative.image = function createImageReference(name){
        representative.name.replace(/\s+/g, '').toLowerCase();
      }

    })
  });
  return Representative;
};