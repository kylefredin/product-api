import { BASE_URL, SERVER_PORT } from "../environment";

class AppConfiguration {
  static baseUrl = BASE_URL;

  static defaultPage = 1;

  static defaultPerPage = 20;

  static maximumPerPage = 100;

  static serverPort = Number(SERVER_PORT);
}

export default AppConfiguration;

export { AppConfiguration };
