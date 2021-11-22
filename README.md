# desafio-bten
 ## Inicialização da API
 Optei por utilizar a API [Json-server](https://github.com/typicode/json-server). Para inicializar, entre na pasta `desafio-bten/dados/` pelo prompt e digite o comando:
 
 ```
 json-server --watch db.json
```
 Porém será necessário (pretendo) realizar uma correção no uso desta API ou utilizar uma outra. Tive problemas ao realizar requisições para passar as informações do usuário para o Dashboard da aplicação.
 
 ## Inicialização da aplicação
 Depois de entrar na pasta do projeto pelo prompt e instalar as dependências necessárias com o comando  `npm i`, será necessário instalar o [Angular Material](https://material.angular.io/guide/getting-started) e os pacotes [highcharts](https://www.highcharts.com/docs/getting-started/install-from-npm), [highcharts-angular](https://www.npmjs.com/package/highcharts-angular) e [Flex Layout](https://github.com/angular/flex-layout):
  ```
 ng add @angular/material
 npm i highcharts-angular --save
 npm i highcharts --save
npm i @angular/flex-layout @angular/cdk
```

Em seguida, podemos incializar a aplicação com o comando:
```
ng s -o
```
