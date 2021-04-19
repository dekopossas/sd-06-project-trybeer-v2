const createUser = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasOne(models.sale,
      { foreignKey: 'userId', as: 'user' });
  };

  return User;
};

module.exports = createUser;