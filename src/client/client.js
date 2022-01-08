// Startup point for client side application
import 'babel-polyfill';
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
// import createSagaMiddleware from "redux-saga";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import cookie from 'react-cookies';
import reducers from './store/reducers';
// import rootSaga from "./store/sagas";
import Routes from "./Routes";

axios.defaults.headers.post['Content-Type'] = 'application/json';
const axiosInstance = axios.create({
    // First /api is i have setup proxy on server/index.js if i change to /myapp then change server/index.js proxy to myapp 2nd api is my all api prefix is api so every axios call i dont need to apss /api in rewuest
    baseURL: '/api/api',
    headers: {'Authorization': cookie.load('x-access-token')?`Bearer ${cookie.load('x-access-token')}` : '' }
});

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);
const store = createStore(reducers, window.INITIAL_STATE, enhancer);
// sagaMiddleware.run(rootSaga);
// document.querySelector('#root') means run home component inside already render <div id="roow"></div>
ReactDOM.hydrate( 
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
, document.querySelector('#root') );


