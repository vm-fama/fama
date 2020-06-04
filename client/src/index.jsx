import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import './index.scss';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App idx="1" />
  </Provider>,
  document.getElementById('root'),
);
