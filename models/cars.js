'use strict';

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class cars extends Model {
  }
  cars.init({
    tipe: DataTypes.STRING,
    model: DataTypes.STRING,
    tarif: DataTypes.INTEGER,
    available: DataTypes.BOOLEAN,
    createdby: DataTypes.STRING,
    updatedby: DataTypes.STRING,
    deletedby: DataTypes.STRING
  }, {
    sequelize,

  });
  return cars;
};