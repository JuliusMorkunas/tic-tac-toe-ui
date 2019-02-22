# Tic Tac Toe

[![License][license-badge]][license-url]

> Tic Tac Toe game client app

## Installing / Getting started

See [Setting up Dev](#setting-up-dev) section.

## Developing

### Built With

[Create-React-App](https://facebook.github.io/create-react-app/)

### Prerequisites

It's recommended to have [yarn](https://yarnpkg.com/) installed locally to follow the instructions in documentation.

If you have [npm](https://www.npmjs.com/get-npm) installed instead of [yarn](https://yarnpkg.com/),
you can use it by simply replacing `yarn` commands with `npm`.

### Setting up Dev

```shell
git clone https://github.com/julykaz/tic-tac-toe-ui.git
cd tic-tac-toe-ui
yarn install
yarn start
```

### Building

#### On local machine:

```shell
yarn build
```

#### In docker container:

Building an image
```shell
$ docker-compose build
```

Running a container
```shell
$ docker-compose up
```

Stopping a container
```shell
$ docker-compose down
```

### Deploying / Publishing

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/julykaz/tic-tac-toe-ui)

## Configuration

* Set `REACT_APP_API_URL` environment variable to use external action logging API.

## Tests

```shell
yarn test
```

## Style guide

Using [Prettier](https://prettier.io/) to simplify code formatting. [See why.](https://prettier.io/docs/en/why-prettier.html)

## Api Reference

[Tic Tac Toe Action Logging API](https://github.com/julykaz/tic-tac-toe-api)

## Licensing

MIT License

[license-badge]: https://img.shields.io/github/license/robertoachar/docker-express-mongodb.svg
[license-url]: https://opensource.org/licenses/MIT
