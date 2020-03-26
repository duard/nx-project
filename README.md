# simples dev container

Criar uma library

```shell
nx g @nrwl/angular:lib --directory=ng models --dry-run
```

```shell
nx generate library assets --directory=shared --tags="scope:shared,type:assets" --style=scss
```


Criar um module

```shell
nx g @nrwl/angular:module (pasta-opcional)/nome-do-modulo --project library-onde-sera-criado  --dry-run
```

```code 
nx g @nrwl/angular:module  layoutOne --project ng-shared  --dry-run
nx g @nrwl/angular:component layoutOne --project ng-shared  --dry-run

```
Criar um componente

```shell
nx g @nrwl/angular:component nome-componente --project library-onde-sera-criado  --dry-run
```

rodando a app de dentro do container do VSCode

```shell
nx serve --host 0.0.0.0 --disableHostCheck --disable-host-check --port 4300 --project apps-sig-app
```

```shell
git add . ; git commit -m "Rodando via VSCode Container :-)"; git push
```


Verificar o que sua alteração impactou no projetop
```shell
nx affected:dep-graph --host 0.0.0.0
```

Verificar dependencias do projeto
```
nx dep-graph --host 0.0.0.0
```
```
nx dep-graph --host 0.0.0.0 --port 4212
```


#### BUILD

```shell
node --max_old_space_size=4096  /usr/local/bin/nx build --prod --named-chunks=true --vendor-chunk=true --build-optimizer --progress  --project=apps-sig-app
```
