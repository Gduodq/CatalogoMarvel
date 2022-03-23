# Catálogo de Heróis da Marvel

Esse projeto foi iniciado com o [Create React App](https://github.com/facebook/create-react-app).

O projeto utiliza a [API da Marvel](https://developer.marvel.com/docs) para consultar os dados dos heróis.

Como solução de estilo é utilizada a biblioteca focada em CSS-in-Js do [Material-UI](https://mui.com).

Para manutenção do código são utilizados os pacotes [Cypress](https://www.cypress.io), [ESLint](https://eslint.org) e [Prettier](https://prettier.io).

## Scripts disponíveis

Na pasta do projeto você pode utilizar dos comandos abaixo:

### `npm i`

Instala as dependências para a aplicação ser executada.

### `npm start`

Roda a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver a aplicação no browser.

### `npm run build`

Constroi a aplicação para produção na pasta `build`.

### `npm run start-build-on-background`

Esse comando espera que a aplicação esteja construída na pasta `build` e a inicia como um processo em background.

### `npm run stop-build-background`

Para e apaga o processo em background iniciado pelo comando `npm run start-build-on-background`.

### `npm run cypress:open`

Abre o cypress de forma interativa para acompanhar e interagir com os testes no browser.

### `npm run cypress:run`

Abre o cypress via terminal e roda todos os testes do projeto.

### `npm run lint`

Checa por problemas de sintaxe no código da pasta `src` com o ESLint.

## Variáveis em ambiente

Para a utilização da aplicação é necessário que seja criado um arquivo `.env` na raiz do projeto para a inserção de variáveis de ambiente.

### REACT_APP_API_PUBLIC_KEY (`Obrigatória`)

Essa variável é responsável por setar a API_KEY para autenticação com a API da Marvel.\
Para mais informações acesse [este link](https://developer.marvel.com/).
