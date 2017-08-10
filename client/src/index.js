import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import * as storage from 'redux-storage';
import { createStore, applyMiddleware } from "redux";
import { bindActionCreators } from "redux";
import createEngine from 'redux-storage-engine-localstorage';
import App from './app';
import rootReducer from './reducers';
import { connect } from 'react-redux';
import actions from './actions';

const engine = createEngine('scheggie-main-storage');
const storageMiddleware = storage.createMiddleware(engine);

const store = createStore(
  rootReducer,
  applyMiddleware(storageMiddleware),
  applyMiddleware(thunk)
);

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

const ConnectedApp = connect(
  state => state,
  mapDispatchToProps
)(App);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
  }
}

const load = storage.createLoader(engine);

load(store)
  .then((newState) => console.log('Loaded state:', newState))
  .catch(() => console.log('Failed to load previous state'));

ReactDOM.render(<Root />, document.getElementById('app'));
