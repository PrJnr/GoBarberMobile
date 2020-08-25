import {createStore, applyMiddleware} from 'redux';

export default (reducers, middlewares) => {
    const enhancer = applyMiddleware(...middlewares);
    return createStore(reducers, enhancer);
};

// Esse arquivo e para quem usa o Reactroton, para encapsular.
// Compose e utilizado pelo reactroton
