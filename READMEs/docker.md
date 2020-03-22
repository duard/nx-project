# docker simples

removendo tudo

``` shell
docker-compose -f docker-compose.pro.yml stop; docker rmi $(docker images -q -f dangling=true); docker system prune -y; docker system prune --volumes -y ; docker system prune -a -y; docker rmi $(docker images -a -q); docker rm $(docker ps -a -f status=exited -q); docker images; docker ps; docker volume ls;
```
