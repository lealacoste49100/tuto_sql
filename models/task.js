'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id : {allowNull : false, primaryKey : true, type : DataTypes.UUID, defaultValue : DataTypes.UUID},
    name: {type : DataTypes.STRING, allowNull : false, validate : {len : {args : [3,50], msg : "Your to-do item name must be 3 and 50 characters. Please try again."}}},
    done: DataTypes.BOOLEAN,
    description: DataTypes.TEXT
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.Context, {
      foreignKey : 'ContextId',
      onDelete : 'CASCADE'
    });
  };
  return Task;
};