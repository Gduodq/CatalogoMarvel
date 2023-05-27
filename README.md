# Marvel Heroes Catalog

This project was initiated with [Create React App](https://github.com/facebook/create-react-app).

The project uses the [Marvel API](https://developer.marvel.com/docs) to fetch hero data.

As a styling solution, the CSS-in-Js library from [Material-UI](https://mui.com) is used.

For code maintenance, the [Cypress](https://www.cypress.io), [ESLint](https://eslint.org) and [Prettier](https://prettier.io) packages are utilized.

To access the application without the need for local installation, visit [https://catalogo-marvel-sigma.vercel.app](https://catalogo-marvel-sigma.vercel.app).

## Available Scripts

In the project directory, you can run the following commands:

### `npm i`

Installs the dependencies for the application to run.

### `npm start`

Runs the application in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the application for production in the `build` folder.

### `npm run start-build-on-background`

This command expects the application to be built in the `build` folder and starts it as a background process.

### `npm run stop-build-background`

Stops and removes the background process started by the `npm run start-build-on-background` command.

### `npm run cypress:open`

Opens Cypress interactively to monitor and interact with tests in the browser.

### `npm run cypress:run`

Runs all the tests in the project using Cypress via the terminal.

### `npm run lint`

Checks for syntax problems in the code within the src folder using ESLint.

## Variáveis de ambiente

To use the application, you need to create a `.env` file at the root of the project to store environment variables.

### REACT_APP_API_PUBLIC_KEY (`Obrigatória`)

This variable is responsible for setting the API_KEY for authentication with the Marvel API.\
For more information, visit [this link](https://developer.marvel.com/).
