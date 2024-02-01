import Sequelize from "sequelize";
import config from "../config.js";

const sequelize = new Sequelize(
  config.NAME_DB,
  config.USER_DB,
  config.PASSWORD_DB,
  {
    host: config.HOST_DB,
    dialect: "mysql",
    define: {
      freezeTableName: true,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

export default sequelize;
