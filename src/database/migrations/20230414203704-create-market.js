'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('market', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      product: {
        type: Sequelize.STRING(35),
        allowNull: false
      },
      urgency: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
    queryInterface.createTable('bills', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      value: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      purpose: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      expiration: {
        type: Sequelize.DATE
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
    queryInterface.createTable('toDO', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      activity: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
    queryInterface.createTable('financial_out', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      value_out: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      form: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      value_of: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      day: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      month: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
    queryInterface.createTable('financial_in', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      value_in: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      form: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      referency: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      day: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      month: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('market');
    await queryInterface.dropTable('bills');
    await queryInterface.dropTable('toDo');
    await queryInterface.dropTable('financial_out');
    await queryInterface.dropTable('financial_in');
  }
};
