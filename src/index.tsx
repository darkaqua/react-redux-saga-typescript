import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './components/App.component';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {rootReducer, rootSaga} from "./store";
import createSagaMiddleware from 'redux-saga'

/** Saga init **/
const sagaMiddleware = createSagaMiddleware();

/** Store creation **/
const store = createStore(
    rootReducer,
    applyMiddleware(thunk, sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

/** render DOM **/
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
