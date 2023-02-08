import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/app";

//без тулкита

import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./components/services/reducers/index";
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// import { createStore } from 'redux';
// import { rootReducer } from './reducers';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { applyMiddleware } from 'redux';
// import { midleware } from './midlewares'

// const initialState = {todos: []}
// const store = createStore(
//     rootReducer,
//     initialState,
//     compositeWithDevTools(applyMidleWare(...midleware))
// );
