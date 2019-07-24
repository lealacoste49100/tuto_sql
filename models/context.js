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
    Context.hasMany(models.Task, {
      foreignKey : 'ContextId',
      onDelete :'CASCADE'
    });

    Context.belongsTo(models.User, {
      foreignKey : 'UserId',
      onDelete : 'CASCADE'
    });
  };
  return Context;
};