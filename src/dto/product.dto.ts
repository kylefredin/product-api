import { ApiProperty } from "@nestjs/swagger";
import { Product } from "../product/product.entity";

/**
 * Represents a single product
 */
class ProductDto {
  /**
   * @type {Product}
   */
  @ApiProperty()
  product: Product;
}

export default ProductDto;

export { ProductDto };
