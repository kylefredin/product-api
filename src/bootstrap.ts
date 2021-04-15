import { INestApplication, ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ApiConfiguration } from "./app/api.config";

/**
 * Responsible for setting up the Nest Application
 */
class Bootstrap {
  /**
   * Sets up the application using the provided NestApplication instance
   *
   * @param {INestApplication} app
   * @return {void}
   */
  public setup(app: INestApplication): void {
    this.setupGlobalPipe(app);
    this.setupSwagger(app);
  }

  /**
   * @param {INestApplication} app
   * @return {void}
   */
  private setupGlobalPipe(app: INestApplication): void {
    const validationPipe = new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    });

    app.useGlobalPipes(validationPipe);
  }

  /**
   * @param {INestApplication} app
   * @return {void}
   */
  private setupSwagger(app: INestApplication): void {
    const config = new DocumentBuilder()
      .setTitle(ApiConfiguration.title)
      .setDescription(ApiConfiguration.description)
      .setVersion(ApiConfiguration.version)
      .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup(ApiConfiguration.documentationPath, app, document);
  }
}

export default Bootstrap;

export { Bootstrap };
