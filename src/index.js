import React from "react";
import ReactDOM from "react-dom"; // Utilisez la manière standard d'importer ReactDOM
import App from "./App";
import "./index.css";

import { store } from "./store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
