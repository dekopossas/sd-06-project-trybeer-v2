'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
        total_price: {
          type: Sequelize.DECIMAL,
          allowNull: false,
        },
        delivery_address: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        delivery_number: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        sale_date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        status: {
          type: Sequelize.STRING,
          allowNull: false,
        }
      },
    }, { timestamp: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};
