'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

//routes
import Routes from './routes';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

Meteor.startup(() => {
  render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory} routes={Routes} />
    </Provider>
    , document.querySelector('.app-container'));
  });
