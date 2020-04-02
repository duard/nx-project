import { Organizacao } from '@nx-solsig/nest/sistema';

export const ENV: any = {
  database: {
    name: 'sigpharma',
    type: 'mysql',
    host: 'db.sigpharma.com',
    port: 3306,
    username: 'admin',
    password: '6f2e2582736d14740c0cf469f05ea551',
    database: 'apresentacao',
    logging: true,

    entities: [
      __dirname + '/src/**/*.entity.ts',
      __dirname + '/dist/**/*.entity.js',
      __dirname + '../../**/*.entity.js',
      __dirname + '../../../**/*.entity.js',
      __dirname + '../../../../**/*.entity.js',
      __dirname + '../../../../../**/*.entity.js',
      __dirname + '../../../../../../**/*.entity.js',
      __dirname + '../../../../../../../**/*.entity.js',
      __dirname + '../../../../../../../../**/*.entity.js',
      __dirname + '../../../../../../../../../**/*.entity.js',
      '@nx-solsig',
      Organizacao

    ],
  },
};
