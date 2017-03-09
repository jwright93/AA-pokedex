import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from "./util/api_util";
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  window.store = store;

  ReactDOM.render(<Root store={store}/>, rootEl);
  // ReactDOM.render(<h1>backup</h1>, rootEl);
});
