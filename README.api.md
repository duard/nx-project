#### NESTJS API comandos

Adicionar pacote

- GraphQL
  - `npm install --save-dev @nestjs/graphql`


Rodar a API

```shell
nx serve --host 0.0.0.0  --project apps-simples-api
```


Gerar uma library para a API

```shell
nx g @nrwl/nest:lib --directory=nest sistema
```

Gerar um module dentro da library

```shell
nx g @nestjs/schematics:module  organizacoes --dry-run
nx g @nestjs/schematics:module  --directory=nest-sistema organizacoes --dry-run --project goiaba
```

Gerar um controller dentro da library

```shell
nx g @nrwl/nest:co --directory=nest sistema
```
