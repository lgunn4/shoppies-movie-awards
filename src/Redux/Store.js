import {applyMiddleware, createStore} from "redux";
import {reducers} from "./Reducers";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";

const logger = createLogger({ collapsed: true });

export default function configureAppStore() {
    return createStore(
        reducers,
        composeWithDevTools(applyMiddleware(thunk, logger)),
    );
}
