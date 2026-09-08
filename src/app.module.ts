import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppConfig } from './config/app.config.js';
import { DatabaseConfig } from './config/db.config.js';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';
import { CoreModule } from './core/core.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [AppConfig, DatabaseConfig] }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.getOrThrow<string>('mongo.uri'),
      }),
    }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 10,
        },
      ],
    }),
    CoreModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
