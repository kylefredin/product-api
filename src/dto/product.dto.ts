import { Product } from "../product/product.entity";

/**
 * Represents a single product
 */
class ProductDto {
  /**
   * @type {Product}
   */
  product: Product;
}

export default ProductDto;

export { ProductDto };
