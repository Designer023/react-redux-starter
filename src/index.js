import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './app.js';
import './styles.css';

// Create a store using the store configuration
const store = configureStore();

// Render the applictaion with the provider / store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
