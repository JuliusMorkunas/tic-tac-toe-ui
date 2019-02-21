# BA Weather

Tic Tac Toe game client app

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

```shell
docker build --tag=tic-tac-toe-ui .
docker run -p 80:80 tic-tac-toe-ui
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

[OpenWeatherMap API documentation](https://openweathermap.org/current)

[IPData.co API documentation](https://ipdata.co/docs.html)

## Licensing

MIT License
