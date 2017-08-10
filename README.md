# Project Name

> Pithy project description

## Team

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

1. Install all dependencies (see Installation)
2. Start the mongoDB (see Create and Start the Database)
3. Populate the data using the buildData script (see Populate Database)
4. Start the server (see Start the Server)



### Installation:

For full instruction on installation of this application, see 'Installing Dependencies'.

~~~~~~~~~~~~

  npm install

~~~~~~~~~~~~



### Create and Start the Database:

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



### Populate database: 

This script will populate the database with recipes pulled from a predetermined list found inside of the server directory.

Before running, ensure you are in the root directory.

~~~~~~~~~~~~

  npm run buildData

~~~~~~~~~~~~

Runtime:  ~ 1 minute

The script will need time to run through all of the API calls to insert data into the database.

Don't panic, your computer is not broken!

Once the list is fully generated, to test if it is still pulling data, type some text into the console and wait for a few seconds.  If your text disappears into a wall of success messages, you're not finished yet.  Once finished, use "ctrl" + "c" to be able to escape out of the action.



### Start the server:

To start the server, ensure that you have first ran 'npm install' in your terminal.

This starts a nodemon instance of the server as well as instructs webpack to watch any files for you.

For the full script, see the package.json

~~~~~~~~~~~~

  npm start

~~~~~~~~~~~~



## Requirements

###Dev Dependencies:

For all dependencies listed, please use the most up to date packages available through npm.

- babel-cli: 6.7.5 
- babel-core: 6.25.0 
- babel-loader: 7.1.1 
- babel-preset-es2015: 6.6.0 
- babel-preset-latest: 6.24.1 
- babel-preset-react: 6.24.1 
- babel-register: 6.7.2 
- eslint-config-hackreactor: "git://github.com/reactorcore/eslint-config-hackreactor"
- webpack: 3.5.1 

Dependencies:

For all dependencies listed, please use the most up to date packages available through npm.

- express: 4.15.4
- flexbox-react: 4.4.0
- jquery: 3.2.1
- lodash: 4.17.4
- material-ui: 0.18.7
- mongoose: 4.11.6
- nodemon: 1.11.0
- react: 15.6.1
- react-dnd: 2.4.0
- react-dnd-html5-backend": 2.4.1
- react-dom: 15.6.1
- react-redux: 5.0.6
- react-tap-event-plugin: 2.0.1
- redux: 3.7.2
- redux-thunk: 2.2.0
- request: 2.81.0
- request-promise: 4.2.1


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
