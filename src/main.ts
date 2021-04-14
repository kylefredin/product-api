import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Configuration } from "./configuration";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Configuration.serverPort);
}
bootstrap();
