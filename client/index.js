import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store.js';
import { createRoot } from 'react-dom/client';
import './styles.scss';
import * as bootstrap from 'bootstrap';

const domNode = document.getElementById('main');
const root = createRoot(domNode);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);