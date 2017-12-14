import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogicMiddleware } from 'redux-logic';
import logger from 'redux-logger'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import arrLogic from './logic';
import reducer from './reducers'

const middleware = applyMiddleware(
  createLogicMiddleware(arrLogic),
  logger
);

let store = createStore(reducer, middleware)

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

registerServiceWorker();
