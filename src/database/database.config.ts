import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_USERNAME,
} from "../environment";

class DatabaseConfiguration {
  /**
   * The database host
   *
   * @type {string}
   */
  static readonly host = DATABASE_HOST;

  /**
   * The database name
   *
   * @type {string}
   */
  static readonly databaseName = DATABASE_NAME;

  /**
   * The database user password
   *
   * @type {string}
   */
  static readonly password = DATABASE_PASSWORD;

  /**
   * The database port
   *
   * @type {number}
   */
  static readonly port = Number(DATABASE_PORT);

  /**
   * The database user name
   *
   * @type {string}
   */
  static readonly username = DATABASE_USERNAME;
}

export default DatabaseConfiguration;

export { DatabaseConfiguration };
