import { createConnection, Connection } from "typeorm";
import { DatabaseConfiguration } from "./database.config";
import { Provider } from "../provider";

const databaseProviders = [
  {
    /**
     * Defines the name of the provider
     *
     * @type {string}
     */
    provide: Provider.Database,

    /**
     * Defines the function to run when this provider is requested
     *
     * @returns {Promise<Connection>}
     */
    useFactory: () =>
      createConnection({
        type: "mysql",
        host: DatabaseConfiguration.host,
        port: DatabaseConfiguration.port,
        username: DatabaseConfiguration.username,
        password: DatabaseConfiguration.password,
        database: DatabaseConfiguration.databaseName,
        entities: ["dist/**/*.entity{.ts,.js}"],
        synchronize: true,
      }).then((connection: Connection) => connection),
  },
];

export default databaseProviders;

export { databaseProviders };
