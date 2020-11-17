
import {createStore, applyMiddleware, compose } from 'redux';

import count from './reducer';

const store = createStore(
    count,
    applyMiddleware(),
    compose(window.devToolsExtension?window.devToolsExtension():f=>f)
  );

export default store