import * as React from "react";
import { render } from "react-dom";
import {Provider} from "react-redux";

import DetteBorDuVite from "./artikler/dette-bor-du-vite/DetteBorDuVite";
import configureStore from "./redux/configureStore";
import "./styles.css";
import "./index.less";

const store = configureStore();

function App() {
  return (
      <Provider store={store}>
        <div>
            <br/>
            <br/>
            <DetteBorDuVite/>
        </div>
      </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
