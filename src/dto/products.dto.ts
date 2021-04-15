import { ApiProperty } from "@nestjs/swagger";
import { Product } from "../product/product.entity";
import { MetaDto } from "./meta.dto";
import { LinksDto } from "./links.dto";

class ProductsDto {
  /**
   * @type {Product[]}
   */
  @ApiProperty({ type: Product, isArray: true })
  public products: Product[] = [];

  /**
   * @type {MetaDto}
   */
  @ApiProperty({ type: MetaDto })
  public meta: MetaDto = new MetaDto();

  /**
   * @type {LinksDto}
   */
  @ApiProperty({ type: LinksDto })
  public links: LinksDto = new LinksDto();
}

export default ProductsDto;

export { ProductsDto };
