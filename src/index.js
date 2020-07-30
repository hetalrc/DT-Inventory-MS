import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import Dashboard from "./screen/Dashboard/Dashboard";
import rootReducer from './reducers';

const store = createStore(rootReducer)
console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
      <Dashboard />
    </Provider>,
  document.getElementById("root")
);
