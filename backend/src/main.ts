import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("/v1/api")
  app.enableCors({origin: "http://15.235.181.48:3000/"})
  await app.listen(3001);
}
bootstrap();
