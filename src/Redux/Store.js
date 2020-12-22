import {configureStore} from '@reduxjs/toolkit'
import {applyMiddleware} from "redux";
import {reducers} from "./Reducers";
import thunk from 'redux-thunk';
import {createLogger} from "redux-logger";

const logger = createLogger({ collapsed: true });

export default function configureAppStore(preloadedState) {
    return configureStore({
        reducer: reducers,
        middleware: applyMiddleware(thunk, logger),
        preloadedState,
    });
}
