import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/learn/api'); // 设置全局前缀
  await app.listen(9080);
}
bootstrap();
