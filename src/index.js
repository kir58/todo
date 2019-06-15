import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import App from "./components/App";
import reducers from "./reducers";
import { getInitState } from "./actions";

/* eslint-disable no-underscore-dangle */
// const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
// const devtoolMiddleware = ext && ext();
const store = createStore(reducers, compose(applyMiddleware(thunk)));

store.dispatch(getInitState());

render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
