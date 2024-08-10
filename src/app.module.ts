import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import BaseConfig from 'config/base.config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [BaseConfig]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
