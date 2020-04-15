import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import main from './reducers/main';

export default function configureStore() {
  // eslint-disable-next-line no-undef
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(main, composeEnhancers(applyMiddleware(thunk)));

  return store;
}
