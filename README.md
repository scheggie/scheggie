# ScheggieX

> When you're a vegetarian and your meals need planning, ScheggieX is all you need.

## Founding Team Members

  - Miles Sorce
  - Neal Williams
  - James Critelli
  - Thomas Cosby

## Legacy Team Members
  - Greg Susko
  - Tiffany Choy
  - Nova Qiu
  - Chao Zeng


## Usage

In order to start our app, you must follow the following procedure:

1. Install all dependencies (see Installation)
2. Start the mongoDB (see Create and Start the Database)
3. Determine whether you want to keep the app vegetarian-focused (and continue to use the existing Yummly data), or whether you want to take things in a new direction (and use new data).
4. If you choose to use the existing data (which comes from the Yummly API), see steps below under 'Populate the Database with Recipe Data' to see how to use our existing data. Otherwise, you'll need to get your own API key and pull down data from a new API
5. Start the server (see Start the Server)

### Installation

npm install

~~~~~~~~~~~~

### Create and Start the Database:

Before you can build the static data, you must start up the database.

- In the databases directory, run the following command:

  mkdir -p data/db

~~~~~~~~~~~~

- Once the directory is created, run this command and replace "----dbpath data/db" with your current database path, update the config.js file with the path:

  mongod --dbpath data/db

~~~~~~~~~~~~

At this point, the database is now created and ready to use.

### Populate the database with Recipe Data

1). Go to the Scheggie Heroku dashboard
2). Click into “Scheggie Staging” (the most updated version of the app) 
3). Click into mLab MongoDB under the “Installed Add-Ons” heading - there you will see the collections in our Heroku database (Recipes and Users)
4). You are going to want to do a dump of the Recipes database (you can ignore the Users DB). The code listed under “Create a Dump File” (as described here: https://devcenter.heroku.com/articles/heroku-postgres-import-export) should walk you through how to get the data onto your Desktop. Note that if there are any values required to export things, they should be available in the Heroku Config variables  docs (as described here: https://dashboard.heroku.com/apps/scheggie-staging/settings) 
5). The data will be exported to your Desktop as a BSON (binary) file. The following command should enable you to import the data to your local MongoDB:   mongorestore -d db_name -c collection_name path/file.bson
 6). When you log-in to your local MongoDB, you should see the new data reflected there

### Start the Server

To start the server, ensure that you have first ran 'npm install' in your terminal.

This starts a nodemon instance of the server as well as instructs webpack to watch any files for you.

npm start

~~~~~~~~~~~~

For the full script, see the package.json

~~~~~~~~~~~~

## Requirements

### Dev Dependencies:

For all dependencies listed, please use the most up to date packages available through npm.

- babel-cli: 6.7.5 or latest,
- babel-core: 6.25. or latest0,
- babel-jest: 20.0. or latest3,
- babel-loader: 7.1.1 or latest,
- babel-preset-es2015: 6.6.0 or latest,
- babel-preset-latest: 6.24. or latest1,
- babel-preset-react: 6.24. or latest1,
- babel-register: 6.7.2 or latest,
- chai-http: 1.0.0 or latest,
- chai: 4.1.1 or latest,
- eslint-config-hackreactor: git://github.com/reactorcore/eslint-config-hackreactor,
- mocha: 3.5.0 or latest,
- should: 11.2. or latest1,
- enzyme: 2.9.1 or latest,
- jest: 20.0. or latest4,
- webpack: 3.5.1 or latest

### Dependencies:

For all dependencies listed, please use the most up to date packages available through npm.

- async: 2.5.0 or latest,
- body-parser: 1.17.2 or latest,
- express: 4.15.4 or latest,
- express-session: 1.15.5 or latest,
- flexbox-react: 4.4.0 or latest,
- jquery: 3.2.1 or latest,
- lodash: 4.17.4 or latest,
- material-ui: 0.18.7 or latest,
- material-ui-search-bar: 0.3.0 or latest,
- mocha: 2.3.1 or latest,
- mongo-client: 0.2.1 or latest,
- mongodb: 2.2.31 or latest,
- mongoose: 4.11.6 or latest,
- nodemon: 1.11.0 or latest,
- passport: 0.3.2 or latest,
- passport-facebook: 2.1.1 or latest,
- react: 15.6.1 or latest,
- react-dnd: 2.4.0 or latest,
- react-dnd-html5-backend: 2.4.1 or latest,
- react-dom: 15.6.1 or latest,
- react-facebook-login: 3.6.2 or latest,
- react-redux: 5.0.6 or latest,
- react-tap-event-plugin: 2.0.1 or latest,
- redux: 3.7.2 or latest,
- redux-storage: 4.1.2 or latest,
- redux-storage-engine-localstorage: 1.1.4 or latest,
- redux-thunk: 2.2.0 or latest,
- request: 2.81.0 or latest,
- request-promise: 4.2.1 or latest

### Roadmap

View the project roadmap [here](https://docs.google.com/spreadsheets/d/1hQ8Blq0A3DPXplFfuNZ71t7HZW2ujWPbEfrY_DncQnc/edit#gid=0)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
