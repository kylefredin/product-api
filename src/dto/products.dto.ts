import { Product } from "../product/product.entity";
import { MetaDto } from "./meta.dto";
import { LinksDto } from "./links.dto";

class ProductsDto {
  /**
   * @type {Product[]}
   */
  public products: Product[] = [];

  /**
   * @type {MetaDto}
   */
  public meta: MetaDto = new MetaDto();

  /**
   * @type {LinksDto}
   */
  public links: LinksDto = new LinksDto();
}

export default ProductsDto;

export { ProductsDto };
