# Construção de Software - T2

## Installation

This application requires [Node.js](https://nodejs.org/) to run.

Then, install the dependencies and start the server by typing the lines bellow:

```
npm install --global yarn
yarn install
```

## Development

Duplicate the .env.example file and rename it to .env, then set the variables according to the list bellow:

- **DATABASE_USER** = constr-sw-2021-g5-t2
- **DATABASE_PASSWORD** = BRC0bmooiVbh3xDL

Now you're ready to type the following command and start to develop:

```
yarn start
```

Your server will be avaliable on http://localhost:3333.

## Endpoints

You can interact with the endpoints by accessing the Swagger documentation:

http://localhost:3333/api-docs/