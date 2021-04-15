import { Max, MaxLength, Min, MinLength } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ProductConfiguration } from "./product.config";
import { RecordLinksDto } from "../dto/recordLinks.dto";

@Entity()
class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: ProductConfiguration.nameMaximumLength })
  @MinLength(ProductConfiguration.nameMinimumLength)
  @MaxLength(ProductConfiguration.nameMaximumLength)
  name: string;

  @Column({
    type: "varchar",
    length: ProductConfiguration.descriptionMaximumLength,
  })
  @MinLength(ProductConfiguration.descriptionMinimumLength)
  @MaxLength(ProductConfiguration.descriptionMaximumLength)
  description: string;

  @Column({ type: "int", precision: ProductConfiguration.pricePrecision })
  @Min(ProductConfiguration.priceMinimum)
  @Max(ProductConfiguration.priceMaximum)
  price: number;

  links? = new RecordLinksDto();
}

export default Product;

export { Product };
