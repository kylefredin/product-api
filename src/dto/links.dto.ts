/**
 * Represents pagination links
 */
class LinksDto {
  /**
   * The previous page of results
   *
   * @type {string | null}
   */
  public prev: string | null = null;

  /**
   * The next page of results
   *
   * @type {string | null}
   */
  public next: string | null = null;

  /**
   * The first page of results
   *
   * @type {string | null}
   */
  public first: string | null = null;

  /**
   * The last page of results
   *
   * @type {string | null}
   */
  public last: string | null = null;
}

export default LinksDto;

export { LinksDto };
