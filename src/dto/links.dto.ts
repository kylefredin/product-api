import { ApiProperty } from "@nestjs/swagger";

/**
 * Represents pagination links
 */
class LinksDto {
  /**
   * The previous page of results
   *
   * @type {string | null}
   */
  @ApiProperty({
    description: "The url for the previous set of records",
    example: "http://localhost:3000/products?page=2&perPage=20",
    format: "url",
    nullable: true,
  })
  public prev: string | null = null;

  /**
   * The next page of results
   *
   * @type {string | null}
   */
  @ApiProperty({
    description: "The url for the next set of records",
    example: "http://localhost:3000/products?page=3&perPage=20",
    format: "url",
    nullable: true,
  })
  public next: string | null = null;

  /**
   * The first page of results
   *
   * @type {string | null}
   */
  @ApiProperty({
    description: "The url for the first set of records",
    example: "http://localhost:3000/products?page=1&perPage=20",
    format: "url",
    nullable: true,
  })
  public first: string | null = null;

  /**
   * The last page of results
   *
   * @type {string | null}
   */
  @ApiProperty({
    description: "The url for the last set of records",
    example: "http://localhost:3000/products?page=4&perPage=20",
    format: "url",
    nullable: true,
  })
  public last: string | null = null;
}

export default LinksDto;

export { LinksDto };
