import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { ProductModule } from "../product/product.module";
import { UrlModule } from "../url/url.module";

@Module({
  imports: [DatabaseModule, ProductModule, UrlModule],
})
class AppModule {}

export default AppModule;

export { AppModule };
