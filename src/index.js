import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from "react-redux";
import configureAppStore from "./Redux/Store";
import App from "./App";

const store = configureAppStore();


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);