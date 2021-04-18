import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { ApiBody, ApiNotFoundResponse, ApiResponse } from "@nestjs/swagger";
import { Product } from "./product.entity";
import { ProductService } from "./product.service";
import { ProductDto } from "../dto/product.dto";
import { ProductsDto } from "../dto/products.dto";
import { PaginationDto } from "../dto/pagination.dto";
import { UrlService } from "../url/url.service";

/**
 * API controller for Product routes
 */
@Controller("products")
class ProductController {
  /**
   * @param {ProductService} productService
   */
  public constructor(
    private readonly productService: ProductService,
    private readonly urlService: UrlService,
  ) {}

  /**
   * GET /products route handler
   *
   * @param {PaginationDto} query
   * @return {Promise<ProductsDto>}
   */
  @Get()
  @ApiResponse({
    status: 200,
    description: "The pagination set of records",
    type: ProductsDto,
  })
  public async findAll(@Query() query: PaginationDto): Promise<ProductsDto> {
    const [products, totalRecords] = await this.productService.findAll(query);

    const response = new ProductsDto();

    response.products = products;

    response.meta.totalRecords = totalRecords;
    response.meta.currentPage = query.page;
    response.meta.perPage = query.perPage;

    response.links = this.urlService.getLinksDto("/products", response.meta);

    return response;
  }

  /**
   * GET /products/:id route handler
   *
   * @param {number} id
   * @return {Promise<ProductDto>}
   */
  @Get(":id")
  @ApiResponse({
    status: 200,
    description: "The found record",
    type: ProductDto,
  })
  @ApiNotFoundResponse()
  public async findOne(@Param("id") id: number): Promise<ProductDto> {
    const product = await this.productService.findOne(id);

    if (!product) {
      throw new HttpException("Product not found", HttpStatus.NOT_FOUND);
    }

    const response = new ProductDto();

    response.product = product;

    return response;
  }

  /**
   * POST /products route handler
   *
   * @param {Product} body
   * @return {Promise<ProductDto>}
   */
  @Post()
  @ApiBody({ type: ProductDto })
  @ApiResponse({
    status: 201,
    description: "The record has been successfully created.",
    type: ProductDto,
  })
  public async create(@Body() body: Product): Promise<ProductDto> {
    const product = await this.productService.create(body);

    const response = new ProductDto();

    response.product = product;

    return response;
  }

  /**
   * PUT /products/:id route handler
   *
   * @param {Product} body
   * @return {Promise<ProductDto>}
   */
  @Put(":id")
  @ApiBody({ type: ProductDto })
  @ApiResponse({
    status: 200,
    description: "The record has been successfully updated.",
    type: ProductDto,
  })
  @ApiNotFoundResponse()
  public async update(
    @Param("id") id: number,
    @Body() body: Product,
  ): Promise<ProductDto> {
    const product = await this.productService.findOne(id);

    if (!product) {
      throw new HttpException("Product not found", HttpStatus.NOT_FOUND);
    }

    const response = new ProductDto();

    response.product = await this.productService.update(id, body);

    return response;
  }

  /**
   * DELETE /products/:id route handler
   *
   * @param {number} id
   * @return {Promise<void>}
   */
  @Delete(":id")
  @ApiResponse({
    status: 200,
    description: "The record was deleted",
  })
  @ApiNotFoundResponse()
  public async delete(@Param("id") id: number): Promise<void> {
    const product = await this.productService.findOne(id);

    if (!product) {
      throw new HttpException("Product not found", HttpStatus.NOT_FOUND);
    }

    await this.productService.remove(product);
  }
}

export default ProductController;

export { ProductController };
