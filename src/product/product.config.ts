class ProductConfiguration {
  /**
   * The minimum length of the product description
   *
   * @type {number}
   */
  static readonly descriptionMinimumLength = 5;

  /**
   * The maximum length of the product description
   *
   * @type {number}
   */
  static readonly descriptionMaximumLength = 1000;

  /**
   * The minimum length of the product name
   *
   * @type {number}
   */
  static readonly nameMinimumLength = 3;

  /**
   * The maximum length of the product name
   *
   * @type {number}
   */
  static readonly nameMaximumLength = 100;

  /**
   * The minimum product price
   *
   * @type {number}
   */
  static readonly priceMinimum = 1;

  /**
   * The maximum product price
   *
   * @type {number}
   */
  static readonly priceMaximum = 20000;

  /**
   * The precision (number of digits after decimal) allowed for products
   *
   * @type {number}
   */
  static readonly pricePrecision = 2;
}

export default ProductConfiguration;

export { ProductConfiguration };
