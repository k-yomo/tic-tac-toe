import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';
import ticTacToeReducer from './reducers/ticTacToe';

const store = createStore(ticTacToeReducer);

const jsx = (
  <Provider store={store}>
    <Game />
  </Provider>
)
ReactDOM.render(
  jsx,
  document.getElementById('root')
);
