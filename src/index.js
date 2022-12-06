import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/index.css";

import { Provider } from "react-redux";
//provider is a wrapper taken from the bindings library of Redux for React
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* PersistGate is a component you want to inject in between
    your Redux Provider and your main component {App} */}
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
