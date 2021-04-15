import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { AppConfiguration } from "./app/app.config";
import { Bootstrap } from "./bootstrap";

async function start() {
  const app = await NestFactory.create(AppModule);

  const bootstrap = new Bootstrap();

  bootstrap.setup(app);

  await app.listen(AppConfiguration.serverPort);
}

start().catch(console.error);
