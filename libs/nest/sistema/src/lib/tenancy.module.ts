import { Global, Module, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { getConnection } from 'typeorm';
// Environment
import { ENV as env } from "@envApi/env";

const connectionFactory = {
  provide: 'CONNECTION',
  scope: Scope.REQUEST,
  useFactory: (req) => {
    const tenant = this.getMyHost();
    return getConnection(tenant);
  },
  inject: [REQUEST],
};

@Global()
@Module({
  providers: [connectionFactory],
  exports: ['CONNECTION'],
})
export class TenancyModule {

  constructor() {
    console.log('tenancy module');
  }

  getMyHost() {
    const conexao =  env.database;
    console.log('CONECTAR', conexao);

    return conexao;
  }
}

// https://stackoverflow.com/questions/56583231/nestjs-request-scoped-multitenancy-for-multiple-databases
