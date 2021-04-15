import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_USERNAME,
} from "../environment";

class DatabaseConfiguration {
  static host = DATABASE_HOST;

  static databaseName = DATABASE_NAME;

  static password = DATABASE_PASSWORD;

  static port = Number(DATABASE_PORT);

  static username = DATABASE_USERNAME;
}

export default DatabaseConfiguration;

export { DatabaseConfiguration };
