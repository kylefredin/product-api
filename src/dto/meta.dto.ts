import { IsBoolean, IsInt, Max, Min } from "class-validator";
import { AppConfiguration } from "../app/app.config";

/**
 * Represents pagination metadata
 */
class MetaDto {
  /**
   * The total number of records
   *
   * @type {number}
   */
  @IsInt()
  @Min(0)
  public totalRecords = 0;

  /**
   * The current page
   *
   * @type {number}
   */
  @IsInt()
  @Min(1)
  public currentPage: number = AppConfiguration.defaultPage;

  /**
   * The number of results per page
   *
   * @type {number}
   */
  @IsInt()
  @Min(1)
  @Max(AppConfiguration.maximumPerPage)
  public perPage: number = AppConfiguration.defaultPerPage;

  /**
   * The total number of pages, based on total records and records per page
   *
   * @type {number}
   */
  @IsInt()
  @Min(0)
  public get totalPages(): number {
    if (!this.totalRecords) {
      return 0;
    }

    return Math.ceil(this.totalRecords / this.perPage);
  }

  /**
   * Returns true if this is the first page
   *
   * @type {boolean}
   */
  @IsBoolean()
  public get isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  /**
   * Returns true if this is the last page
   *
   * @type {boolean}
   */
  @IsBoolean()
  public get isLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }
}

export default MetaDto;

export { MetaDto };
