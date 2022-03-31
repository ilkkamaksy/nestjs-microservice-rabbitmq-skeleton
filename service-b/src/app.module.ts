import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER,
} from '../conf/conf';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarEntity } from './bar.entity';
import { BarRepository } from './bar.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: POSTGRES_HOST,
      port: POSTGRES_PORT,
      username: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      database: POSTGRES_DB,
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([BarRepository, BarEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
