import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./redux/store";
import Mainpage from "./Layouts/Mainpage";

const store = configureStore();

const App = () => <Mainpage />;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
