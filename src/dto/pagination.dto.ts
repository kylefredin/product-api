import { IsInt, Max, Min } from "class-validator";
import { Transform } from "class-transformer";
import { AppConfiguration } from "../app/app.config";

/**
 * Represents parameters to paginate a set of results
 */
class PaginationDto {
  /**
   * The current page
   *
   * @type {number}
   */
  @Transform(({ value }) => (isFinite(value) ? Number(value) : value))
  @IsInt()
  @Min(1)
  public page: number = AppConfiguration.defaultPage;

  /**
   * The number of results per page
   *
   * @type {number}
   */
  @Transform(({ value }) => (isFinite(value) ? Number(value) : value))
  @IsInt()
  @Min(1)
  @Max(AppConfiguration.maximumPerPage)
  public perPage: number = AppConfiguration.defaultPerPage;

  /**
   * Based on perPage, the number of items to limit the query to
   *
   * @type {number}
   */
  public get limit(): number {
    return this.perPage;
  }

  /**
   * Based on page, the number of items to offset the query by
   *
   * @type {number}
   */
  public get offset(): number {
    if (this.page < 2) {
      return 0;
    }

    return Math.floor(this.page * this.perPage);
  }
}

export default PaginationDto;

export { PaginationDto };
