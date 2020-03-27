import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { OrganizacoesModule } from "@nx-solsig/nest/sistema";

@Module({
  imports: [
    OrganizacoesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db.sigpharma.com',
      port: 3306,
      username: 'admin',
      password: '6f2e2582736d14740c0cf469f05ea551',
      database: 'apresentacao',
      entities: [__dirname + '/**/*.entity{.ts,.js}']
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/*

# production
SIGPHARMA_HOST=db.sigpharma.com
SIGPHARMA_NAME=apresentacao
SIGPHARMA_USER=admin
SIGPHARMA_PASSWORD=6f2e2582736d14740c0cf469f05ea551

*/
