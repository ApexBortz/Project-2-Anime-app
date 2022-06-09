'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class faveFact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.faveFact.belongsTo(models.user)
      models.faveFact.hasMany(models.comment)
    }
  }
  faveFact.init({
    animeName: DataTypes.STRING,
    factId: DataTypes.INTEGER,
    fact: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'faveFact',
  });
  return faveFact;
};
