import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';


import { Provider } from 'react-redux';
import configureAppStore from './Redux/Store';
import App from './App';

const store = configureAppStore();

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render( <Provider store={store}>
  <App />
</Provider>);
