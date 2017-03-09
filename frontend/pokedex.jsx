import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from "./util/api_util";
import configureStore from './store/store';
import Root from './components/root';
import {requestSinglePokemon} from './actions/pokemon_actions';
import {requestAllPokemon} from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.requestSinglePokemon = requestSinglePokemon;
  window.requestAllPokemon = requestAllPokemon;

  ReactDOM.render(<Root store={store}/>, rootEl);
  // ReactDOM.render(<h1>backup</h1>, rootEl);
});
