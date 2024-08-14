import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './Reducers';

const logger = createLogger({ collapsed: true });

export default function configureAppStore() {
  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk, logger)),
  );
}
