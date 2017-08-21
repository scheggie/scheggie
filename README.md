# Scheggie

> When you're a vegetarian and your meals need planning, Scheggie is all you need.

## Founding Team Members

  - Miles Sorce
  - Neal Williams
  - James Critelli
  - Thomas Cosby

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

In order to start our app, you must follow the following procedure:

1. [Install](#installation)all dependencies.
1. [Create and Start](#create-and-start-the-database) the mongoDB.
1. [Fetch](#fetch-recipe-ids) recipe ID's using the buildInitialData script.
1. [Build](#build-full-recipes) the full data using the buildFullData script.
1. [Start](#start-the-server) the server.



### Installation

For full instruction on installation of this application, see 'Installing Dependencies'.

~~~~~~~~~~~~

  npm install

~~~~~~~~~~~~



### Create and Start the Database

Before you can build the static data, you must start up the database.

- In the databases directory, run the following command:

~~~~~~~~~~~~

  mkdir -p data/db

~~~~~~~~~~~~

- Once the directory is created, run this command:

~~~~~~~~~~~~

  mongod --dbpath data/db

~~~~~~~~~~~~

At this point, the database is now created and ready to use.



### Fetch Recipe IDs

We used the Yummly Recipe API to populate our database. To proceed, you must first obtain an API key from https://developer.yummly.com. Add the APP_KEY and APP_ID to your config.js file.

This script will populate the database with recipe IDs pulled from a predetermined food list found inside of the server directory.

Before running, ensure you are in the root directory.

~~~~~~~~~~~~

  npm run buildInitialData

~~~~~~~~~~~~

Runtime:  ~ 1 minute

The script will need time to run through all of the API calls to insert initial data into the database.

Don't panic, your computer is not broken!

Once the list is fully generated, to test if it is still pulling data, type some text into the console and wait for a few seconds.  If your text disappears into a wall of success messages, you're not finished yet.  Once finished, use "ctrl" + "c" to be able to escape out of the action.



### Build Full Recipes

This script will populate the database with full recipe data for each recipe ID that already exists in the databse.

Before running, ensure you are in the root directory.

~~~~~~~~~~~~

  npm run buildFullData

~~~~~~~~~~~~

Runtime:  ~ 3-4 minutes

The script will need time to hit the Yummly API for every recipe ID in the database. Upon successfully retrieving a full recipe from the API, the script will update each recipe entry in the database by setting the fullData property equal to the API's response, and fullDataSorter equal to 'true'.

Once the list is fully generated, to test if it is still pulling data, type some text into the console and wait for a few seconds.  If your text disappears into a wall of success messages, you're not finished yet.  Once finished, use "ctrl" + "c" to be able to escape out of the action.



### Start the Server

To start the server, ensure that you have first ran 'npm install' in your terminal.

This starts a nodemon instance of the server as well as instructs webpack to watch any files for you.

For the full script, see the package.json

~~~~~~~~~~~~

  npm start

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

Dependencies:

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

## Development

### Installing Dependencies

This application uses npm for all of its package management. 

From within the root directory:

~~~~~~~~~~~

  npm install

~~~~~~~~~~~


### Roadmap

View the project roadmap [here](https://docs.google.com/document/d/1Bv9lKkk7HN9q1PnMERsxCTUeNJh9IVQy1JROlKGM80I/edit?usp=sharing)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
