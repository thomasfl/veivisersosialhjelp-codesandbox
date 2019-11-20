import * as React from "react";
import { render } from "react-dom";
import DetteBorDuVite from "./artikler/dette-bor-du-vite/DetteBorDuVite";
import "./styles.css";
import "./index.less";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from 'history'
import {erDev} from "./utils/restUtils";
import DetteKanDuSokeOm from "./artikler/dette-kan-du-soke-om/DetteKanDuSokeOm";
import AndreMuligheter from "./artikler/andre-muligheter/AndreMuligheter";

/**
 * Resolves basename in a pathname independent way
 */
export function getAbsoluteBasename() {
    // @ts-ignore
    // return erDev() ? "sosialhjelp/innsyn" : window.location.pathname.replace(/^\/(([^/]+\/)?sosialhjelp\/innsyn).+$/, "$1");
    return erDev() ? "sosialhjelp" : window.location.pathname.replace(/^\/(([^/]+\/)?sosialhjelp).+$/, "$1");
}

export const history = createBrowserHistory({
    basename: getAbsoluteBasename()
});


function App() {
  return (
            <Router history={history}>
                <br/>
                <br/>
                <a href="dette-bor-du-vite">/dette-bor-du-vite</a> &nbsp;
                <a href="dette-kan-du-soke-om">/dette-kan-du-soke-om</a>
                <br/>
                <Switch>
                    <Route exact path="/" component={DetteBorDuVite}/>
                    <Route exact path="/dette-bor-du-vite" component={DetteBorDuVite}/>
                    <Route exact path="/andre-mulighter" component={AndreMuligheter}/>
                    <Route exact path="/dette-kan-du-soke-om" component={DetteKanDuSokeOm}/>
                </Switch>
                <br/>
                <br/>
            </Router>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
