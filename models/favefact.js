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
      models.faveFact.hasOne(models.user)
      models.faveFact.hasMany(models.comment)
    }
  }
  faveFact.init({
    anime_name: DataTypes.STRING,
    fact_id: DataTypes.INTEGER,
    fact: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'faveFact',
  });
  return faveFact;
};
