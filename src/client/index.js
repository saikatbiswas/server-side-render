// Startup point for client side application
import React from "react";
import ReactDOM from 'react-dom';
import "@babel/polyfill";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from 'react-redux';
import reducers from './store/reducers';
import rootSaga from "./store/sagas";

import Routes from "./Routes";

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);

const store = createStore(reducers, enhancer);
sagaMiddleware.run(rootSaga);

// document.querySelector('#root') means run home component inside already render <div id="roow"></div>
ReactDOM.hydrate( 
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
, document.querySelector('#root') );


