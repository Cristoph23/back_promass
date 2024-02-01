import { config } from "dotenv";

config();

export default {
  PORT: process.env.PORT,
  HOST_DB: process.env.HOST_DB,
  NAME_DB: process.env.NAME_DB,
  USER_DB: process.env.USER_DB,
  PASSWORD_DB: process.env.PASSWORD_DB,
};
