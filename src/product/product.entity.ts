import { ApiProperty } from "@nestjs/swagger";
import { Max, MaxLength, Min, MinLength } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ProductConfiguration } from "./product.config";
import { RecordLinksDto } from "../dto/recordLinks.dto";

@Entity()
class Product {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: "The product identifier",
    example: 1,
    nullable: true,
    required: false,
    type: "number",
  })
  id: number;

  @Column({ type: "varchar", length: ProductConfiguration.nameMaximumLength })
  @MinLength(ProductConfiguration.nameMinimumLength)
  @MaxLength(ProductConfiguration.nameMaximumLength)
  @ApiProperty({
    description: "The product name",
    example: "Yo-yo",
    nullable: false,
    required: true,
  })
  name: string;

  @Column({
    type: "varchar",
    length: ProductConfiguration.descriptionMaximumLength,
  })
  @MinLength(ProductConfiguration.descriptionMinimumLength)
  @MaxLength(ProductConfiguration.descriptionMaximumLength)
  @ApiProperty({
    description: "The product description",
    nullable: false,
    required: true,
  })
  description: string;

  @Column({ type: "int", precision: ProductConfiguration.pricePrecision })
  @Min(ProductConfiguration.priceMinimum)
  @Max(ProductConfiguration.priceMaximum)
  @ApiProperty({
    description: "The product price",
    example: "12.00",
    nullable: false,
    required: true,
    type: "float",
  })
  price: number;

  links? = new RecordLinksDto();
}

export default Product;

export { Product };
