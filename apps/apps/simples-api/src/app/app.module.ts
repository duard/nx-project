import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizacoesModule } from '@nx-solsig/nest/sistema';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Organizacao } from '@nx-solsig/nest/sistema';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'sigpharma',
      type: 'mysql',
      host: 'db.sigpharma.com',
      port: 3306,
      username: 'admin',
      password: '6f2e2582736d14740c0cf469f05ea551',
      database: 'apresentacao',
      logging: true,
      // entities: [__dirname + '../../**/*.entity{.ts,.js}'],
      // entities:[__dirname, "**/*.entity{.ts,.js}"]
      // entities: [__dirname + '../../../../**/*.entity{.ts,.js}', Organizacao],
      // entities: [join('../../nx-project/', './**/*.entity{.ts,.js}')],

      entities: [
        'dist/**/*.entity{.ts,.js}',
        'src/**/*.entity{.ts,.js}',
        Organizacao,
      ],
    }),
    TypeOrmModule.forRoot({
      name: 'gestao',
      type: 'mysql',
      host: 'db.sigpharma.com',
      port: 3306,
      username: 'admin',
      password: '6f2e2582736d14740c0cf469f05ea551',
      database: 'gestao',
      logging: true,

      entities: [
        'dist/**/*.entity{.ts,.js}',
        'src/**/*.entity{.ts,.js}',
        Organizacao,

      ],
    }),
    OrganizacoesModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log('=>', __dirname, '<=');
    console.log('=>', join(__dirname, '../../../../**/*.entity{.ts,.js}'));
  }
}

/*

# production
SIGPHARMA_HOST=db.sigpharma.com
SIGPHARMA_NAME=apresentacao
SIGPHARMA_USER=admin
SIGPHARMA_PASSWORD=6f2e2582736d14740c0cf469f05ea551
/workspaces/nx-project/libs/nest/sistema
  constructor() {
    console.log('=>', __dirname);
  }
*/
