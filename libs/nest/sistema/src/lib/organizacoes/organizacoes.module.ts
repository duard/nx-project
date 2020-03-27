import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrganizacoesController } from './organizacoes.controller';
import { Organizacao } from './organizacoes.entity';
import { OrganizacoesService } from './organizacoes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Organizacao])],
  controllers: [OrganizacoesController],
  providers: [OrganizacoesService],
})
export class OrganizacoesModule {}
