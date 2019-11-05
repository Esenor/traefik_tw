# traefik_tw #

## Build node images ##

> docker-compose -f ./etc/docker/build_compose.yml build

## Run containers ##

> docker-compose -f ./etc/docker/traefik_compose.yml up -d

## Endpoints ##

- [https://traefik.localhost](https://traefik.localhost)
- [https://node_a.localhost](https://node_a.localhost)
- [https://node_b.localhost](https://node_b.localhost)