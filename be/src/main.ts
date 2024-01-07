import { CustomLogger } from '@core/common/logger';
import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';

const API_PREFIX = 'mf/api/';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  // app.useGlobalInterceptors(new LoggingInterceptor());
  app.useLogger(app.get(CustomLogger));
  app.setGlobalPrefix(API_PREFIX);
  app.enableVersioning({
    type: VersioningType.URI,
  });

  const config = new DocumentBuilder()
    // .setTitle(process.env.npm_package_name)
    // .setDescription(process.env.npm_package_description)
    // .setVersion(process.env.npm_package_version)
    .setTitle('mf')
    .setDescription('mf')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apiDocs', app, document);

  await app.listen(3000);
}
bootstrap();