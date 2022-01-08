import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware, { END } from "redux-saga";
import reducers from "../client/store/reducers";
import rootSaga from "../client/store/sagas"; 

export default ()=> {
    // const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const sagaMiddleware = createSagaMiddleware();
    // const enhancer = composeEnhancers(
    //     applyMiddleware(sagaMiddleware)
    // );

    const store = createStore(
        reducers,
        {},
        applyMiddleware(sagaMiddleware)
      );

    // const store = createStore(reducers, enhancer);
    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    return store;
};