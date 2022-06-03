table: users

email: VARCHAR(255)
password: VARCHAR(255)

sequelize model:create --name user --attributes email:string,password:string

sequelize model:create --name faveFact --attributes anime_name:string,fact_id:integer,fact:text

sequelize model:create --name comment --attributes anime_name:string,anime_id:integer,fact_id:integer,content:text


models.faveFacts.belongsTo(models.users)
models.faveFacts.hasMany(models.comment)

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class faveFacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.favefacts.belongsTo(models.users)
      models.faveFacts.hasMany(models.comment)
    }
  }
  faveFacts.init({
    anime_name: DataTypes.STRING,
    fact_id: DataTypes.INTEGER,
    fact: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'faveFacts',
  });
  return faveFacts;
};