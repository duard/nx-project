import { Controller, Get } from '@nestjs/common';

import { OrganizacoesService } from './organizacoes.service';

@Controller()
export class OrganizacoesController {
  constructor(private readonly resourceService: OrganizacoesService) {}

  // @Get('hello-orgs')
  // getHello() {
  //   return this.resourceService.getHello();
  // }

  @Get('organizacoes')
  async getResources() {
    const resources = await this.resourceService.findAll();

    return resources;
  }
}
