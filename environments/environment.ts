import * as packageJson from '../package.json';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  test: false,
  ambiente: 'Development',
  devFAST: true,

  envName: 'dev',
  version: '0.1.2a',

  apiGESTAO: 'https://ges.sigpharma.net',

  apiSIG: 'apiSIG-nao-setada',

  appTitle: '[DEV] SIG',
  febTitle: '[DEV] FEB',

  application: 'sig',

  awsS3Assets: 'null',

  // apiCLOUD: 'http://cloud.sigpharma.xyz:8850/upload/file-upload?rede=sigpharma&modulo=testes&usuarioId=1',
  apiCLOUDS3: 'null',
  apiCLOUDS3Dev: 'https://cloud.sigpharma.net/upload/upload-s3',
  apiCLOUDS3Prod: 'https://cloud.solucoessig.com.br/upload/upload-s3',
  apiCloudURL: 'null',
  emails: `/v1/emails/sendContact`,
  apiCLOUD: 'https://cloud.sigpharma.net',
  anexo: `/getItem/anexo/`,

  googleAnalytics: {
    domain: 'none',
    trackingId: 'UA-136872648-1',
  },

  menus: `/v1/sistemaMenus`,

  REMOTE_CONFIG_URL: '/assets/data/ui-config.json',
  DOCS_BASE_URL: 'http://localhost:8000',
  API_BASE_URL: 'http://localhost:3000/api',
  WS_EVENT_BUS_URL: 'ws://localhost:3000/eventbus',

  organizacoesAlias: `/v1/organizacoes/alias/`,
  organizacoes: `/v1/organizacoes/`,
  logsApi: `/v1/logs-api/`,

  webPush: {
    subject: 'string',
    publicKey: 'string',
    privateKey: 'string'
  },
  appName: '[Dev] Sig',
  i18nPrefix: '',
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    ngrx: packageJson.dependencies['@ngrx/store'],
    material: packageJson.dependencies['@angular/material'],
    // bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    ngxtranslate: packageJson.dependencies['@ngx-translate/core'],
    fontAwesome: packageJson.dependencies['@fortawesome/fontawesome-free'],
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript'],
    cypress: packageJson.devDependencies['cypress']
  },

  rotasAcordoComercial: {
    tipoAcordoComercial: `/v1/acordos-comerciais/tipos-acordos-comerciais`,
    lancamentoValor: `/v1/acordos-comerciais/lancamentos-valores`,
    acordoComercial: `/v1/acordos-comerciais`,
    acordoFornecedor: `/v1/acordos-comerciais/acordos-fornecedores`,
    acordoEstabelecimento: `/v1/acordos-comerciais/acordos-estabelecimentos`,
    acordoRelatorioComercial: `/v1/acordos-comerciais/relatorios`,
    acordoFornecedorTipo: `/v1/acordos-comerciais/acordos-fornecedores-tipos`,
  },

  rotasEstabelecimentos: {
    farmacias: `/v1/farmacias/`,
    redes: `/v1/estabelecimentos/redes`,
    especificacoes: `/v1/estabelecimentos-especificacoes/`,
    listaPrecos: `/v1/lista-precos/`,
    classe: `/v1/estabelecimentos-classe/`,
    grupos: `/v1/estabelecimentos/grupo`,
    sistemaDrogaria: `/v1/estabelecimentos/sistemas-drogaria`,
    farmaciasBandeira: `/v1/estabelecimentos/farmacias-bandeiras`,
    estabRedes: '/v3/estabelecimentos/relatorios/estabelecimentos-redes',
    questionario: {
      categoriasQuestionarios: '/v3/estabelecimentos/questionarios/categoria-questionario'
    },
    rodadaNegocios: {
      listaPresenca: `/v1/rodadaNegocio/listaPresenca`,
      eventos: `/v1/rodadaNegocio/eventos`,
      compras: `/v1/rodadaNegocio/compras`,
      rodada: `/v1/rodadaNegocio/rodada`,
      pontoPeso: `/v1/rodadaNegocio/pontoPeso`,
      pontosFarmacias: `/v1/rodadaNegocio/pontosFarmacias`,
      trocaTickets: `/v1/rodadaNegocio/trocaTickets`,
      numeroSorte: `/v1/rodadaNegocio/numeros-sorte`,
      ticketsAvulso: `/v1/rodadaNegocio/ticketsAvulso`,
      premios: `/v1/rodadaNegocio/premios`,
      sorteios: `/v1/rodadaNegocio/sorteios`,
      vencedores: `/v1/rodadaNegocio/vencedores/`
    }
  },
  rotasExpansao: {
    motivos: `/v1/expansao/motivos/`,
    etapas: `/v1/expansao/etapas/`,
    planos: `/v1/expansao/planos/`,
    prospectados: `/v1/expansao/prospectados/`,
    etapasPlano: `/v1/expansao/planosEtapas/`,
    etapasPlanoByPlano: `/v1/expansao/planosEtapas/etapasByPlano/`,
    etapasPlanoExceptPlano: `/v1/expansao/planosEtapas/etapasExceptPlano/`,
    prospectadosEtapasPlanos: `/v1/expansao/prospectadosEtapasPlanos/`,
    prospectadosEtapasPlanosSituacao: `/v1/expansao/prospectadosEtapasPlanos/situacao/`,
    deleteProspectadosEtapasPlanos: `/v1/expansao/prospectadosEtapasPlanos/`,
    scrum: `/v1/expansao/scrum/`,
    interacao: `/v1/expansao/interacao/`,
    // final: `/v1/expansao/interacao/prospectados/finalizados
    final: `/v1/expansao/finalizacao/`,
    cloud: `/v1/expansao/cloud/`,
  },
  rotasFinanceiro: {
    impostos: `/v1/financeiro/impostos/`,
    indices: `/v1/financeiro/indiceCobranca/`,
    centroCusto: `/v1/financeiro/centroCusto/`,
    valoresIndices: `/v1/financeiro/indiceValor/`,
    tipoCobranca: `/v1/tipos/tipoCobranca/`,
    catMov: `/v1/financeiro/categoriaMovimentacao/`,
    colaboradores: `/v1/pessoas/funcionarios/`,
    fornecedores: `/v1/pessoas/fornecedores/`,
    fabricantes: `/v1/pessoas/fabricantes/`,
    representantes: `/v1/pessoas/representantes/`,
    repFor: `/v1/pessoas/representantes/fornecedor`,
    planoDeContas: `/v1/financeiro/categoria/`,
    cbe: `/v1/financeiro/cbe/`,
    banco: `/v1/financeiro/bancos/`,
    tipoConta: `/v1/tipos/tipoConta/`,
    fluxoCaixa: `/v1/relatorios/fluxo-de-caixa`,
    contas: `/v1/financeiro/contas`,
    movimentacoesRede: `/v1/financeiro/conta-rede/`,
    contasInteracao: `/v1/financeiro/contas-interacao/`,
    movimentacoes: `/v1/financeiro/contas-dashboard`,
    remessa: `/v1/financeiro/contas/gerarRemessa`,
    cobranca: `/v1/financeiro/cobranca/`,
    visaoGeral: `/v1/financeiro/visao-geral/`
  },
  rotasSeguranca: {
    visaoUsuario: `/v1/seguranca/visaoUsuario/`,
    gruposDiretivasUsuarios: `/v1/seguranca/gruposDiretivasUsuarios`,
    permissoesCampos: `/v1/seguranca/permissoesCampos/`,
    campoClasse: `/v1/seguranca/campoClasse/`,
    pfads: `/v1/seguranca/permissoesFarAbasDiretivas/`,
    permissoesFarmaciasAbas: `/v1/seguranca/permissoesFarmaciasAbas/`,
    permissoesTelas: `/v1/seguranca/permissoesTelas/`,
    permissoesSistema: `/v1/seguranca/permissoesSistema`,
    nomeTela: `/v1/seguranca/nomeTela/`,
    nivelTela: `/v1/seguranca/nivelTela/`,
    usuario: `/v1/seguranca/usuarios/`
  },

  rotasAtendimento: {
    contratantes: `/v1/atendimento-v2/contratantes/`,
    contratos: `/v1/atendimento-v2/contrato/`,
    tipoDepartamentos: `/v1/atendimento-v2/tipo-departamento/`,
    departamentos: `/v1/atendimento-v2/departamento/`,
    departamentoOrdemServico: `/v1/atendimento-v2/departamento-ordem-servico/`,
    departamentoIntegrantes: `/v1/atendimento-v2/departamento-integrantes/`,
    chamadosServico: `/v1/atendimento-v2/chamado-servico`,
    interacoesChamado: `/v1/atendimento-v2/interacao-chamado-servico/`,
    OrdemServico: `/v1/atendimento-v2/ordem-servico`,
    interacoesOrdem: `/v1/atendimento-v2/interacao-ordem-servico/`,
    departamentoInterno: `/v1/atendimento-v2/departamento-interno`,
    departamentoInternoIntegrantes: `/v1/atendimento-v2/departamento-interno-integrantes`,
    cloudInteracaoChamadoServico: `/v1/atendimento-v2/cloud-interacao-chamado-servico/`,
    parametrosOrdem: `/v1/atendimento-v2/ordem-servico-parametro/`,
    cloudInteracaoOrdemServico: `/v1/atendimento-v2/cloud-interacao-ordem-servico/`,
    agendados: `/v1/atendimento-v2/interacoes/`,
    statusInteracoes: `/v1/atendimento-v2/status-interacoes/`,
    historicoAgendamento: `/v1/atendimento-v2/historico-agendamento`,
    cloudInteracoes: `/v1/atendimento-v2/cloud-interacoes/`,
    // departamentoIntegrantes: `v1/atendimento-v2/departamento/`

    // V1
    osSintetico: `/v1/atendimento/ordem-servico/sinteticoOrdemServico`,
    osSinteticoStatus: `/v1/atendimento/ordem-servico/status/detalhes`,

    sinteticoInteracoes: `/v1/atendimento/ordem-servico/sintetico-interacoes`,
    sinteticoInteracoesStatus: `/v1/atendimento/ordem-servico/sintetico-interacoes-status`,
    analiticoInteracoes: `/v1/atendimento/interacao-ordem-servico/analitico-interacoes`,

    chamadosSinteticosUsuarios: `/v1/atendimento/chamados/sinteticosUsuarios`, // sintetico usuarios
    chamadosStatus: `/v1/atendimento/chamados/status`, // sintetico status
    qtdChamadosByStatus: `/v1/atendimento/chamados/status/detalhes`,

    chamadosInteracaoChamadoServico: `/v1/atendimento/interacao-chamado-servico`, // analitico
    chamadosInteracaoSinteticosUsuarios: `/v1/atendimento/interacao-chamado-servico/sinteticosUsuarios`, // sintetico
    // usuarios
    chamadosSinteticosInteracoes: `/v1/atendimento/interacao-chamado-servico/sinteticos`, // sintetico
    // status

    osUsuarios: `/v1/atendimento/ordem-servico/usuarios-ordem-servico`, // usuarios
    // os

    departamento: `/v1/atendimento/departamento`,

    chamados: `/v1/dashboards/atendimentos/chamados`,
    chamadosAnaliticos: `/v1/dashboards/atendimentos/chamados/analiticos`,
    chamadosInteracoes: `/v1/dashboards/atendimentos/chamados/interacoes`,
    chamadosUsuarios: `/v1/dashboards/atendimentos/chamados/usuarios`,
    chamadosInteracoesUsuario: `/v1/dashboards/atendimentos/chamados/interacoes/usuario`,
    statusChamados: {
      index: '/v1/dashboards/atendimentos/chamados/status',
      statusDetalhes: '/v1/dashboards/atendimentos/chamados/status/detalhes',
    },

    ordemServico: `/v1/dashboards/atendimentos/ordem-servico/`,
    ordemServicoAnaliticos: `/v1/dashboards/atendimentos/ordem-servico/analiticos`,
    ordemServicoInteracoes: `/v1/dashboards/atendimentos/ordem-servico/interacoes`,
    ordemServicoUsuarios: `/v1/dashboards/atendimentos/ordem-servico/usuarios`,
    ordemServicoInteracoesUsuario: `/v1/dashboards/atendimentos/ordem-servico/interacoes/usuario`,
    statusOrdemServico: {
      index: '/v1/dashboards/atendimentos/ordem-servico/status',
      statusDetalhes: '/v1/dashboards/atendimentos/ordem-servico/status/detalhes',
    },

    interacoesAtendimento: `/v1/dashboards/atendimentos/interacoes-atendimento`,
    interacoesAtendimentoAnaliticos: `/v1/dashboards/atendimentos/interacoes-atendimento/analiticos`,
    interacoesAtendimentoAnaliticosUsuario: `/v1/dashboards/atendimentos/interacoes-atendimento/analiticos/usuarios`,
    interacoesAtendimentoInteracoes: `/v1/dashboards/atendimentos/interacoes-atendimento/interacoes`,
    interacoesAtendimentoUsuarios: `/v1/dashboards/atendimentos/interacoes-atendimento/usuarios`,
    // interacoesAtendimentoInteracoesUsuario: `/v1/dashboards/atendimentos/interacoes-atendimento/interacoes/usuario`,
    statusInteracoesAtendimento: {
      index: '/v1/dashboards/atendimentos/interacoes-atendimento/status',
      statusDetalhes: '/v1/dashboards/atendimentos/interacoes-atendimento/status/detalhes',
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
