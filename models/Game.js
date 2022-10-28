const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      readonly: false,
    },
    game_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_single_player: {
      type: DataTypes.BOOLEAN,
    },
    is_multi_player: {
      type: DataTypes.BOOLEAN,
    }
  },
  {
    sequelize,
    freezeTableName: false,
    underscored: true,
    modelName: 'game',
  }
);

module.exports = Game;