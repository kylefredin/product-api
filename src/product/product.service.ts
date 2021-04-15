import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { Product } from "./product.entity";
import { Provider } from "../provider";
import { PaginationDto } from "../dto/pagination.dto";
import { UrlService } from "../url/url.service";

@Injectable()
export class ProductService {
  constructor(
    @Inject(Provider.ProductRepository)
    private readonly productRepository: Repository<Product>,
    private readonly urlService: UrlService,
  ) {}

  /**
   * Returns all records for the paginated set
   *
   * @param {PaginationDto} query
   * @return {Promise<[Product[], number]>}
   */
  public async findAll(query: PaginationDto): Promise<[Product[], number]> {
    const [
      products,
      count,
    ] = await this.productRepository
      .createQueryBuilder()
      .skip(query.offset)
      .take(query.limit)
      .getManyAndCount();

    products.forEach((product: Product) => {
      product.links = this.urlService.getRecordLinksDto(
        "/products",
        product.id,
      );
    });

    return [products, count];
  }

  /**
   * Returns the product using the provided identifier
   *
   * @param {number} id
   * @return {Promise<Product>}
   */
  public async findOne(id: number): Promise<Product | undefined> {
    const product = await this.productRepository.findOne(id, {
      relations: ["genres", "keywords", "companies"],
    });

    if (!product) {
      return product;
    }

    product.links = this.urlService.getRecordLinksDto("/products", product.id);

    return product;
  }

  /**
   * Creates a product using the provided payload
   *
   * @param {Product} product
   * @return {Promise<Product>}
   */
  public async create(product: Product): Promise<Product> {
    const entity = await this.productRepository.save(product);

    entity.links = this.urlService.getRecordLinksDto("/products", entity.id);

    return entity;
  }

  /**
   * Updates an existing product using the provided id and payload
   *
   * @param {Product} product
   * @return {Promise<Product>}
   */
  public async update(id: number, product: Product): Promise<Product> {
    await this.productRepository
      .createQueryBuilder()
      .update(Product)
      .set(product)
      .where("id = :id", { id })
      .execute();

    return (this.findOne(id) as unknown) as Product;
  }
}
