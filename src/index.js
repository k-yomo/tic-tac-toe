import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';
import gameReducer from './reducers/game';

const store = createStore(
  gameReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const jsx = (
  <Provider store={store}>
    <Game />
  </Provider>
)
ReactDOM.render(
  jsx,
  document.getElementById('root')
);
