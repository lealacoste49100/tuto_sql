'use strict';
module.exports = (sequelize, DataTypes) => {
  const Context = sequelize.define('Context', {
    name: DataTypes.STRING,
    id : {
      allowNull : false,
      primaryKe: true,
      type : DataTypes.UUID,
      defaultValue : DataTypes.UUID
    }
  }, {});
  Context.associate = function(models) {
    // associations can be defined here
  };
  return Context;
};