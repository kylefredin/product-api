import { Connection } from "typeorm";
import { Product } from "./product.entity";
import { Provider } from "../provider";

const productProviders = [
  {
    provide: Provider.ProductRepository,
    useFactory: (connection: Connection) => connection.getRepository(Product),
    inject: [Provider.Database],
  },
];

export default productProviders;

export { productProviders };
