import { OrganizacoesService } from './organizacoes.service';
import { OrganizacoesController } from './organizacoes.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [OrganizacoesController],
  providers: [OrganizacoesService],
})
export class OrganizacoesModule {}
