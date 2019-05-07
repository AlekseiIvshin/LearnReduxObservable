import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import {mainEpic} from "./mainEpic";
import App from './App';
import './index.css';
import main from "./mainReducer";

const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers({
  main,
});

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(combineEpics(mainEpic));

ReactDOM.render(
  (
  <Provider store={store}>
    <App />
  </Provider>
  ),
  document.getElementById('root')
);
