module.exports = (sequelize, Sequelize) => {
    let Log = sequelize.define(
      "log",
      {
        id: {
          type: Sequelize.BIGINT,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        correlation_id: {
          type: Sequelize.STRING,
          field: "correlation_id",
         
          allowNull: false,
        },
        date:
        {
            type: Sequelize.STRING,
            field: "date",
        }
      },
      {
        freezeTableName: true,
      }
    );
  return Log
    }
  