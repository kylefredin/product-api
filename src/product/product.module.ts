import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { productProviders } from "./product.providers";
import { DatabaseModule } from "../database/database.module";
import { UrlService } from "../url/url.service";

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [...productProviders, ProductService, UrlService],
})
class ProductModule {}

export default ProductModule;

export { ProductModule };
