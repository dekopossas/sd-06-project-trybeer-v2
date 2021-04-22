module.exports = (sequelize, DataType) => {
  const Products = sequelize.define(
    'Products', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER(1),
      },
      name: { type: DataType.STRING },
      price: { type: DataType.FLOAT },
      image: { type: DataType.STRING },
    },
    { timestamps: false },
  );
  return Products;
};
