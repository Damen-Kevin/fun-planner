import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import App from './components/app';

const store = configureStore()
console.log(store)
render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
);
