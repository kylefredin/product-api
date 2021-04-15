import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
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
}

export default ProductController;

export { ProductController };
