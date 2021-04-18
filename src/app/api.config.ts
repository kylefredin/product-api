class ApiConfiguration {
  /**
   * The description to use in the Swagger API documentation
   *
   * @type {string}
   */
  static readonly description = "The Products API";

  /**
   * The path where the swagger docs should be served.
   *
   * @type {string}
   */
  static readonly documentationPath = "docs";

  /**
   * The title to use in the Swagger API documentation
   *
   * @type {string}
   */
  static readonly title = "Products";

  /**
   * The version to use in the Swagger API documentation
   *
   * @type {string}
   */
  static readonly version = "1.0";
}

export default ApiConfiguration;

export { ApiConfiguration };
