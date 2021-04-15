import { BASE_URL, SERVER_PORT } from "../environment";

class AppConfiguration {
  /**
   * The base url where the application is being served
   *
   * @type {string}
   */
  static readonly baseUrl = BASE_URL;

  /**
   * The default page to start pagination
   *
   * @type {number}
   */
  static readonly defaultPage = 1;

  /**
   * The default number of records to return per page
   *
   * @type {number}
   */
  static readonly defaultPerPage = 20;

  /**
   * The maximum number of records to allow per page
   *
   * @type {number}
   */
  static readonly maximumPerPage = 100;

  /**
   * The port where the server is listening for requests
   *
   * @type {number}
   */
  static readonly serverPort = Number(SERVER_PORT);
}

export default AppConfiguration;

export { AppConfiguration };
