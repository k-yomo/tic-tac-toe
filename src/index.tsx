import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import Game from './containers/Game';
import gameReducer from './reducers/gameReducer';

const store = createStore(
  gameReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const jsx = (
  <Provider store={store}>
    <Game />
  </Provider>
);
ReactDOM.render(
  jsx,
  document.getElementById('root')
);
