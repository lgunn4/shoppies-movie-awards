import {applyMiddleware, createStore} from "redux";
import {reducers} from "./Reducers";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";

const logger = createLogger({ collapsed: true });

export default function configureAppStore(preloadedState) {
    return createStore(
        reducers,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk, logger)),

    );
}
