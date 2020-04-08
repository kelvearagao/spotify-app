## Demo da apicação

[https://kelvearagao.github.io/spotify-app/](https://kelvearagao.github.io/spotify-app/)

### Executar aplicação para desenvolvimento local

```
npm run start
```

### Executar testes com o watch ativado

```
npm run test
```

### Ver cobertura de testes

```
npm run test:ci
```

### Executar lint

```
npm run lint
```

### Formatar código em stage

```
npm run format
```

### Executar builds

```
npm run build:(dsv|hml|prd)
```

### Executar build dentro do docker

```
docker image build --build-arg APP_ENV=(dsv|hml|prd) -t spotify-app .
docker container run -p 3000:80 spotify-app
```