import * as React from "react";
import { render } from "react-dom";
import DetteBorDuVite from "./artikler/dette-bor-du-vite/DetteBorDuVite";
import "./styles.css";
import "./index.less";

function App() {
  return (
        <div>
            <br/>
            <br/>
            <DetteBorDuVite/>
        </div>

  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
