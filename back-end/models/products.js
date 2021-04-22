module.exports = (sequelize, DataType) => {
  const products = sequelize.define(
    'products', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER(1),
      },
      name: { type: DataType.STRING },
      price: { type: DataType.STRING },
      image: { type: DataType.STRING },
    },
    { timestamps: false },
  );
  return products;
};
