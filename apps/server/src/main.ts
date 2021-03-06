import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Top full stack example')
    .setDescription('The top full stacj API description')
    .setVersion('1.0')
    .addBearerAuth()  // addBearerAuth启用token功能
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3000);
  console.log('http://localhost:3000/api-docs')
}
bootstrap();
