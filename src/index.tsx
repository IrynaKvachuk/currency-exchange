import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <HashRouter basename="/">
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </HashRouter>
);
